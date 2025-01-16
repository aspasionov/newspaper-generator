import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const Wrap = styled(Box)(({ theme }) => ({ 
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

export { Wrap }