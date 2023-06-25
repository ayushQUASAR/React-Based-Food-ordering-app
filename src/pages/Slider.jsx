import React from "react";
import "./Home.css";
import dt from "./Fimg";
import { useState } from "react";

const Slider = () => {
  const [cindex, setindx] = useState(0);
  const [transl, settransl] = useState();


  const clk=(index)=>{
    setindx(index)
    if(index===0){
       settransl(0);
    }
    else {
      let t=index*100;
      settransl(-t);
    }

  }
  const istyle={
    transform:`translateX(${transl}%)`,
    transition:'transform ease-in-out 1s',
  }
  return (
    <>
    <div className="imgslider" >
      <div className="slide" style={istyle}>
      {dt.map((val, index) => {
        return <div className="ont"><img src={val.src} key={index} alt="hi" className="simg" /> 
        
          </div>
          
      }
      )}
      </div>

      <div className="nav2">
      <div className="slide1" >
        {dt.map((val, index) => {
          return <div className={`btns ${cindex===index ? 'bactive': ''}`} onClick={()=>clk(index)}></div>;
        })}
      </div>
      </div>
    </div>
    <div className="blnk">
   <h1>   Eat and Repeat what you love the most</h1>
    </div>
 
  
    </>
  );
};

export default Slider;
