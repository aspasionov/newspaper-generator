import { useState } from 'react';
import Box from '@mui/material/Box';
import Editor from 'react-simple-wysiwyg';
import TextField from '@mui/material/TextField';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Uploader from '../UI/FileUploader';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { urlToSrc } from '../../utils'
import { AddNew, Item, ItemImg, ItemBody, UploaderWrapper } from './styles';

const newItem = {
  img: urlToSrc('15UVMmBB1etchWyGshCY_4m40e6Bff5ab'),
  html: 'Some content',
}

const Modal = ({ state, dispatch }) => {
  const [showUploader, setShowUploader] = useState(null);

  const handleItemChange = (e, obj, key) => {
    if(key === 'img') {
      dispatch({ type: 'edit-item', payload: { ...obj, [key]: urlToSrc(e[0].id) } })
      return 
    }
    dispatch({ type: 'edit-item', payload: { ...obj, [key]: e.target.value } })
  }

  const handleDeleteItem = (id) => {
    dispatch({ type: 'delete-item', payload: id })
  }
  return (<Box sx={{ p: 2 }}>
    <TextField size="small" value={state.text} label="Title" variant="outlined" fullWidth sx={{ mb: 2  }} onChange={(e) => dispatch({ type: 'title', payload: e.target.value })}/>
    <TextField size="small" value={state.subtext} label="Subtext" variant="outlined" fullWidth sx={{ mb: 2  }} onChange={(e) => dispatch({ type: 'subtext', payload: e.target.value })}/>

    {state.items.map((item, index) => (
      <Accordion sx={{ maxWidth: '100%',}} key={item.id}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
        >
        <Typography component="span">{`${index + 1}. `} { 'Item'}</Typography>
        <IconButton onClick={() => handleDeleteItem(item.id)} color="error" sx={{ ml: 'auto'}} size="small">
          <DeleteIcon/>        
        </IconButton>
      </AccordionSummary>
      <AccordionDetails>
      <TextField size="small" value={item.title} label="Title" variant="outlined" fullWidth sx={{ mb: 2  }} onChange={(e) => handleItemChange(e, item, 'title')}/>
          <Item>
            <ItemImg onMouseEnter={() => setShowUploader(item.id)} onMouseLeave={() => setShowUploader(null)}>
              <img src={item.img} alt={item.id} />
              {showUploader === item.id && <UploaderWrapper children={<Uploader setFile={(val) => handleItemChange(val, item, 'img')} file={null}/>}/>}
            </ItemImg>
            <ItemBody container spacing={1}>
            <Editor value={item.html} onChange={(e) => handleItemChange(e, item, 'html')} />
            </ItemBody>
          </Item>
      </AccordionDetails>
    </Accordion>
    ))}
    <AddNew onClick={() => dispatch({ type: 'add-new', payload: { ...newItem, id: Date.now() } })}>
      <ControlPointIcon/>
    </AddNew>
    </Box>)
}

export default Modal;