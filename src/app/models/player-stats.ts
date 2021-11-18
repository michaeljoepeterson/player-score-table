import { BaseModel } from "./base-model";

/**
 * base class to represent the player stats
 */
export class PlayerStats extends BaseModel{
    Player:string = null;
    Team:string = null;
    Pos:string = null;
    Att:number = null;
    Att_G:number = null;
    Yds:number = null;
    Avg:number = null;
    Yds_G:number = null
    TD:number = null;
    Lng:string = null;
    first:number = null;
    firstPercent:number = null;
    twentyPlus:number = null;
    fortyPlus:number = null;
    FUM:number = null;

    constructor(data?:any){
        super();
        if(data){
            this.initPlayerStats(data);
        }
    }

    /**
     * init player stats from provided data and map that data to 
     * the correct prop names
     * @param data 
     */
    initPlayerStats(data:any){
        const keys = Object.keys(data);
        //map to map problem keys to player model
        const targetPops:Map<string,string> = new Map([
            ["Att/G",'Att_G'],
            ["Yds/G",'Yds_G'],
            ["1st",'first'],
            ["1st%",'firstPercent'],
            ["20+",'twentyPlus'],
            ["40+",'fortyPlus']
        ]);
        keys.forEach(key => {
            //handle custom key mapping
            if(targetPops.has(key)){
                let prop = targetPops.get(key);
                this[prop] = data[key];
            }
            //use defauly key mapping
            else{
                this.assignProp(data,key);
            }
        });
    }
}