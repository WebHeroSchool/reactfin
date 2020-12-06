import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const TaskFilter = () => (    
    <Paper>
  <Tabs
    indicatorColor="primary"
    textColor="primary"
    centered
  >
    <Tab label="Item One" />
    <Tab label="Item Two" />
    <Tab label="Item Three" />
  </Tabs>
</Paper>
  );

export default TaskFilter;