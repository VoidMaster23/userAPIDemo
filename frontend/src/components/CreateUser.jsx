import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import '../index.css';
import OutlineInput from './OutlineInput';
import DisplayCard from './DisplayCard'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import {Grid, TextField} from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import {CardHeader} from '@material-ui/core';
import DatePicker from './DatePicker';
import {Button} from '@material-ui/core';
import sha256 from 'crypto-js/sha256';
import md5 from 'crypto-js/md5';
import sha1 from 'crypto-js/sha1';

import saltHash from 'password-salt-and-hash';


const useStyles = makeStyles({
    
    root: {
      flexGrow: 1,
      color: 'white'
    },

    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: '3vh',
        fontFamily: 'Raleway',
    },
  
    tab: {
  
      backgroundColor: '#36454F'
       },
  
  
    indicator: {
        backgroundColor: 'royalBlue',
    },

    cardMain:{
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




export default function UserData() {
    const classes = useStyles();
    const [value, setValue] = React.useState("1");
    const [userData, setUserData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [names, setNames] = React.useState({
        first: '',
        title: '',
        last:''
    });
    
    const [dateOfBirth, setDOB] = React.useState(null);
    const [age, setAge] = React.useState(0);
    const [nationality, setNationality] = React.useState('');
    const [phoneNo, setPhone] = React.useState('');
    const [cellNo, setCell] = React.useState('');
    const [idName, setIDName] = React.useState('');
    const [gen, setGender] = React.useState(0);
    const [idValue, setidValue] = React.useState('');
    const [pictureURL, setPictureURL] = React.useState('');

    const [locatio, setLocation] = React.useState({
       streetNo: 0,
       streetName: '',
       city: '',
       state: '',
       country: '',
       postCode: 0,
       offset: '',
       description: '',
       latitude:'',
       longitude: '',
    });

    const [accountInfo, setAccInfo] = React.useState({
        username: '',
        password: '',
        mail:''
    })

    const handleGenderChange = (event) => {
        console.log(event.target);
      setGender(event.target.value);
    };
  
    const userInfo = () => {
        return(
            <Card className={classes.cardMain} variant="outlined" raised={true}>
      <CardContent>
        <Typography sclassName={classes.title} color="textSecondary" gutterBottom align="center" variant="h5"> 
          Personal Info
        </Typography>
       <Card variant="outlined" className={classes.cards}>
       <Typography sclassName={classes.categories} color="textSecondary" gutterBottom align="center" variant="body1"> 
          Name
        </Typography>
       <form className={classes.inputs} noValidate autoComplete="off">
            <TextField id="title" label="Title" variant="outlined"  onChange={e => setNames({...names, title:e.target.value})} />
            <TextField id="first" label="First" variant="outlined" onChange={e => setNames({...names, first:e.target.value})} />
            <TextField id="last" label="Last" variant="outlined"  onChange={e => setNames({...names, last:e.target.value})}/>
        </form>    
       </Card>

       <Card variant="outlined" className={classes.cards}>
       <Typography sclassName={classes.categories} color="textSecondary" gutterBottom align="center" variant="body1"> 
          Demographic Info
        </Typography>
       <form className={classes.inputs} noValidate autoComplete="off">
            <DatePicker
            setDOB = {birthDate => {
                setDOB(birthDate);
            }}
            
            />
            <TextField id="age" label="Age" variant="outlined" type="number"  onChange={e => setAge(parseInt(e.target.value))}/>
            <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={gen}
          onChange={handleGenderChange}
          label="Gender"
        >
          <MenuItem value={0}>female</MenuItem>
          <MenuItem value={1}>male</MenuItem>
          <MenuItem value={2}>other</MenuItem>
        </Select>
      </FormControl>
      <TextField id="nat" label="Nationality" variant="outlined"  onChange={e => setNationality(e.target.value)} />
        </form>    
       </Card>

       <Card variant="outlined" className={classes.cards}>
       <Typography sclassName={classes.categories} color="textSecondary" gutterBottom align="center" variant="body1"> 
          Contact Details
        </Typography>
       <form className={classes.inputs} noValidate autoComplete="off">
            <TextField id="phone" label="Phone" variant="outlined" onChange={e => setPhone(e.target.value)} />
            <TextField id="cell" label="Cell" variant="outlined"  onChange={e => setCell(e.target.value)}/>
        </form>    
       </Card>

       <Card variant="outlined" className={classes.cards}>
       <Typography sclassName={classes.categories} color="textSecondary" gutterBottom align="center" variant="body1"> 
          ID
        </Typography>
       <form className={classes.inputs} noValidate autoComplete="off">
            <TextField id="id" label="Name" variant="outlined" onChange={e => setIDName(e.target.value)} />
            <TextField id="value" label="Value" variant="outlined"  onChange={e => setidValue(e.target.value)}/>
        </form>    
       </Card>

       <Card variant="outlined" className={classes.cards}>
       <Typography sclassName={classes.categories} color="textSecondary" gutterBottom align="center" variant="body1"> 
          Picture
        </Typography>
       <form className={classes.inputs} noValidate autoComplete="off">
            <TextField id="id" label="Image URL" variant="outlined" onChange={e => setPictureURL(e.target.value)} />
        </form>    
       </Card>
      </CardContent>

    </Card>
        );
    }

    const determineGender = (value) => {
        console.log(value);
        switch (value) {
            case 0:
                return 'female';

            case 1:
                return 'male';

            default:
                return 'other'
        }
    } 
    const handleClick = () => {
        const name = names;
        const loc = {
            street: {
                number: locatio.streetNo,
                name: locatio.streetName
            },
            city: locatio.city,
            state: locatio.state,
            country: locatio.country,
            postcode: locatio.postCode,
            coordinates: {
                latitude: locatio.latitude,
                longitude: locatio.longitude,
            },
            timezone: {
                offset: locatio.offset,
                description: locatio.description
            }
        };

        const login = {
            uuid: uuidv4(),
            username: accountInfo.username,
            password: accountInfo.password,
            salt: generateSalt(),
            md5: md5(accountInfo.password).toString(),
            sha1: sha1(accountInfo.password).toString(),
            sha256: sha256(accountInfo.password).toString()
        }

        const request = {
            gender: determineGender(gen),
            name: names,
            location: loc,
            email: accountInfo.mail,
            login: login,
            dob: {
                date: dateOfBirth.toISOString(),
                age: new Date().getFullYear() - dateOfBirth.getFullYear()
            },
            registered: {
                date: new Date().toISOString(),
                age: 0
            },
            phone: phoneNo,
            cell: cellNo,
            id: {
                name: idName,
                value: idValue
            },
            picture: {
                large: pictureURL,
                thumbnail: pictureURL,
                medium: pictureURL
            },
            nat: nationality
        }

        fetch('http://localhost:8000/createUser', {
            method: "POST",
            body: JSON.stringify(request)
        }).then(response => {
            console.log(response.status)
        })
        
    }

    const uuidv4 = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }

    const generateSalt = () => {
        let hashPassword = saltHash.generateSaltHash(accountInfo.password);

        return hashPassword.salt;
    }
      


    const userLocation = () => {
        return(
            <Card className={classes.cardMain} variant="outlined" raised={true}>
        <CardContent>
          <Typography sclassName={classes.title} color="textSecondary" gutterBottom align="center" variant="h5"> 
            Location Info
          </Typography>
         <Card variant="outlined" className={classes.cards}>
             <CardContent>
             <form className={classes.inputs} noValidate autoComplete="off">
             <TextField id="streetNo" label="Street Number" variant="outlined" type="number"  onChange={e => setLocation({...locatio, streetNo:parseInt(e.target.value)})}/>
              <TextField id="street" label="Street Name" variant="outlined" onChange={e => setLocation({...locatio, streetName:e.target.value})}/>
              <TextField id="city" label="City" variant="outlined" onChange={e => setLocation({...locatio, city:e.target.value})}/>
              <TextField id="state" label="State" variant="outlined" onChange={e => setLocation({...locatio, state:e.target.value})}/>
              <TextField id="country" label="Country" variant="outlined" onChange={e => setLocation({...locatio, country:e.target.value})}/>
              <TextField id="postcode" label="Post Code" variant="outlined" onChange={e => setLocation({...locatio, postCode:e.target.value})}/> 
              <TextField id="postcode" label="Latitude" variant="outlined" onChange={e => setLocation({...locatio, latitude:e.target.value})}/> 
              <TextField id="postcode" label="Longitude" variant="outlined" onChange={e => setLocation({...locatio, longitude:e.target.value})}/> 
          </form>
          <form className={classes.inputs} noValidate autoComplete="off">
              <TextField id="offset" label="Offset" variant="outlined" onChange={e => setLocation({...locatio, offset:e.target.value})}/>
              <TextField id="description" label="Description" variant="outlined" onChange={e => setLocation({...locatio, description:e.target.value})}/> 
          </form>
             </CardContent>
         
         </Card>
        </CardContent>
  
      </Card>
        );
    }

    const userAccount = () => {
        return (<Card className={classes.cardMain} variant="outlined" raised={true}>
        <CardContent>
          <Typography sclassName={classes.title} color="textSecondary" gutterBottom align="center" variant="h5"> 
            Account Info
          </Typography>
         <Card variant="outlined" className={classes.cards}>
         <Typography sclassName={classes.categories} color="textSecondary" gutterBottom align="center" variant="body1"> 
            Login
          </Typography>
         <form className={classes.inputs} noValidate autoComplete="off">
              <TextField id="userName" label="Username" variant="outlined" onChange={e => setAccInfo({...accountInfo, username:e.target.value})}/>
              <TextField id="password" label="Password" variant="outlined" 
              type={"password"} 
              onChange={e => setAccInfo({...accountInfo, password:e.target.value})}
              />
              <TextField id="userName" label="Email" variant="outlined" onChange={e => setAccInfo({...accountInfo, mail:e.target.value})}/>
          </form>    
         </Card>
        </CardContent>
  
      </Card>);
    }
  
    return (
        <Card className={classes.root}>
        <CardContent>
          
          {userInfo()}
          {userLocation()}
          {userAccount()}

           <Card className={classes.cardMain}>
           <div style={{display: 'flex', justifyContent: 'center', margin: '0.5em'}}>
           <Button variant="contained" color="primary" onClick={handleClick}>
        Submit
        </Button>
               </div>
           
            </Card> 
        </CardContent>
        
      </Card>
    );

}


