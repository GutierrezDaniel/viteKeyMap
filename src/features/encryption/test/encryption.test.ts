import { expect, test } from 'vitest';
import Encryption from "../encryption";
 

test('compare similar hashes both with diferent digest', async() => {    
    const encryption = new Encryption;
    const digest1 = await encryption.createHashedKey("testKey435");
    const digest2 = await encryption.createHashedKey("testkey435");
    expect(digest1 !== digest2);
});