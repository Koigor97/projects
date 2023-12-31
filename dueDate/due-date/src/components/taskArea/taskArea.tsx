import React, { FC, ReactElement } from 'react';
import { Grid, Box } from '@mui/material';
import format from 'date-fns/format';
import { TaskCounter } from '../taskCounter/taskCounter';
import { Task } from '../tasks/task';

export const TaskArea: FC = (): ReactElement => {
  return (
    <Grid item md={8} px={4}>
      <Box>
        <img
          src="dueDate/due-date/public/dueDate-logo.webp"
          alt="application logo"
        />
      </Box>
      <Box mb={8} px={4}>
        <h2>Assignment status as of {format(new Date(), 'PPPP')}</h2>
      </Box>
      <Grid container display={'flex'} justifyContent={'center'}>
        <Grid
          item
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'space-around'}
          alignItems={'center'}
          md={10}
          xs={12}
          mb={8}
        >
          <TaskCounter />
          <TaskCounter />
          <TaskCounter />
        </Grid>
        <Grid item display={'flex'} flexDirection={'column'} md={10} xs={8}>
          <Task />
          <Task />
          <Task />
        </Grid>
      </Grid>
    </Grid>
  );
};
