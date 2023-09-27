import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function MasterLayout({userData,Logout}) {
  return (
    <>
      <Navbar userData={userData} Logout={Logout}/>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}
