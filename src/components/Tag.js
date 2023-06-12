import React from "react";
import Card from "../UI/Card";
import classes from "./Tag.module.css"
const Tag = (props) => {
    return (
        <Card click={props.click} >
             <p className={`${classes.grid} ${classes.title}`} >{props.name}</p>
             <p className={classes.grid}>{props.description}</p>
             <p className={classes.grid}><a className={classes.release}>Release: </a>{props.date}</p>
             <p className={classes.grid}><a className={classes.skills}>Skills: </a>{props.skill}</p>
        </Card>
    );
}
export default Tag;