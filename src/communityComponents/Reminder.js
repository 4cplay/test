import classes from "./Reminder.module.css"
const Reminder = (props) => {
    return (
        <div className={classes.container}>
        <p className={classes.text}>If you are interested in this company.<br/> Please <a className={classes.link} href={props.link}>click here</a> to be redirected to the company's online application page, where you can gain detailed insights into their recruitment process, job requirements, and application procedures.</p>
        <br/>
        {/* <p className={classes.text}>We firmly believe that this company will offer you a career development platform brimming with opportunities and growth.</p>
        <br/>
        <p className={classes.text}>Thank you for your support of our website, and we wish you resounding success in your application process!</p> */}
        {/*<p className={classes.text}>Upload your resume here</p>*/}
        </div>
    );
}
export default Reminder