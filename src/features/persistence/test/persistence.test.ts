
import { expect, test } from 'vitest';
import Persistence from '../Persistence';
 

test('basic test', () => {
    const persistence = new Persistence();
    const db = persistence.loadDB();
    expect(2 + 2).toBe(4);
});