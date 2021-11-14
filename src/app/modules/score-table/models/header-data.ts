export interface HeaderData{
    /**
     *header name to be displayed
     */
    name:string;
    /**
     * target property on the associated data object for rendering 
     * the data in the rows
     */
    targetProp:string;
}

/**
 * default header data for the header table
 * extracted here to avoid clogging up player score table component
 */
export const defaultPlayerTableData:HeaderData[] = [
    {
      name:"Player",
      targetProp:"Player"
    },
    {
      name:"Team",
      targetProp:"Team"
    },
    {
      name:"Position",
      targetProp:"Pos"
    },
    {
      name:"Rushing Attempts",
      targetProp:"Att"
    },
    {
      name:"Rushing Attempts/Game Average",
      targetProp:"Att_G"
    },
    {
      name:"Total Rushing Yards",
      targetProp:"Yds"
    },
    {
      name:"Rushing Average Yards/Attempt",
      targetProp:"Avg"
    },
    {
      name:"Rushing Yards/Game",
      targetProp:"Yds_G"
    },
    {
      name:"Total Rushing Touchdowns",
      targetProp:"TD"
    },
    {
      name:"Longest Rush",
      targetProp:"Lng"
    },
    {
      name:"Rushing First Downs",
      targetProp:"first"
    },
    {
      name:"Rushing First Down Percentage",
      targetProp:"firstPercent"
    },
    {
      name:"Rushing 20+ Yards Each",
      targetProp:"twentyPlus"
    },
    {
      name:"Rushing 40+ Yards Each",
      targetProp:"fortyPlus"
    },
    {
      name:"Rushing Fumbles",
      targetProp:"FUM"
    }
  ];