import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Row, Col} from 'react-bootstrap';
import {Grid, TextField} from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: '1em',
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"        
    }
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  inputs:{
    '& > *': {
      margin: '1em',
      width: '20ch',
    },
  },

  inputDiv: {
    width: '-moz-fit-content',
    width: 'fit-content',
  },

  title: {
    fontSize: 18,
    marginBottom: '1em'
  },

  cards: {
      marginTop: '1em'
  },

  categories: {
      marginTop: '1em',
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  formControl: {
    margin: '1em',
    minWidth: 120,
  }
});

export default function OutlinedCard(props) {
    console.log(props);
  const classes = useStyles();
const [hidden, setHidden] = React.useState(true);
const handleClickShowPassword = () => {
   setHidden(!hidden);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.root} variant="outlined" raised={true}>
      <CardContent>
        <Typography sclassName={classes.title} color="textSecondary" gutterBottom align="center" variant="h5"> 
          Account Info
        </Typography>
       <Card variant="outlined" className={classes.cards}>
       <Typography sclassName={classes.categories} color="textSecondary" gutterBottom align="center" variant="body1"> 
          Login
        </Typography>
       <form className={classes.inputs} noValidate autoComplete="off">
            <TextField id="userName" label="Username" variant="outlined" defaultValue={props.login.username} InputProps={{readOnly: true}}/>
            <TextField id="password" label="Password" variant="outlined" 
            InputProps={{readOnly: true}}
            defaultValue={props.login.password} 
            type={hidden? "password": "text"} 
            inputProps={{
                endAdornment:(
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                          {hidden ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
            }}
            />
        </form>    
       </Card>

       <Card variant="outlined" className={classes.cards}>
       <Typography sclassName={classes.categories} color="textSecondary" gutterBottom align="center" variant="body1"> 
          Registration Info
        </Typography>
       <form className={classes.inputs} noValidate autoComplete="off">
            <TextField id="date" label="Date of Birth" variant="outlined" defaultValue={new Date(props.registered.date).toDateString()} InputProps={{readOnly: true}}/>
            <TextField id="age" label="Account Age" variant="outlined" defaultValue={props.registered.age} type="number" InputProps={{readOnly: true}}/>
        </form>    
       </Card>

      </CardContent>

    </Card>
  );
}
