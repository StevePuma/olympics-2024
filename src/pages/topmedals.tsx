// src/pages/Dashboard.tsx
import React from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { DashboardById } from '@sisense/sdk-ui';
import NavDrawer from '../components/NavDrawer';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const topmedals: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ display: '', height: '100vh' }}>
        <NavDrawer />
        <Box sx={{ flexGrow: 5 , paddingTop: '4rem', overflow: 'hidden' }}>
          <DashboardById dashboardOid="66ad5265724a0b00338cb758" />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default topmedals;
