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
  backgroundColor: '#f8f8f8',
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

const IS1 = { maxWidth: '672px' }

const IS2 = { borderSpacing: '0px', borderBottom: '2px solid #233043', margin: '20px 0 0' }

const IS3 = { padding: '0 15px 0 0' }

const IS4 = { borderBottom: '50px solid #233043', borderLeft: '0px solid transparent', borderRight: '40px solid transparent', height: 0, padding: '0 20px', color: 'white', width: 'fit-content', textTransform: 'uppercase', textAlign: 'center', lineHeight: '50px', fontSize: '20px', fontWeight: 'bold', fontStretch: 'normal' }

const IS5 = {fontSize: '14px', fontWeight: 'normal', fontStretch: 'normal', fontStyle: 'normal', lineHeight: '1.57', letterSpacing: 'normal', textAlign: 'left', color: '#171821', textTransform: 'uppercase', marginBottom: '20px', marginTop: '25px'}

const IS6 = {backgroundColor: '#faf3eb', padding: '4px 20px'}

const IS7 = { maxWidth: '632px', padding: '0 20px' }

const IS8 = { padding: '10px 0' }

const IS9 = { width: '100%', maxWidth: '632px' }

const IS10 = { width: '138px', borderRadius: '4px', backgroundColor: '#f8f8f8', lineHeight: '40px', textAlign: 'center', verticalAlign: 'middle', height: 'auto' }

const IS11 = { color: '#4054B3', fontWeight: 700, fontSize: '22px' }

const IS12 = { fontSize: '14px', fontWeight: 'normal', fontStretch: 'normal', fontStyle: 'normal', lineHeight: '1.57', letterSpacing: 'normal', textAlign: 'left', color: '#54555e', paddingLeft: '22px' }

const IS13 = { display: 'inline-block', verticalAlign: 'middle' }

export { IS1, IS2, IS3, IS4, IS5, IS6, IS7, IS8, IS9, IS10, IS11, IS12, IS13, AddNew, Item, ItemImg, ItemBody, UploaderWrapper }