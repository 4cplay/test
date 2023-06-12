import classes from "./DashHeader.module.css"
const DashHeader = (props) => {
    return (
        <div>
        <h2>Community</h2>
        <p><a className={classes.click}>Double-click</a> anywhere back to the homepage!</p>
        {/* <p>Double-click <a className={classes.click}>anywhere </a> back to the homepage!</p> */}
        </div>
    );
}
export default DashHeader