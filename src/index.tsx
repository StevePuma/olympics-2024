import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SisenseContextProvider, ThemeProvider, ThemeSettings } from '@sisense/sdk-ui';
import { AiContextProvider } from '@sisense/sdk-ui/ai';

// Load environment variables
const sisenseUrl = process.env.REACT_APP_SISENSE_URL;
const sisenseToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjUwMGI2MTZmMDI0MzcwMDJkZmI1NThlIiwiYXBpU2VjcmV0IjoiYjEzZDUwYmItMTAyMy00Y2NjLTYxZTQtMjFiNGY1NWQxOGNhIiwiYWxsb3dlZFRlbmFudHMiOlsiNjUwMGIzYTBiZjQ1MTgwMDFiNDc5NjAzIl0sInRlbmFudElkIjoiNjUwMGIzYTBiZjQ1MTgwMDFiNDc5NjAzIn0.kkSpQeM3XVyXuxEy69-lefgLBnD4g3vuRMS0z2FhlBY";

if (!sisenseUrl || !sisenseToken) {
  throw new Error('Environment variables REACT_APP_SISENSE_URL and REACT_APP_SISENSE_TOKEN must be defined');
}

const theme: ThemeSettings = {
  aiChat: {
    backgroundColor: '#222222',
    primaryTextColor: 'rgba(255, 255, 255, 0.9)',
    secondaryTextColor: 'rgba(255, 255, 255, 0.7)',
    primaryFontSize: ['14px', '20px'],
    body: {
      gapBetweenMessages: '10px',
      paddingBottom: '20px',
      paddingLeft: '20px',
      paddingRight: '20px',
      paddingTop: '20px',
    },
    border: '1px solid #444444',
    borderRadius: '8px',
    clickableMessages: {
      backgroundColor: '#333333',
      border: '1px solid #444444',
      borderGradient: ['#444444', '#555555'],
      textColor: 'rgba(255, 255, 255, 0.9)',
      hover: {
        backgroundColor: '#444444',
        textColor: 'rgba(255, 255, 255, 1)',
      },
    },
    dataTopics: {
      backgroundColor: '#333333',
      items: {
        backgroundColor: '#444444',
        textColor: 'rgba(255, 255, 255, 0.9)',
      },
    },
    dropup: {
      backgroundColor: '#333333',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
      headers: {
        textColor: 'rgba(255, 255, 255, 0.9)',
        hover: {
          backgroundColor: '#444444',
        },
      },
      items: {
        textColor: 'rgba(255, 255, 255, 0.9)',
        hover: {
          backgroundColor: '#444444',
        },
      },
    },
    footer: {
      paddingBottom: '10px',
      paddingLeft: '10px',
      paddingRight: '10px',
      paddingTop: '10px',
    },
    header: {
      backgroundColor: '#333333',
      textColor: 'rgba(255, 255, 255, 0.9)',
    },
    icons: {
      color: 'rgba(255, 255, 255, 0.9)',
      feedbackIcons: {
        hoverColor: 'rgba(255, 255, 255, 1)',
      },
    },
    input: {
      backgroundColor: '#333333',
      focus: {
        outlineColor: '#555555',
      },
    },
    suggestions: {
      backgroundColor: '#333333',
      border: '1px solid #444444',
      borderGradient: ['#444444', '#555555'],
      borderRadius: '8px',
      gap: '10px',
      textColor: 'rgba(255, 255, 255, 0.9)',
      hover: {
        backgroundColor: '#444444',
        textColor: 'rgba(255, 255, 255, 1)',
      },
      loadingGradient: ['#555555', '#666666'],
    },
    systemMessages: {
      backgroundColor: '#333333',
    },
    tooltips: {
      backgroundColor: '#444444',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.5)',
      textColor: 'rgba(255, 255, 255, 0.9)',
    },
    userMessages: {
      backgroundColor: '#444444',
    },
  },
  chart: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    panelBackgroundColor: 'rgba(0, 0, 0, 0)',
    textColor: 'rgba(255, 255, 255, 0.7)',
  },
  general: {
    brandColor: "#2196f3",
    backgroundColor: "#222222",
    primaryButtonTextColor: "white",
  },
  palette: {
    variantColors: ["#2196f3", "#0d47a1", "#050A30", "#7EC8E3"],
  },
  typography: {
    fontFamily: 'sans-serif',
  },
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SisenseContextProvider url={sisenseUrl} token={sisenseToken}>
      <AiContextProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </AiContextProvider>
    </SisenseContextProvider>
  </React.StrictMode>
);

reportWebVitals();
