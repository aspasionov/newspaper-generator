import { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import useHover from '../hooks/useHover';
import { CopyContext } from '../App';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const ComponentWrapper = ({ children, form }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const Form = form;

  const { copyMode } = useContext(CopyContext);
    const {hovered, bind} = useHover();

    console.log('formsssss', copyMode);
    
    
  return ( copyMode ? <>{children}</> :
    <Box onMouseEnter={bind.onMouseEnter} onMouseLeave={bind.onMouseLeave} sx={{ position: 'relative'}}>
      {children}
      {hovered && <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255,255,255, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 24 }}>
        <Button onClick={handleOpen} size="large" variant="contained" startIcon={<EditIcon />}>
          Edit
        </Button>
        </Box>}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          {form}
        </Modal>
    </Box>
  );
}

export default ComponentWrapper;