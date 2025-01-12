import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
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

const newPosition = {
  img: urlToSrc('14_LCv-tVtkmVyem6Y1I5uUA6yAjw9RD3'),
  title: 'position',
  experience: '5',
  location: 'Poland',
  link: 'https://strongsd.com/careers/51/senior-technical-support-engineer'
}

const Modal = ({ state, dispatch }) => {
  const [showUploader, setShowUploader] = useState(null);

  const handlePositionChange = (e, obj, key) => {
    if(key === 'img') {
      dispatch({ type: 'edit-vacancy', payload: { ...obj, [key]: urlToSrc(e[0].id) } })
      return 
    }
    dispatch({ type: 'edit-vacancy', payload: { ...obj, [key]: e.target.value } })
  }

  const handleDeletePosition = (id) => {
    dispatch({ type: 'delete-vacancy', payload: id })
  }
  return (<Box sx={{ p: 2 }}>
    <TextField size="small" value={state.text} label="Title" variant="outlined" fullWidth sx={{ mb: 2  }} onChange={(e) => dispatch({ type: 'title', payload: e.target.value })}/>
    <TextField size="small" value={state.subtext} label="Subtext" variant="outlined" fullWidth sx={{ mb: 2  }} onChange={(e) => dispatch({ type: 'subtext', payload: e.target.value })}/>

    {state.positions.map((position, index) => (
      <Accordion sx={{ maxWidth: '100%',}} key={position.id}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
        >
        <Typography component="span">{`${index + 1}. `} {position.title || 'Position'}</Typography>
        <IconButton onClick={() => handleDeletePosition(position.id)} color="error" sx={{ ml: 'auto'}} size="small">
          <DeleteIcon/>        
        </IconButton>
      </AccordionSummary>
      <AccordionDetails>
          <Item>
            <ItemImg onMouseEnter={() => setShowUploader(position.id)} onMouseLeave={() => setShowUploader(null)}>
              <img src={position.img} alt={position.title} />
              {showUploader === position.id && <UploaderWrapper children={<Uploader setFile={(val) => handlePositionChange(val, position, 'img')} file={null}/>}/>}
            </ItemImg>
            <ItemBody container spacing={1}>
              <Grid item size={12}>
                <TextField size="small" value={position.title} label="Title" variant="outlined" fullWidth onChange={(e) => handlePositionChange(e, position, 'title')} />
              </Grid>
              <Grid item size={5}>
                <TextField size="small" value={position.experience} label="Experience" variant="outlined" fullWidth type="number" onChange={(e) => handlePositionChange(e, position, 'experience')} />
              </Grid>
              <Grid item size={7}>
                <TextField size="small" value={position.location} label="Location" variant="outlined" fullWidth  onChange={(e) => handlePositionChange(e, position, 'location')}/>
              </Grid>
              <Grid item size={12}>
                <TextField size="small" value={position.link} label="Link" variant="outlined" fullWidth  onChange={(e) => handlePositionChange(e, position, 'link')}/>
              </Grid>
            </ItemBody>
          </Item>
      </AccordionDetails>
    </Accordion>
    ))}
    <AddNew onClick={() => dispatch({ type: 'add-new', payload: { ...newPosition, id: Date.now() } })}>
      <ControlPointIcon/>
    </AddNew>
  </Box>)
}

export default Modal;