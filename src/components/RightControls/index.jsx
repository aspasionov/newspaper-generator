import { useContext, useState } from 'react';
import { Wrapper, OpenButton } from './styles';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import { CopyContext } from '../../App';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const RightControls = ({ contentRef }) => {
  const [open, setOpen] = useState(false);
  const { setCopyMode } = useContext(CopyContext);

  const copyToClipboard = async (e) => {
    await setCopyMode(true)
    const code = contentRef.current.innerHTML;
    await navigator.clipboard.writeText(code);
    setCopyMode(false)
  };

  return (
    <>
      <OpenButton onClick={() => setOpen(true)}>
        <MoreVertIcon />
      </OpenButton>
      <Drawer
        sx={{     
        '& .MuiPaper-root': {
            width: '300px',
            padding: 2,
            boxSizing: 'border-box',
          } }}
        anchor='right'
        open={open}
        onClose={() => setOpen(false)}
      >
        <Button size="large" sx={{ mb: 2 }} startIcon={<ContentCopyIcon/>} variant="contained" onClick={copyToClipboard}>Copy code</Button>
      </Drawer>
    </>
  )
};

export default RightControls;