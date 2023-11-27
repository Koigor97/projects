import React, { FC, ReactElement } from 'react';
import { Grid } from '@mui/material';
import { TaskArea } from '../components/taskArea/taskArea';
import { Sidebar } from '../components/sidebar/sidebar';

export const OverviewDashboard: FC = (): ReactElement => {
  return (
    <Grid container minHeight="100svh" p={0} m={0}>
      <Grid item md={8} px={4}>
        <TaskArea />
      </Grid>
      <Grid>
        <Sidebar />
      </Grid>
    </Grid>
  );
};
