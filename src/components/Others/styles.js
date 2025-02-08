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

const IS1 = { borderSpacing: 0, borderBottom: '2px solid #233043', width: '100%', margin: '20px 0 0', maxWidth: '672px' }

const IS2 = { padding: '0 15px 0 0' }

const IS3 = { borderBottom: '50px solid #233043', borderLeft: '0px solid transparent', borderRight: '40px solid transparent', height: 0, padding: '0 20px', color: 'white', width: 'fit-content', textTransform: 'uppercase', textAlign: 'center', lineHeight: '50px', fontSize: '20px', fontWeight: 'bold', fontStretch: 'normal' }

const IS4 = { padding: '0 20px 20px' }

const IS5 = { marginTop: 20 }

const IS6 = { objectFit: 'cover' }

const IS7 = { fontSize: '14px', fontWeight: 'normal', fontStretch: 'normal', fontStyle: 'normal', lineHeight: '1.57', letterSpacing: 'normal', textAlign: 'left', color: '#54555e', paddingLeft: 13, wordWrap: 'break-word' }

export { IS1, IS2, IS3, IS4, IS5, IS6, IS7, AddNew, Item, ItemImg, UploaderWrapper, ItemBody }