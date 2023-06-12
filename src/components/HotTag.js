import classes from "./HotTag.module.css"
import 'bootstrap/dist/js/bootstrap.bundle';
import ButtonDiscuss from "../UI/ButtonDiscuss";
const HotTag = (props) =>{
    return (
        <div className={classes.hottag}>
            <h4 className={classes.title}>Hot Topic Of The Day</h4>
            <p>Skills</p>
            {/* <ButtonDiscuss/> */}
            {/* <button type="button" className="">Primary</button> */}
        </div>
    );
};
export default HotTag