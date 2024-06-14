// src/components/TransactionTable.js
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import transactionData from './TransactionData';  

export default function TransactionTable() {
  return (
    <Box component="section" py={2}>
      <Box sx={{ maxWidth: 'lg', mx: 'auto', px: 4 }}>
        <Box sx={{ display: 'flex', mb: 2 }}>
          <Typography variant="h5">Transaction History</Typography>
        </Box>

        <TableContainer component={Paper} sx={{ maxHeight: '400px', overflow: 'auto' }}>
          <Table sx={{ minWidth: 650 }} aria-label="transaction table" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell align="left">Transaction Type</TableCell>
                <TableCell align="left">Transport Mode</TableCell>
                <TableCell align="left">Entry/Exit</TableCell>
                <TableCell align="left">Amount</TableCell>
                <TableCell align="left">Balance (PHP)</TableCell>
                <TableCell align="left">$PARA Balance</TableCell>
                <TableCell align="left">Tokens Earned</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Timestamp</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactionData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell align="left">{row.transactionType}</TableCell>
                  <TableCell align="left">{row.transportMode}</TableCell>
                  <TableCell align="left">{row.entryExit}</TableCell>
                  <TableCell align="left" sx={{ whiteSpace: 'nowrap' }}>{row.amount}</TableCell>
                  <TableCell align="left">{row.balance}</TableCell>
                  <TableCell align="left">{row.paraBalance}</TableCell>
                  <TableCell align="left">{row.tokensEarned}</TableCell>
                  <TableCell align="left">{row.status}</TableCell>
                  <TableCell align="left">{row.timestamp}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
