import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

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

const IS1 = {borderSpacing: 0, borderBottom: '2px solid #233043', width: 672, margin: '20px 0 0'}

const IS2 = {padding: '0 15px 0 0'}

const IS3 = {
  borderBottom: '50px solid #233043',
  borderLeft: '0px solid transparent',
  borderRight: '40px solid transparent',
  height: 0,
  padding: '0 20px',
  color: 'white',
  width: 'fit-content',
  textTransform: 'uppercase',
  textAlign: 'center',
  lineHeight: '50px',
  fontSize: 20,
  fontWeight: 'bold',
  fontStretch: 'normal',
}

const IS4 = { padding: '0 20px' }

const IS5 = { maxWidth: '632px' }

const IS6 = { padding: '20px 0px' }

const IS7 = { paddingRight: '10px' }

const IS8 = { paddingTop: '15px', marginRight: '10px', textDecoration: 'none', display: 'block', cursor: 'pointer' }

const IS9 = { borderRadius: '4px 4px 0 0', objectFit: 'cover', display: 'block' }

const IS10 = { margin: '0', padding: '0' }

const IS11 = { padding: '10px', borderRadius: '0px 0 4px 4px', backgroundColor: '#f3f3f3' }

const IS12 = { fontSize: '16px', fontWeight: 600, lineHeight: '1.38', color: '#171821', margin: '0 0 3px' }

const IS13 = { color: '#54555e', fontSize: '14px', lineHeight: '1.86', margin: '0px' }

const IS14 = { color: '#000', fontSize: '12px', lineHeight: '1', margin: '0px' }

const IS15 = { paddingTop: '15px', marginRight: '10px', textDecoration: 'none', cursor: 'pointer', display: 'block' }

const IS16 = { borderRadius: '4px 4px 0 0', objectPosition: 'middle', objectFit: 'cover', display: 'block' }

const IS17 = { padding: '20px 0px' } // not for first event row


export { IS1, IS2, IS3, IS4, IS5, IS6, IS7, IS8, IS9, IS10, IS11, IS12, IS13, IS14, IS15, IS16, IS17, AddNew }