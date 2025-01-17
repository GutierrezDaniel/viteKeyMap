import { expect, test, describe } from 'vitest';
import Encryption from '../encryption';
import testDataJson from './testData.json';

describe('encryption/decryption algorithms work correctly', () => {
  test('compare similar inputs both with diferent digest', async () => {
    const encryption = Encryption.getInstance();
    const digest1 = await encryption.createHashedKey('testKey435');
    const digest2 = await encryption.createHashedKey('testkey435');
    expect(digest1 !== digest2);
  });
  test('compare the same inputs both with the same digest', async () => {
    const encryption = Encryption.getInstance();
    const digest1 = await encryption.createHashedKey('testKey435');
    const digest2 = await encryption.createHashedKey('testKey435');
    expect(digest1).toEqual(digest2);
  });
  test('the input and the output is the same after encryption-decryption', async () => {
    const encryption = Encryption.getInstance();
    const testdata = JSON.stringify(testDataJson);
    await encryption.createHashedKey('testKey436');
    const encryptedData = await encryption.encrypt(testdata);
    const decryptedData = await encryption.decrypt(encryptedData);
    expect(testDataJson).toEqual(decryptedData);
  });
  test('the output is wrong for different keys', async () => {
    const encryption = Encryption.getInstance();
    const testdata = JSON.stringify(testDataJson);
    await encryption.createHashedKey('testKey436');
    const result = await encryption.encrypt(testdata);
    await encryption.createHashedKey('testkey435');
    expect(() => encryption.decrypt(result)).rejects.toThrow(Error);
  });
  test('a known key and value must remain the same after encryption/decryption', async () => {
    const encryption = Encryption.getInstance();
    const knownDate = testDataJson?.[0]?.registered;
    await encryption.createHashedKey('testKey436');
    const testdata = JSON.stringify(testDataJson);
    const result = await encryption.encrypt(testdata);
    await encryption.createHashedKey('teestKey436'); // clear key
    await encryption.createHashedKey('testKey436');
    const decryptedData = await encryption.decrypt(result);
    const decryptedSameDate = decryptedData?.[0]?.registered;
    expect(decryptedSameDate).toEqual(knownDate);
  });
});
