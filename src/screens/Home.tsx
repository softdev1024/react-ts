import * as React from "react";
import { useState } from 'react';

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
// import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import TabPanel from '../shared/components/TabPanel';

const muiStyles = () => ({
  root: {
    flexGrow: 1,
  },
  tabs: {
    backgroundColor: '#fff'
  },
  tabWrapper: {
    borderBottom: '1px solid #C0DDF7',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  }
});

const a11yProps = index => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
})

const Home = ({ classes }) => {
  const [value, setValue] = useState(0)
  return (
  <div className={classes.root}>
  <Box px={8} py={4}>
    <div className={classes.header}>
    <Typography color="primary" variant="h6">YourCase -> Flows</Typography>
    <Button variant="outlined" color="primary">
      Create new flow
    </Button>
    </div>
    
    <br />
    <AppBar position="static" className={classes.tabs} elevation={0}>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={(e, value) => setValue(value)}
        className={classes.tabWrapper}
      >
        <Tab label="Consumer" {...a11yProps(0)}/>
        <Tab label="Business" {...a11yProps(1)}/>
        <Tab label="Application 3" {...a11yProps(2)}/>
      </Tabs>
    </AppBar>
    <TabPanel value={value} index={0}>
      <div>Test</div>
    </TabPanel>
    <TabPanel value={value} index={1}>
      <div>Test</div>
    </TabPanel>
    <TabPanel value={value} index={2}>
      <div>Test</div>
    </TabPanel>
  </Box>
</div>
);
}

export default withStyles(muiStyles)(Home);
