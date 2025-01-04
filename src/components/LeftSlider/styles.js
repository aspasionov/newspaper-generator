import { alpha, styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';

const Wrapper = styled(Grid)(({ theme }) => ({
  borderRight: '1px solid black',
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
}));

const SliderWrapper = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  height: 'calc(100vh - 200px)',
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2, 0),
}));

export { Wrapper, SliderWrapper }
