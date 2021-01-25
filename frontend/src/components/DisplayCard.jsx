import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import PersonalInfo from './PersonalInfo';
import LocationInfo from './LocationInfo';
import AccountInfo from './AccountInfo';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '3vh'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function DisplayCard(props) {
console.log(props)
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} src={props.picture.thumbnail}/>
        }
        title={`${props.names.title} ${props.names.first} ${props.names.last}`}
        subheader={props.email}
      />
      <CardMedia
        className={classes.media}
        image={props.picture.large}
        title={props.login.username}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            {props.login.username}
        </Typography>
        <PersonalInfo
        names={props.names}
        dob={props.dob}
        gender={props.gender}
        nat={props.nat}
        phone={props.phone}
        cell={props.cell}
        id={props.id}
        
        />

        <LocationInfo
        street={props.location.street}
        city={props.location.city}
        state={props.location.state}
        country={props.location.country}
        postcode={props.location.postcode}  
        coordinates={props.location.coordinates}      
        timezone={props.location.timezone}
        />

       <AccountInfo
        login={props.login}
        registered={props.registered}
        />

      </CardContent>
      
    </Card>
  );
}
