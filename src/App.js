import React from "react";
import Header from "./components/Header";
import Body from "./UI/Body";
import classes from "./App.module.css"
function App() {
  return (
    <React.Fragment>
      <div className={classes.headerContainer}>
        <Header title={"Welcome"} tutorial={"Click the card to explore more..."}/>
        <hr/>
      </div>
      <div className={classes.bodyContainer}>
        <div className={classes.barrier}></div>
        <Body/>

      </div>
    </React.Fragment>
  );
}

export default App;
