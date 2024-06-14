import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import GithubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import logo from './logo.png'
import { useTheme } from '@mui/material/styles';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {'Copyright © '}
      <Link href="#">PARA&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: { xs: 4, sm: 8 }, py: { xs: 8, sm: 10 }, textAlign: 'left' }}>

    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        width: '100%',
        justifyContent: { xs: 'flex-start', sm: 'space-between' },
        alignItems: { xs: 'flex-start', sm: 'center' },
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, minWidth: { xs: '100%', sm: '60%' }, mr: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'left' }, alignItems: 'center', gap: '10px', mb: '5px', color: isDarkMode ? '#ffffff' : '#000000' }}>
          <Box component="img" src={logo} alt="Logo" sx={{ height: 25 }} />
          <Typography variant="h5" fontWeight="bold">PARA</Typography>
        </Box>
        <Typography sx={{ display: { xs: 'none', sm: 'flex' } }} variant="body2" fontWeight={600} gutterBottom>
        RFID-Enabled Fare Incentivization with Arbitrum Blockchain.
        </Typography>
        <Typography sx={{ display: { xs: 'none', sm: 'flex' } }} variant="body2" color="text.secondary">
          This project leverages smart contracts and RFID technology to streamline fare payments, enhance transparency, and incentivize user adoption through rewards.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          minWidth: { xs: '100%', sm: '35%' },
          alignItems: { xs: 'flex-start', sm: 'none' },
        }}
      >
        <Typography variant="body2" fontWeight={600}>
          Newsletter
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Subscribe to our newsletter for weekly updates and promotions.
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap>
          <TextField
            id="outlined-basic"
            hiddenLabel
            size="small"
            variant="outlined"
            fullWidth
            aria-label="Enter your email address"
            placeholder="Your email address"
            inputProps={{
              autoComplete: 'off',
              'aria-label': 'Enter your email address',
            }}
          />
          <Button variant="contained" color="primary" sx={{ flexShrink: 0 }}>
            Subscribe
          </Button>
        </Stack>
      </Box>
    </Box>


      <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: { xs: 4, sm: 8 }, width: '100%', borderTop: '1px solid', borderColor: 'divider'}}>
        <div>
          <Link color="text.secondary" href="#">
            Privacy Policy
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" href="#">
            Terms of Service
          </Link>
          <Copyright />
        </div>
        
        <Stack direction="row" justifyContent="left" spacing={1} useFlexGap sx={{ color: 'text.secondary' }}>
          <IconButton color="inherit" href="https://github.com/nic0-dev/PARA-dApp" aria-label="GitHub" sx={{ alignSelf: 'center' }}>
            <GithubIcon />
          </IconButton>
          <IconButton color="inherit" href="#" aria-label="Facebook" sx={{ alignSelf: 'center' }}>
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" href="https://www.linkedin.com/in/marknicholascagas/" aria-label="LinkedIn" sx={{ alignSelf: 'center' }}>
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}