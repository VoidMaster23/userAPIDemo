import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import { TabContext } from '@material-ui/lab';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import AppBar from '@material-ui/core/AppBar';
import DisplayData from './DisplayData';
import CreateUser  from './CreateUser';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    color: 'white'
  },

  tab: {

    backgroundColor: '#36454F'
     },


  indicator: {
      backgroundColor: 'royalBlue',
  }
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
      console.log(newValue);
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <TabContext value={value}>
        <AppBar position="static" className={classes.tab}>
          <TabList 
          onChange={handleChange} 
          aria-label="simple tabs example" 
          centered={true}
          classes={{indicator:classes.indicator}}
          >
            <Tab label="Display Data" value="1" />
            <Tab label="Create User" value="2" />
          </TabList>
        </AppBar>
        <TabPanel value="1">
            <DisplayData/>
        </TabPanel>
        <TabPanel value="2">
            <CreateUser/>
        </TabPanel>
      </TabContext>
    </div>
  );
}

