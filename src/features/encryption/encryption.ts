import crypto from 'node:crypto';

export default class Encryption {
    private choosedAlgorithm = process.env.CHOOSEDALGORITHM;
    private static instanceOfEncription: Encryption;
    private currentKey?: string
    private constructor(){}
    private convertByteToHexString = (arrayOfBytes: number[])=> arrayOfBytes.map(
            byte => byte.toString(16).padStart(2, '0')
        ).join('');

    async createHashedKey(baseKey: string): Promise<string>{        
        if(typeof this.choosedAlgorithm === "undefined"){
            throw new Error('invalid encryption algorithm')
        }
        const encoder = new TextEncoder();
        const encodedKey = encoder.encode(baseKey);        
        const hashedKey = await crypto.subtle.digest(this.choosedAlgorithm,encodedKey)
        const hexKey = this.convertByteToHexString(Array.from(new Uint8Array(hashedKey))) 
        this.currentKey = hexKey;
        return hexKey;
    }
    getCurrentKey(): string | undefined{
        return this.currentKey;
    }
    static getInstance(){
        if(!this.instanceOfEncription){
            this.instanceOfEncription = new Encryption;            
        } 
        return this.instanceOfEncription;
    }
}