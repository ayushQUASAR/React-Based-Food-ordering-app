import React from "react";
import "./Home.css";
import { Icon } from '@iconify/react';
import { NavLink } from "react-router-dom";
import { useCartContext } from "../components/ContextCart";

const Content = (props) => {
  const {addtocart}=useCartContext();
  return (
    <>
      
      <div className="card">
        <div className="cimg">
          <img src={props.src} alt="food" className="food" /> 
         </div>
         <span className="stars"><Icon icon="material-symbols:stars-rounded"  /><Icon icon="material-symbols:stars-rounded"  /><Icon icon="material-symbols:stars-rounded"  /></span>
       
          <div className="item-name">{props.name}</div>
          <div className="text">{props.txt}</div>
          <div className="cbtn">
            <NavLink to='/Cart'>
            <button className="addcardbtn"><Icon className="cart-icon" icon="material-symbols:garden-cart-outline" onClick={()=>addtocart(props.name,props.txt,props.price,props.src)} /></button>
            </NavLink>
            <button className="cardbtn">{`Rs ${props.price}`}</button>
          </div>
       
      </div>
    </>
  );
};

export default Content;
