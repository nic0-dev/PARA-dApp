import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useTheme } from '@mui/material/styles';
import logo from './logo-white.png';

// Sample data
const sampleData = {
  userId: '0x88043579',
  currentBalance: '₱150.00',
  walletAddress: '0x1234567890ABCDEF1234567890ABCDEF12345678',
  tokenBalance: '10 $PARA'
};

export default function Cards() {

  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const getPaperBackground = () => {
    return isDarkMode
      ? 'linear-gradient(45deg, #111719 0%, #090E10 100%)'
      : 'linear-gradient(45deg, #ffffff 0%, #eeeeee 100%)';
  };

  return (
    <Box component="section" sx={{ mt: { xs: 10, md: 15 } }} py={2}>
      <Box sx={{ maxWidth: 'lg', mx: 'auto', px: 4 }}>
        <Box sx={{ display: 'flex', mb: 2, alignItems: 'center' }}>
          <Box sx={{ mr: 2 }}>
            <Typography variant="h5" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>User Information: </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 2 }}>
          <Paper sx={{ flex: '1 1 100%', p: 2, background: 'linear-gradient(135deg, #ec765b 0%, #E84420 100%)', border: '1px solid', borderColor: 'divider', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48, backgroundColor: 'black', borderRadius: 2, mb: 1 }}>
              <AccountBalanceWalletIcon fontSize="large" />
            </Box >
            <Box sx={{ color: isDarkMode ? '#ffffff' : '#000000' }}>
              <Typography>Wallet Address</Typography>
              <Typography variant="h5" sx={{ wordBreak: 'break-all'}}>{sampleData.walletAddress}</Typography>
            </Box>
          </Paper>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'space-between', flexDirection: { xs: 'column', sm: 'row' } }}>
          <Paper sx={{ flex: '1 1 30%', p: 2, background: getPaperBackground(), color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48, backgroundColor: '#1c2529', borderRadius: 2, mb: 1 }}>
              <AccountCircleIcon fontSize="large" />
            </Box>
            <Box sx={{ color: isDarkMode ? '#ffffff' : '#000000' }}>
              <Typography>User ID</Typography>
              <Typography variant="h4">{sampleData.userId}</Typography>
            </Box>
          </Paper>
          
          <Paper sx={{ flex: '1 1 30%', p: 2, background: getPaperBackground(), border: '1px solid', borderColor: 'divider', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48, backgroundColor: '#1c2529', borderRadius: 2, mb: 1 }}>
              <CreditCardIcon fontSize="large" />
            </Box>
            <Box sx={{ color: isDarkMode ? '#ffffff' : '#000000' }}>
              <Typography>Current Balance (PHP)</Typography>
              <Typography variant="h4">{sampleData.currentBalance}</Typography>
            </Box>
          </Paper>

          <Paper sx={{ flex: '1 1 30%', p: 2, background: getPaperBackground(), border: '1px solid', borderColor: 'divider', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48, backgroundColor: '#1c2529', borderRadius: 2, mb: 1 }}>
              <Box component="img" src={logo} alt="Logo" sx={{ height: { xs: 25, sm: 40 } }} />
            </Box>
            <Box sx={{ color: isDarkMode ? '#ffffff' : '#000000' }}>
              <Typography>Token Balance ($PARA)</Typography>
              <Typography variant="h4">{sampleData.tokenBalance}</Typography>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
