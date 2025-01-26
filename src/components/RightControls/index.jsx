import { useContext, useState, useRef, useEffect } from 'react';
import { OpenButton } from './styles';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import { CopyContext } from '../../App';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RestoreIcon from '@mui/icons-material/Restore';
import SendIcon from '@mui/icons-material/Send';
import { NEWSPAPER_HEAD, NEWSPAPER_FOOTER, NEWSPAPER_KEY } from '../../constants';
import Grid from '@mui/material/Grid2';
import emailjs from '@emailjs/browser';
import CircularProgress from '@mui/material/CircularProgress';

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const RightControls = ({ contentRef }) => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);
  const { setCopyMode } = useContext(CopyContext);
  
  const formRef = useRef(null); 

  const copyToClipboard = async (e) => {
    await setCopyMode(true)
    const code = NEWSPAPER_HEAD + contentRef.current.innerHTML + NEWSPAPER_FOOTER;
    await navigator.clipboard.writeText(code);
    setCopyMode(false)
  };

  const handleReset = async () => {
    localStorage.removeItem(NEWSPAPER_KEY);
    window.location.reload();
  }

  const handleSend = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Incorrect email format');
      return;
    }
    setError(null);
    setSending(true)
    await setCopyMode(true)

    const code = NEWSPAPER_HEAD + contentRef.current.innerHTML + NEWSPAPER_FOOTER;
    const input = formRef.current.querySelector('input[name="code"]');
    if (input) {
      formRef.current.removeChild(input);
    } 
      const copy_input = document.createElement('input');
      copy_input.type = 'text';
      copy_input.name = 'code';
      copy_input.value = code;
      formRef.current.appendChild(copy_input);

    emailjs
      .sendForm(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, formRef.current, {
        publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setOpen(false)
        },
      )
      .catch((error) => {
        console.log('FAILED...', error);
      })
      .finally(() => {
        setSending(false)
        setCopyMode(false)
      });
  }

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
        <form action="" ref={formRef} style={{ display: 'none' }}>
          <input type="text" name="to_mail" value={email} />
        </form>
        <Button size="large" sx={{ mb: 2 }} startIcon={<ContentCopyIcon/>} variant="contained" onClick={copyToClipboard}>Copy code</Button>
        <Button size="large" sx={{ mb: 2 }} startIcon={<RestoreIcon/>} variant="contained" onClick={handleReset} color="error">Reset data</Button>
        <Grid container spacing={1}>
          <Grid item size={7}>
            <TextField label="Email" value={email} variant="outlined" fullWidth size="small" onChange={(e) => setEmail(e.target.value)} error={error !== null} helperText={error} />
          </Grid>
          <Grid item size={5}>
            <Button variant="contained" endIcon={!sending ? <SendIcon /> : <CircularProgress size="16px" color='disabled' />} onClick={handleSend} disabled={!email || sending}>
              Send
            </Button>
          </Grid>
        </Grid>
      </Drawer>
    </>
  )
};

export default RightControls;
