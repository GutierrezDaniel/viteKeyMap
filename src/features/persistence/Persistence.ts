import fs from 'node:fs/promises';


class Persistence {
    private saveBoxURL: string | undefined = process.env.SAVEBOXURL;
    private store: Record<string,string> = {}
    private constructor(){}
    private checkSaveUrl = ()=> {
         if(typeof this.saveBoxURL === 'undefined'){
            throw new Error('undefined store URL');
        }   
    }
    private async createFile(){ 
        this.checkSaveUrl();       
        await fs.writeFile(`${this.saveBoxURL}store.json`, "{  }")
    }    
    async loadDB(){       
        this.checkSaveUrl();        
        const loadedStore = await fs.readFile(`${this.saveBoxURL}store.json`, 'utf8');
        this.store = JSON.parse(loadedStore);
    }
    searchByKey = (keyName: string): string | undefined => {        
        if(!Object.keys(this.store)){
            throw new Error("undefined store");
        }        
        return this.store[keyName];
    } 
    static async connectStore(){
        const instancedStore = new Persistence();
        await instancedStore.loadDB();
        return instancedStore;
    }
}

export default Persistence;