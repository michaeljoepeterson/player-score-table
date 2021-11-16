/**
 * class to help paging results
 */
export class Pager{
    items:any[] = [];
    resultsPerPage:number;
    pagedItems:any[][] = [];
    selectedPage:number = 0

    constructor(options:any){
        this.init(options)
    }
    
    init(options:any){
        let {items,resultPerPage} = options;
        this.items = [...items];
        this.resultsPerPage = resultPerPage;
        try{
            if(this.items){
                this.initPages(this.items,this.resultsPerPage);
            }
        }
        catch(e){
            console.error('error pager init: ',e);
        }
    }

    /**
     * build array of arrays to represent pages
     * @param items 
     * @param resultsPerPage 
     */
    initPages(items:any[],resultsPerPage:number){
        this.pagedItems = this.buildEmptyArrays(items,resultsPerPage);
        let currentItemIndex = 0;
        let numAdded = 0;
        for(let i = 0;i < this.pagedItems.length;i++){
            while(numAdded < resultsPerPage){
                if(currentItemIndex === items.length){
                    break;
                }
                this.pagedItems[i].push(items[currentItemIndex]);
                currentItemIndex++;
                numAdded++;
            }

            numAdded = 0;
        }
    }

    /**
     * change the selected page
     * @param page 
     */
    changePage(page:number){
        this.selectedPage = page;
    }

    /**
     * build the initial empty arrays
     * @param items 
     * @param resultsPerPage 
     * @returns 
     */
    buildEmptyArrays(items:any[],resultsPerPage:number):any[][]{
        let pages = Math.ceil(items.length / resultsPerPage);
        let pagedItems = [];
        for(let i = 0;i < pages;i++){
            pagedItems.push([]);
        }

        return pagedItems;
    }

    /**
     * get the items from a specific page
     * @param page 
     * @returns 
     */
    getPage(page:number):any[]{
        if(page || page === 0){
            return this.pagedItems[page];
        }
        return this.pagedItems[this.selectedPage];
    }
}