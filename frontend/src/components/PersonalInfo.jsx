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
  const bull = <span className={classes.bullet}>•</span>;
 
const setIntialGender = () => {
    switch (props.gender) {
        case 'female':
            return 0;
        
        case 'male':
            return 1;          
        default:
            return 2;
    }
};

const [gender, setGender] = React.useState(setIntialGender);
const handleGenderChange = (event) => {
    console.log(event.target);
  setGender(event.target.value);
};

  return (
    <Card className={classes.root} variant="outlined" raised={true}>
      <CardContent>
        <Typography sclassName={classes.title} color="textSecondary" gutterBottom align="center" variant="h5"> 
          Personal Info
        </Typography>
       <Card variant="outlined" className={classes.cards}>
       <Typography sclassName={classes.categories} color="textSecondary" gutterBottom align="center" variant="body1"> 
          Name
        </Typography>
       <form className={classes.inputs} noValidate autoComplete="off">
            <TextField id="title" label="Title" variant="outlined" defaultValue={props.names.title} InputProps={{readOnly: true}}/>
            <TextField id="first" label="First" variant="outlined" defaultValue={props.names.first} InputProps={{readOnly: true}}/>
            <TextField id="last" label="Last" variant="outlined" defaultValue={props.names.last} InputProps={{readOnly: true}}/>
        </form>    
       </Card>

       <Card variant="outlined" className={classes.cards}>
       <Typography sclassName={classes.categories} color="textSecondary" gutterBottom align="center" variant="body1"> 
          Demographic Info
        </Typography>
       <form className={classes.inputs} noValidate autoComplete="off">
            <TextField id="dob" label="Date of Birth" variant="outlined" defaultValue={new Date(props.dob.date).toDateString()} InputProps={{readOnly: true}}/>
            <TextField id="age" label="Age" variant="outlined" defaultValue={props.dob.age} type="number" InputProps={{readOnly: true}} />
            <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={gender}
          onChange={handleGenderChange}
          label="Gender"
        >
          <MenuItem value={0}>female</MenuItem>
          <MenuItem value={1}>male</MenuItem>
          <MenuItem value={2}>other</MenuItem>
        </Select>
      </FormControl>
      <TextField id="nat" label="Nationality" variant="outlined" defaultValue={props.nat}  InputProps={{readOnly: true}}/>
        </form>    
       </Card>

       <Card variant="outlined" className={classes.cards}>
       <Typography sclassName={classes.categories} color="textSecondary" gutterBottom align="center" variant="body1"> 
          Contact Details
        </Typography>
       <form className={classes.inputs} noValidate autoComplete="off">
            <TextField id="phone" label="Phone" variant="outlined" defaultValue={props.phone} InputProps={{readOnly: true}}/>
            <TextField id="cell" label="Cell" variant="outlined" defaultValue={props.cell} InputProps={{readOnly: true}}/>
        </form>    
       </Card>

       <Card variant="outlined" className={classes.cards}>
       <Typography sclassName={classes.categories} color="textSecondary" gutterBottom align="center" variant="body1"> 
          ID
        </Typography>
       <form className={classes.inputs} noValidate autoComplete="off">
            <TextField id="id" label="Name" variant="outlined" defaultValue={props.id.name} InputProps={{readOnly: true}}/>
            <TextField id="value" label="Value" variant="outlined" defaultValue={props.id.value} InputProps={{readOnly: true}}/>
        </form>    
       </Card>
      </CardContent>

    </Card>
  );
}
