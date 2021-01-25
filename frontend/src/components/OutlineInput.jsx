import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      color: 'white'
    },
    display: 'inline-block'
  },

  overrides: {
    MuiInput: {
        root: {
            borderRadius: 0,
            backgroundColor: "#fff",
            border: '1px solid pink',
         
        },
    }
} ,

  text: {
      color: 'white' 
  },

  label: {
    '&$focused': {
      color: '#ff0000'
    },
  },
  focused: {},
  outlinedInput: {
    '&$focused $notchedOutline': {
      border: '2px solid #4A90E2'
    },
  },
  notchedOutline: {},

  buttonStuff: {
    display: 'inline-flex',
    alignItems: 'center',
  }
  
  
}));

export default function BasicTextFields({getAddr}) {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [valid, setValid] = useState(true);

  const handleClick = () => {
      console.log(email);
      validEmail();

      if(valid) {
        getAddr(email);
      }
      
  }

  const validEmail = () => {
    if (typeof email !== "undefined") {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      
        if (!pattern.test(email)) {
          setValid(false);
        }
      
      }
  }

  return (
      <div>
          <form className={classes.root} noValidate autoComplete="off">
      <TextField 
      id="outlined-basic" 
      label="Search by Email" 
      variant="outlined" 
      helperText={valid? "":"Invalid Email. Try again"}
      error= {valid ? false : true}
      onChange={e => setEmail(e.target.value)}
      className={classes.root}
      InputLabelProps={{
        classes: {
          root: classes.label,
          focused: classes.focused,
        },
      }}
      InputProps={{
        classes: {
          root: classes.outlinedInput,
          focused: classes.focused,
          notchedOutline: classes.notchedOutline,
          className: classes.text
        },
      }}/>
    </form>
    <form>
        <div className={classes.buttonStuff}> 
      <Button variant="contained" color="primary" onClick={handleClick} disabled={email === '' ? true : false }>
        Search
        </Button>
      </div>
    </form>
      </div>
    
  );
}
