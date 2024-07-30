import { expect, test } from 'vitest';
import Encryption from "../encryption";
import testDataJson from "./testData.json"
 

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
test('check basic encryption', async() => {    
    const encryption = Encryption.getInstance();
    const testdata = JSON.stringify(testDataJson);    
    const result = await encryption.encrypt(testdata);   
    const result2 = await encryption.decrypt(result);
    const result2parse = JSON.parse(result2);
    console.log('validate', JSON.stringify({middlepoint: result}, null, 2))
    expect(testDataJson).toEqual(result2parse);
});
