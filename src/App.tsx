// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import NavDrawer from './components/NavDrawer';
import Medals from './pages/Medals';
import AiInsights from './pages/AiInisghts';
import SelfService from './pages/SelfService';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <div style={{ display: 'flex', height: '100vh' }}>
          <NavDrawer />
          <div style={{ flexGrow: 1, overflow: 'hidden' }}>
            <Routes>
              <Route path="/medals" element={<Medals />} />
              <Route path="/aiinsights" element={<AiInsights />} />
              <Route path="/selfservice" element={<SelfService />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
