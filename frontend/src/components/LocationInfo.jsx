import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Row, Col} from 'react-bootstrap';
import {Grid, TextField} from '@material-ui/core'
import Map from './Map';

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
 
  return (
    <Card className={classes.root} variant="outlined" raised={true}>
      <CardContent>
        <Typography sclassName={classes.title} color="textSecondary" gutterBottom align="center" variant="h5"> 
          Location Info
        </Typography>
       <Card variant="outlined" className={classes.cards}>
           <CardContent>
           <form className={classes.inputs} noValidate autoComplete="off">
            <TextField id="street" label="Street Address" variant="outlined" defaultValue={`${props.street.number} ${props.street.name}`} InputProps={{readOnly: true}}/>
            <TextField id="city" label="City" variant="outlined" defaultValue={props.city} InputProps={{readOnly: true}}/>
            <TextField id="state" label="State" variant="outlined" defaultValue={props.state} InputProps={{readOnly: true}}/>
            <TextField id="country" label="Country" variant="outlined" defaultValue={props.country} InputProps={{readOnly: true}}/>
            <TextField id="postcode" label="Post Code" variant="outlined" defaultValue={props.postcode} InputProps={{readOnly: true}}/> 
        </form>
        <div style={{display: 'flex', justifyContent: 'center', margin: '2em'}}>
        <Map
        latitude={props.coordinates.latitude}
        longitude={props.coordinates.longitude}
        />
        </div> 
        <form className={classes.inputs} noValidate autoComplete="off">
            <TextField id="offset" label="Offset" variant="outlined" defaultValue={props.timezone.offset} InputProps={{readOnly: true}}/>
            <TextField id="description" label="Description" variant="outlined" defaultValue={props.timezone.description} InputProps={{readOnly: true}}/> 
        </form>
           </CardContent>
       
       </Card>
      </CardContent>

    </Card>
  );
}
