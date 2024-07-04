
import fs from 'node:fs';

const saveBoxLocation = '../../saveBox/test.txt'


class Persistence {


    async loadDB() {
        fs.readFile(saveBoxLocation, 'utf8', (e, data) => {
            if (e) {
                console.log('a', JSON.stringify(e, null, 2))
            }
            console.log('check', JSON.stringify(data, null, 2))
        })
    }
}

export default Persistence;