
import fs from 'node:fs';
class Persistence {
    private saveBoxURL: string | undefined = process.env.SAVEBOXURL;
    private store: Record<string,string> = {}

    private checkSaveUrl = ()=>{
         if(typeof this.saveBoxURL === 'undefined'){
            throw new Error('undefined store URL');
        }   
    }    
    loadDB = ()=>{       
        this.checkSaveUrl();        
        fs.readFile(`${this.saveBoxURL}store.json`, 'utf8', (err, data)=>{
            if(err){
                throw new Error('something went wrong!!')
            }
            const parsedData = JSON.parse(data);
            if(Object.keys(parsedData)){
                this.store = parsedData;
            }            
        });
    } 
    private createFile = ()=>{ 
        this.checkSaveUrl();       
        fs.writeFile(`${this.saveBoxURL}store.json`, "{  }", (e)=> {
            if(e){
                console.log("error found", e)
            }
            console.log('write succed!!');
        })
    }
    searchByKey = (keyName: string): string | undefined =>{
        if(!Object.keys(this.store)){
            throw new Error("undefined store");
        }        
        return this.store[keyName];
    }
    constructor(){        
        this.loadDB = this.loadDB.bind(this)
        this.loadDB()        
    }
}

export default Persistence;