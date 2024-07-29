import crypto from 'node:crypto';

export default class Encryption {
    private choosedAlgorithm = process.env.CHOOSEDALGORITHM;

    private convertByteToHexString = (arrayOfBytes: number[])=> arrayOfBytes.map(
            byte => byte.toString(16).padStart(2, '0')
        ).join('');
        
    async createHashedKey(baseKey: string): Promise<string>{
        const encoder = new TextEncoder();
        const encodedKey = encoder.encode(baseKey);
        if(typeof this.choosedAlgorithm === "undefined"){
            throw new Error('invalid encryption algoritm')
        }
        const hashedKey = await crypto.subtle.digest(this.choosedAlgorithm,encodedKey)
        return this.convertByteToHexString(Array.from(new Uint8Array(hashedKey)))        
    }
    
}