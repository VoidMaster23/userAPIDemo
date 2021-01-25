import { makeStyles } from "@material-ui/core";
import React from "react";
import { render } from 'react-dom';

import Header from "./components/Header";

const useStyles = makeStyles({
  main: {
    background: '#36454F',
    minHeight: '100vh',
    flex:1
  }

});


function App() {
  const classes = useStyles()
  document.body.style.margin = 0;
  return (
    <div id='root'> 
        <div className={classes.main} >
      <Header />
      </div>
    </div>
    
      
  )
}

const rootElement = document.getElementById("root")
render(<App  />, rootElement)