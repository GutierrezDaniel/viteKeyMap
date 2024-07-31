import crypto from 'node:crypto';

export default class Encryption {
  private choosedAlgorithm = process.env.CHOOSEDALGORITHM;
  private static instanceOfEncription: Encryption;
  private currentKey?: string;
  textBaseKey?: string;
  private constructor() {}
  private convertByteToHexString = (arrayOfBytes: number[]) =>
    arrayOfBytes.map((byte) => byte.toString(16).padStart(2, '0')).join('');

  async createHashedKey(baseKey: string): Promise<string> {
    if (typeof this.choosedAlgorithm === 'undefined') {
      throw new Error('invalid encryption algorithm');
    }
    const encoder = new TextEncoder();
    const encodedKey = encoder.encode(baseKey);
    const hashedKey = await crypto.subtle.digest(this.choosedAlgorithm, encodedKey);
    const hexKey = this.convertByteToHexString(Array.from(new Uint8Array(hashedKey)));
    this.textBaseKey = baseKey;
    this.currentKey = hexKey;
    return hexKey;
  }
  async encrypt(plainText: string) {
    if (!this.textBaseKey) {
      throw new Error('key not found');
    }
    const iv = crypto.randomBytes(16);
    const rehasedKey = crypto.createHash('sha256').update(this.textBaseKey).digest('base64');
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(rehasedKey, 'base64'), iv);
    let encrypted = cipher.update(plainText, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    return iv.toString('base64') + ':' + encrypted;
  }

  async decrypt(enText: string) {
    if (!this.textBaseKey) {
      throw new Error('key not found');
    }
    const [ivE, ...encTxt] = enText.split(':');
    const encryptedText = encTxt.join(':');
    const rehasedKey = crypto.createHash('sha256').update(this.textBaseKey).digest('base64');
    const decipher = crypto.createDecipheriv(
      'aes-256-cbc',
      Buffer.from(rehasedKey, 'base64'),
      Buffer.from(ivE, 'base64')
    );
    return JSON.parse(decipher.update(encryptedText, 'base64', 'utf8') + decipher.final('utf8'));
  }
  getCurrentKey(): string | undefined {
    return this.currentKey;
  }
  static getInstance() {
    if (!this.instanceOfEncription) {
      this.instanceOfEncription = new Encryption();
    }
    return this.instanceOfEncription;
  }
}
