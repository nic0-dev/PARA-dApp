import { Box, Paper, Typography } from '@mui/material';
import hardwareImage from './hardware-image.jpg'; // Adjust the path as needed
import paraCardsImage from './para-card.png'; // Adjust the path as needed
import { useTheme } from '@mui/material/styles';

const InfoCards = () => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
  
    const getPaperBackground = () => {
      return isDarkMode
        ? 'linear-gradient(45deg, #111719 0%, #090E10 100%)'
        : 'linear-gradient(45deg, #ffffff 0%, #eeeeee 100%)';
    };
  
    return (
      <Box sx={{ maxWidth: 'lg', mx: 'auto', px: 4, my: 6 }}>
        <Box sx={{ display: 'flex', mb: 2, alignItems: 'center' }}>
          <Box sx={{ mr: 2 }}>
            <Typography variant="h5" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>How It Works: </Typography>
          </Box>
        </Box>
        <Box sx={{display: 'flex', gap: 4, justifyContent: 'center'}}>
        <Paper sx={{ flex: '1 1 30%', background: getPaperBackground(), border: '1px solid', borderColor: 'divider', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: 2 }}>
          <Box
            component="img"
            src={hardwareImage}
            alt="RFID Identifier System"
            sx={{ p: 4, width: '100%', height: 'auto', objectFit: 'cover', borderRadius: 12 }}
          />
          <Box sx={{ color: isDarkMode ? '#ffffff' : '#000000', textAlign: 'center', p: 2 }}>
            <Typography gutterBottom variant="h5" component="div">
              RFID Identifier System
            </Typography>
            <Typography variant="body2" color="text.secondary" align="justify">
                Our RFID Identifier System is at the heart of the PARA project, utilizing MFRC522 technology to streamline fare payments. 
                When a user taps their RFID card on a designated reader, the system instantly identifies the card and securely processes the transaction. 
                The STM32 Microcontroller captures the RFID data and sends out the data via ESP8266 NodeMCU WiFi Module. Thereafter, the system initiates 
                a transaction through a Solidity-based smart contract on the Arbitrum blockchain. This ensures accurate, fast, and tamper-proof fare payments, making public 
                transportation more efficient and secure.
            </Typography>
          </Box>
        </Paper>
        <Paper sx={{ flex: '1 1 30%', background: getPaperBackground(), border: '1px solid', borderColor: 'divider', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: 2 }}>
          <Box
            component="img"
            src={paraCardsImage}
            alt="$PARA Cards"
            sx={{ p: 4, width: '100%', height: 'auto', objectFit: 'cover', borderRadius: 12 }}
          />
          <Box sx={{ color: isDarkMode ? '#ffffff' : '#000000', textAlign: 'center', p: 2 }}>
            <Typography gutterBottom variant="h5" component="div">
              $PARA Cards
            </Typography>
            <Typography variant="body2" color="text.secondary" align="justify">
              $PARA Cards not only serve as your key to accessing public transportation but also reward you for every ride. 
              Each time you use your $PARA Card for fare payment, you earn $PARA Coins, our exclusive cryptocurrency. 
              These coins are automatically credited to your account and can be exchanged for various rewards and benefits.
            By incentivizing public transportation usage, $PARA Cards encourage sustainable commuting habits while providing tangible rewards for users.
            </Typography>
          </Box>
        </Paper>
        </Box>
      </Box>
    );
  };

export default InfoCards;
