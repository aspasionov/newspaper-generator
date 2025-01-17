import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Uploader from '../UI/FileUploader';
import { urlToSrc } from '../../utils'
import Editor from 'react-simple-wysiwyg';


const Modal = ({ content, handleChange }) => {
  
  const handleSaveFile = (file) => {
    handleChange({logo: urlToSrc(file[0].id)})
  }
  return (<Box sx={{ p: 2}}>
    <TextField size="small" value={content.text} label="Title" variant="outlined" fullWidth sx={{ mb: 2  }} onChange={(e) =>  handleChange({text: e.target.value})}/>
    <Box sx={{ mb: 1}}>Logo</Box>
    <Uploader setFile={handleSaveFile} file={null}/>
    <Box sx={{ mb: 1}}>Content</Box>
    <Editor value={content.html} onChange={(e) => handleChange({ html: e.target.value })} />
  </Box>)
}

export default Modal;