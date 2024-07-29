
import { expect, test } from 'vitest';
import Persistence from '../persistence';
 

test('basic search for key', async() => {    
    const store = await Persistence.connectStore();    
    const result = store.searchByKey("ramdomKey"); 
    expect(result).toEqual("exampleTexts")
});