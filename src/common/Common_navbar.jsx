import React from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
export default function Common_navbar({view}) {
  return (
    <div className="p-3 px-5">
      <div className="w-100  d-flex justify-content-between nav_bg mt-3 mb-2 p-3 align-items-center">
        <div className="d-flex gap-3 align-items-center">
          <MdOutlineArrowBackIos />
          <span>{view}</span>
        </div>
        <BsInfoCircle />
      </div>
    </div>
  );
}
