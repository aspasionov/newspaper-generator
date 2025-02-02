import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';

const AddNew = styled(Box)(({ theme }) => ({ 
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  marginTop: 4,
  height: 48,
  border: '1px solid rgba(0, 0, 0, 0.12)',
  borderRadius: '4px',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
}
));

const Item = styled(Box)(({ theme }) => ({ 
  width: '100%',
  display: 'flex',
  alignItems: 'flex-start',
}));

const ItemImg = styled(Grid)(({ theme }) => ({ 
  flex: '0 0 80px',
  height: '120px',
  position: 'relative',
  marginRight: 10,
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  }
}));

const UploaderWrapper = styled(Box)(({ theme }) => ({ 
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 24
}
));

const ItemBody = styled(Grid)(({ theme }) => ({ 
  flex: '1 1 auto',
  width: '100%'
}));

const IS1 = {width: 672, maxWidth: 672, margin: '20px 0 0'}

const IS2 = {borderSpacing: 0, borderBottom: '2px solid #233043', width: 672, maxWidth: 672}

const IS3 = {padding: '0 15px 0 0'}

const IS4 = {borderBottom: '50px solid #233043', borderLeft: '0px solid transparent', borderRight: '40px solid transparent', height: 0, padding: '0 20px', color: 'white', width: 'fit-content', textTransform: 'uppercase', textAlign: 'center', lineHeight: '50px', fontSize: 20, fontWeight: 'bold', fontStretch: 'normal'}

const IS5 = { padding: '20px 20px 10px' }

const IS6 = { maxWidth: '632px' }

const IS7 = { verticalAlign: 'top', objectFit: 'cover' }

const IS8 = { paddingLeft: '17px' }

const IS9 = { background: '#FD8D46', padding: '5px 7px', fontWeight: 500, fontSize: '16px', lineHeight: '20px', color: 'white', minWidth: '255px', width: 'fit-content', margin: 0 }

const IS10 = { paddingLeft: '17px' }

const IS11 = { fontWeight: 600, fontSize: '15px', margin: 0, lineHeight: '40px' }

const IS12 = { fontWeight: 'normal', fontSize: '14px', lineHeight: '22px', color: '#54555E', paddingLeft: '17px' }

const IS13 = { fontWeight: 600, fontSize: '16px', color: 'black' }

export { IS1, IS2, IS3, IS4, IS5, IS6, IS7, IS8, IS9, IS10, IS11, IS12, IS13, AddNew, Item, ItemImg, ItemBody, UploaderWrapper }