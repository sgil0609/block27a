import React from 'react';
import Sidebar from '../components/sidebar';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';

function App() {
  return (
    <div>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

      </Box>
    </Box>
    </div>
    
  );
}

export default App;
