
import { expect, test } from 'vitest';
import Persistence from '../Persistence';
 

test('basic search for key', async() => {    
    const store = await Persistence.connectStore();    
    const result = store.searchByKey("ramdomKey");    
    expect(result).toEqual("exampleTexts")
});