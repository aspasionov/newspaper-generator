import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/Button';

const Wrapper = styled(Grid)(({ theme }) => ({
  borderLeft: '1px solid black',
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
}));

const OpenButton = styled(IconButton)(({ theme }) => ({
  position: 'fixed',
  right: theme.spacing(1),
  top: theme.spacing(1),
  zIndex: theme.zIndex.drawer,
}));

export { Wrapper, OpenButton }
