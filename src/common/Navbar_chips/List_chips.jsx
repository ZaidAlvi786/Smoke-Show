import React from 'react';
import Chip from '@mui/material/Chip';
// import Stack from '@mui/material/Stack';

export const  ListChips=({setView,view})=> {
    
    return(
        <>
        <div className="px-5 gap-3 d-flex">
        <Chip
          size="small"
          label="Earning"
          onClick={() => setView("Earnings")}
          color={view === "Earnings" ? "primary" : "default"}
        />
        <Chip
          size="small"
          label="Payout Request"
          onClick={() => setView("Payout_Request")}
          color={view === "Payout_Request" ? "primary" : "default"}
        />
      </div>
        </>
    )
    
}
