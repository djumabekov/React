
import { makeAutoObservable } from "mobx";
import { getPC } from "../../data/PC"

class PCStore {

    PC = getPC();

    changes = [{id: 1, name: false, ip: false}, {id: 2, name: false, ip: false}, {id: 3, name: false, ip: false}]; //{name: false, ip: false}

    constructor() {
        makeAutoObservable(this);
    }

    // createChanges(){
    //     for(let item of this.PC){
    //         this.changes.push({id: item.id, name: false, ip: false})
    //     }
    // }

    getChanges(id){
        return this.changes[id];
    }

    setNameChanges(id, nameIsChange){
        this.changes[id].name = nameIsChange;
    }

    setIpChanges(id, ipIsChange){
        this.changes[id].ip = ipIsChange;
    }

    get getAllPC(){
        return this.PC;
    }

    getPCById(id){
        return this.PC[id];
    }

    setName(id, n){
        this.PC[id].name = n;
        console.log(" this.PC[id].name = " + id);
    }
    setIp(id, ip){
        this.PC[id].ip = ip;
    }
    setStatus(id, status){
        this.PC[id].status = status;
    }
}

export default new PCStore();