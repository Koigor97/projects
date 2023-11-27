import React, { FC, ReactElement } from 'react';
import { Grid } from '@mui/material';

export const TaskArea: FC = (): ReactElement => {
  return (
    <Grid item md={8} px={4}>
      <h2>The Overview Area</h2>
    </Grid>
  );
};
