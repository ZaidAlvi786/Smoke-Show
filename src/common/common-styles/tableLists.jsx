import React from 'react';
// import Chip from '@mui/material/Chip';
// import Stack from '@mui/material/Stack';

export const  TableLists=({setView,view})=> {
  const lists = ['Earnings','Payout_Request','Statements']
    
    return(
        <>
        <div className="px-5 pt-5 gap-3 d-flex flex-column">
       {lists.map((listName)=>(
        <div role='button' color={view === "Earnings" || "Payout_Request" ? "primary" : "default"} onClick={()=>setView(listName)}>{listName}</div>
       ))}
      </div>
        </>
    )
    
}
