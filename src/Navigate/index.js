import { useState } from "react";
import { Link } from "react-router-dom";
import Logoute from "./Components/Logoute";
import classes from './index.module.scss'



export function Navigates() {
  
  return (

    <div className={classes.navbar}>
      <Link to={"/"}>Register</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/home"}>Home</Link>
      <Link to={"/profile"}>Profile</Link>
     <Logoute />
       </div>
  );
}

// export function Burgermenu (){
//   const [show, setshow]= useState(true)
// const handlechange = ()=>{
// setshow(!show)
// }

//   return (<div className={show?classes.Burgermenu:classes.burger_close}>
    
//        <Link to={"/"}>Register</Link>
//       <Link to={"/login"}>Login</Link>
//       <Link to={"/home"}>Home</Link>
//       <Link to={"/profile"}>Profile</Link>
//       <div>
//      <Logoute />
//      </div>
//      <div onClick={handlechange} className={show?classes.burger_button: classes.close_burger}>
//       <div className={show?classes.button_one : classes.close_up}></div>
//       <div className={show?classes.button_two : classes.close_open}></div>
//       <div className={show?classes.button_three: classes.close_down}></div>
//      </div>
//   </div>)
// }