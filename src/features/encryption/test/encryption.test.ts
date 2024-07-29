import { expect, test } from 'vitest';
import Encryption from "../encryption";
 

test('compare similar inputs both with diferent digest', async() => {    
    const encryption = Encryption.getInstance();
    const digest1 = await encryption.createHashedKey("testKey435");
    const digest2 = await encryption.createHashedKey("testkey435");
    expect(digest1 !== digest2);
});
test('compare the same inputs both with the same digest', async() => {    
    const encryption = Encryption.getInstance();
    const digest1 = await encryption.createHashedKey("testKey435");
    const digest2 = await encryption.createHashedKey("testKey435");    
    expect(digest1).toEqual(digest2);
});