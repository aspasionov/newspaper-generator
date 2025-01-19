import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Editor from 'react-simple-wysiwyg';

const Modal = ({ content, handleChange }) => {
  return <Box sx={{ p: 2}}>
    <TextField size="small" value={content.text} label="Title" variant="outlined" fullWidth sx={{ mb: 2  }} onChange={(e) => handleChange({ text: e.target.value })}/>
    <TextField size="small" value={content.subtext} label="Subtext" variant="outlined" fullWidth sx={{ mb: 2  }} onChange={(e) => handleChange({ subtext: e.target.value })}/>
    <Box sx={{ mb: 1}}>Content</Box>
    <Editor value={content.html} onChange={(e) => handleChange({ html: e.target.value })} />
  </Box>
}

export default Modal;