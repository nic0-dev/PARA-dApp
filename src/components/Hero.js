import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import heroImage from './hero-image.png'; // Adjust the path as needed

const Hero = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 4,
        py: { xs: 4, md: 6 },
        mt: 6,
        maxWidth: 'lg',
        mx: 'auto',
      }}
    >
      <Box sx={{ flex: 1, pr: { md: 4 }, textAlign: { xs: 'center', md: 'left' } }}>
        <Typography variant="overline" sx={{ fontWeight: 'bold', color: '#5497D5', display: { xs: 'none', md: 'flex' } }}>
          BLOCKCHAIN & TRANSPORTATION
        </Typography>
        <Box
          sx={{
            display: 'inline-block',
            mt: 2,
            background: isDarkMode? 'linear-gradient(45deg, #FFFFFF, #7B9BAC)' : '#000000',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              
            }}
            
          >
            RIDE THE FUTURE,
          </Typography>
        </Box>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 'bold',
            color: '#E35C31',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
          }}
        >
          EARN TODAY
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, color: isDarkMode ? '#ffffff' : '#000000' }}>
          Join the revolution in public commuting with PARA, where every ride brings you closer to exclusive rewards. Ride more, earn more, and make each trip an experience worth looking forward to.
        </Typography>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, gap: 2 }}>
            <Button
                variant="contained"
                size="large"
                sx={{
                    boxShadow: '0 0 10px #5497D5',
                }}
            >
            Learn More
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{
              borderColor: '#393939',
              color: isDarkMode? '#efefef' : '#000000',
              '&:hover': { borderColor: '#4c4c4c', backgroundColor: '#393939', color: '#ffffff' },
            }}
          >
            Get in Touch
          </Button>
        </Box>
      </Box>
      <Box sx={{ flex: 1, mt: { xs: 4, md: 0 } }}>
        <Box
          component="img"
          src={heroImage}
          alt="Hero"
          sx={{ display: {xs: 'none', md: 'flex'},width: '100%', maxHeight: { xs: 300, md: 400 }, objectFit: 'contain' }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
