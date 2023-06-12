import {Fragment, useEffect, useRef, useState} from "react";
import DashHeader from "../components/DashHeader";
import classes from "./TagDash.module.css";
import HotTag from "../components/HotTag";
import Test from "../communityComponents/Test";
import Reminder from "../communityComponents/Reminder";
const TagDash = (props) => {
  const [uuid,setUUID] = useState();
  const [link,setLink] = useState();
  useEffect(()=>{
    setUUID(props.uuid);
    setLink(props.link);
  },[props])
  const back = () =>{
  props.back();
  };

let doubleClickTimeout;
let isDoubleClick = false;
  const clickListener = () =>{
    if(isDoubleClick){
      clearTimeout(doubleClickTimeout);
      isDoubleClick = false;
      back();
    }else{
      isDoubleClick=true;
      doubleClickTimeout = setTimeout(function(){
        isDoubleClick=false;
      },300)
    }
  }
  return (
    <Fragment>
    <div onClick={clickListener}>
    <div className={classes.body}>
        <div className={classes.headerContainer}>
          <DashHeader
          />
          <hr />
        </div>
        <div className={classes.bodyContainer}>
          <div className={classes.barrier}></div>
          <Reminder link={link}/>
          <br/>
        </div>
      </div>
    </div>
    </Fragment>
  );
};
export default TagDash;
