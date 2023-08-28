import React, { useState } from "react";
import Statements from "./statements";
import Earnings from "./Earnings";
import CommonNavbar from "../../common/Common_navbar";
import { ListChips } from "../../common/Navbar_chips/List_chips";
import { TableLists } from "../../common/common-styles/tableLists";
import "../../App.css";

// import Chip from "@material-ui/core/Chip";

const Staement = () => {
  const [view, setView] = useState("Earnings");

  return (
    <>
      <CommonNavbar view={view} />
      <div className="small-screen">
        <ListChips  setView={setView} view={view} />
      </div>
      <div className="col-3"></div>
      <div className="d-flex">
        {/* //left */}
        <div className="col-9">
          {view === "Earnings" ? (
            <Earnings />
          ) : view === "Payout_Request" ? (
            <Statements />
          ) : (
            ""
          )}
        </div>
        <div className="large-screen">
          <TableLists setView={setView} view={view} />
        </div>
      </div>
    </>
  );
};
export default Staement;
