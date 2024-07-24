
import fs from 'node:fs';

class Persistence {
    saveBoxURL = process.env.SAVEBOXURL;
    loadDB() {        
        fs.readFile(`${this.saveBoxURL}test.txt`, 'utf8', (e, data) => {
            if (e) {
                console.log('a', JSON.stringify(e, null, 2))
            }
            console.log('check', JSON.stringify(data, null, 2))
        })
    }
    createFile(){        
        fs.writeFile(`${this.saveBoxURL}createDb.txt`, "TEXT CONTENT FOR CHECK", (e)=> {
            if(e){
                console.log("error found", e)
            }
            console.log('write succed!!');
        })
    }
}

export default Persistence;