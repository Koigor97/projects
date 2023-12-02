import React, { FC, ReactElement } from 'react';
import { Profile } from '../studentProfile/studentProfile';
import { Grid } from '@mui/material';
import { CreateAssignmentForm } from '../createAssignmentTask/createAssignmentForm';

export const Sidebar: FC = (): ReactElement => {
  return (
    <Grid
      item
      md={4}
      sx={{
        height: '100vh',
        position: 'fixed',
        right: 0,
        top: 0,
        width: '100%',
        backgroundColor: 'background.paper',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Profile name="John" />
      <CreateAssignmentForm />
    </Grid>
  );
};
