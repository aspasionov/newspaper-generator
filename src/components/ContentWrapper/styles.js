import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const Wrapper = styled(Box)(({ theme }) => ({ 
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(255,255,255, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 24
}
));

const DrawerHeader = styled(Box)(({ theme }) => ({ 
  padding: theme.spacing(2),
  borderBottom: '1px solid black',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center'
}
));

const ChildreWrapper = styled(Box)(({ theme, active }) => ({ 
  ...(active ? { 
    backgroundColor: 'white',
    boxShadow: '0px 0px 10px 0px #ffff00',
    zIndex: theme.zIndex.drawer + 10,
    position: 'relative',
  } : {} )
}
));

export { Wrapper, DrawerHeader, ChildreWrapper }
