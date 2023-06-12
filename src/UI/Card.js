import { useRef } from "react";
import classes from "./Card.module.css"
const Card = (props) =>{
    const divRef = useRef();
    const clickHandler = () => {
        // divRef.current.style.background= 'red';
        // divRef.current.style.height = "100%";
        props.click();
    };
    return(
        <div ref={divRef} className={classes.card} onClick={clickHandler}>
            {props.children}
        </div>
    );
}
export default Card