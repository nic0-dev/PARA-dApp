import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Table from './components/Table';
import InfoCards from './components/InfoCards';
import Footer from './components/Footer';
import getLPTheme from './getLPTheme';

const SECTION_OFFSET = 60; // Offset for fixed navbar height

export default function LandingPage() {
  const [mode, setMode] = React.useState('dark');
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - SECTION_OFFSET,
        behavior: 'smooth',
      });
    }
  };

  return (
<<<<<<< HEAD
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <NavBar mode={mode} toggleColorMode={toggleColorMode} scrollToSection={scrollToSection} />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Box id="home"><Hero /></Box>
        <Box id="account"><Cards /></Box>
        <Box><Table /></Box>
        <Box id="howItWorks"><InfoCards /></Box>
        <Divider />
        <Box id="contact"><Footer /></Box>
      </Box>
    </ThemeProvider>
=======
      <ThemeProvider theme={LPtheme}>
        <CssBaseline />
        <NavBar mode={mode} toggleColorMode={toggleColorMode} scrollToSection={scrollToSection} />
        <Box sx={{ bgcolor: 'background.default' }}>
          <Box id="home"><Hero /></Box>
          <Box id="account"><Cards /></Box>
          <Box><Table /></Box>
          <Box id="howItWorks"><InfoCards /></Box>
          <Divider />
          <Box id="contact"><Footer /></Box>
        </Box>
      </ThemeProvider>
>>>>>>> master
  );
}
