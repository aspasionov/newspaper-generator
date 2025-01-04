import { alpha, styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';

const Wrapper = styled(Grid)(({ theme }) => ({
  borderLeft: '1px solid black',
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
}));

export { Wrapper }
