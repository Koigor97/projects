import React, { FC, ReactElement } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { customTheme } from './theme/customTheme';

import { OverviewDashboard } from './pages/overview';

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <OverviewDashboard />
    </ThemeProvider>
  );
};

export default App;
