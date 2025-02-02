import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Uploader from '../UI/FileUploader';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { urlToSrc } from '../../utils'
import { AddNew, Item, ItemImg, ItemBody, UploaderWrapper } from './styles';


const newEmployee = {
  img: 'https://placehold.co/360x640',
  name: '',
  position: '',
  about: '',
}

const Modal = ({ state, dispatch }) => {
  const [showUploader, setShowUploader] = useState(null);

  const handlePositionChange = (e, obj, key) => {
    if(key === 'img') {
      dispatch({ type: 'edit-employee', payload: { ...obj, [key]: urlToSrc(e[0].id) } })
      return 
    }
    dispatch({ type: 'edit-employee', payload: { ...obj, [key]: e.target.value } })
  }

  const handleDeleteEmployee = (id) => {
    dispatch({ type: 'delete-employee', payload: id })
  }


  return (
    <Box sx={{ p: 2 }}>
      <TextField size="small" value={state.text} label="Title" variant="outlined" fullWidth sx={{ mb: 2  }} onChange={(e) => dispatch({ type: 'title', payload: e.target.value })}/>

      {state.items.map((empl, index) => (
      <Accordion sx={{ maxWidth: '100%',}} key={empl.id}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
        >
        <Typography component="span">{`${index + 1}. `} {empl.name || 'Employee'}</Typography>
        <IconButton onClick={() => handleDeleteEmployee(empl.id)} color="error" sx={{ ml: 'auto'}} size="small">
          <DeleteIcon/>        
        </IconButton>
      </AccordionSummary>
      <AccordionDetails>
          <Item>
            <ItemImg onMouseEnter={() => setShowUploader(empl.id)} onMouseLeave={() => setShowUploader(null)}>
              <img src={empl.img} alt={empl.name} />
              {showUploader === empl.id && <UploaderWrapper children={<Uploader setFile={(val) => handlePositionChange(val, empl, 'img')} file={null}/>}/>}
            </ItemImg>
            <ItemBody container spacing={1}>
              <Grid item size={12}>
                <TextField size="small" value={empl.name} label="Name" variant="outlined" fullWidth onChange={(e) => handlePositionChange(e, empl, 'name')} />
              </Grid>
              <Grid item size={12}>
                <TextField size="small" multiline value={empl.position} rows={2} label="Position" variant="outlined" fullWidth onChange={(e) => handlePositionChange(e, empl, 'position')} />
              </Grid>
              <Grid item size={12}>
                <TextField size="small" multiline value={empl.about} rows={4} label="About" variant="outlined" fullWidth  onChange={(e) => handlePositionChange(e, empl, 'about')}/>
              </Grid>
            </ItemBody>
          </Item>
      </AccordionDetails>
    </Accordion>
    ))}
    <AddNew onClick={() => dispatch({ type: 'add-new', payload: { ...newEmployee, id: Date.now() } })}>
      <ControlPointIcon/>
    </AddNew>
    </Box>)
}

export default Modal