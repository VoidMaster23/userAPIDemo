import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import '../index.css';
import OutlineInput from './OutlineInput';
import DisplayCard from './DisplayCard'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'


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
    }
  });




export default function UserData() {
    const classes = useStyles();
    const [value, setValue] = React.useState("1");
    const [userData, setUserData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
  
    const fetchUser = async (mail) => {
        console.log(mail);
        setLoading(true);
      const data = await fetch(`http://localhost:8000/user/${mail}`);
    const user = await data.json();
      console.log(data);
      console.log(user);
      setUserData(user);
      setLoading(false)
    };


    const showBody = () => {
        return(
            userData ? <DisplayCard
            picture={userData.picture}
            names={userData.name}
            email={userData.email}
            login={userData.login}
            gender={userData.gender}
            location={userData.location}
            dob= {userData.dob}
            registered= {userData.registered} 
            phone={userData.phone}
            cell= {userData.cell}
            id={userData.id}
            nat= {userData.nat}   
            /> : <h2>
                Enter the email address of the user and hit search!
                </h2>);
    }
  
    return (
      <div className={classes.root}>
        <div className={classes.title}>
            <h1>
                UserBase
            </h1>
            <OutlineInput
            getAddr = {async (address) =>  {
                //await setEmail(address);

                //console.log(address);
                fetchUser(address);

            }}
            />

            {loading ? <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs
 
      /> : 
          showBody()
           }

            
        </div>
      </div>
    );

}


