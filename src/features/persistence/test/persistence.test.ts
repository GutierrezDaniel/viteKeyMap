import { expect, test, describe } from 'vitest';
import Persistence from '../persistence';

describe('persistence works as expected', () => {
  test('basic search for key', async () => {
    const store = await Persistence.connectStore();
    const result = store.searchByKey('ramdomKey');
    expect(result).toEqual('exampleTexts');
  });
});
