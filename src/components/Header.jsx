import React from "react";
import { NavLink } from "react-router-dom";

const Header=()=>{
  return(
    <>
      <div className="header">
        <div className="Total">
          <h2 className="logo ">merchify'</h2>
          <nav className="menu">
            <ul className="LeftNav">
              <ul className="page"><NavLink to={'/Home'} className={'nav'}>Home</NavLink></ul>
              <ul className="page"><NavLink to={'/Track'} className={'nav'}>Track Shipment</NavLink></ul>
            </ul>
            <ul className="RightNav">
              <ul className="page"><NavLink to={'/Cart'} className={'nav'}>Cart</NavLink></ul>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );

}
export default Header;