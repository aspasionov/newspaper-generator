import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { AddNew } from './styles';


const newRow = [
    {
      url: '',
      img: '',
      title: '',
      time: '',
      place: ''
    },
    {
      url: '',
      img: '',
      title: '',
      time: '',
      place: ''
    }
]

const Modal = ({ state, dispatch }) => {

  const handleDeleteItem = (index) => {
    dispatch({ type: 'delete-item', payload: index })
  }

  const handleRowChange = (e, item, key, parentIndex, index) => {
    dispatch({ type: 'edit-row', payload: {obj: {...item, [key]: e.target.value}, parentIndex, index } })
  }


  return (<Box sx={{ p: 2 }}>
      <TextField size="small" value={state.text} label="Title" variant="outlined" fullWidth sx={{ mb: 2  }} onChange={(e) => dispatch({ type: 'title', payload: e.target.value })}/>
      <TextField size="small" value={state.subtext} label="Sub text" variant="outlined" fullWidth sx={{ mb: 2  }} onChange={(e) => dispatch({ type: 'sub-title', payload: e.target.value })}/>
      {state.items.map(([firstItem, secondItem], index) => (
      <Accordion sx={{ maxWidth: '100%',}} key={firstItem.id}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
        >
        <Typography component="span">{`${index + 1}. `} Row</Typography>
        <IconButton onClick={() => handleDeleteItem(index)} color="error" sx={{ ml: 'auto'}} size="small">
          <DeleteIcon/>        
        </IconButton>
      </AccordionSummary>
      <AccordionDetails>

        <Grid container spacing={1}>
          <Grid item size={6}>
            <TextField size="small" sx={{ mb: 1 }}  value={firstItem.url} label="Url" variant="outlined" fullWidth onChange={(e) => handleRowChange(e, firstItem, 'url', index, 0)} />
            <TextField size="small" sx={{ mb: 1 }}  value={firstItem.img} label="Image" variant="outlined" fullWidth onChange={(e) => handleRowChange(e, firstItem, 'img', index, 0)} />
            <TextField size="small" sx={{ mb: 1 }}  value={firstItem.title} label="Title" variant="outlined" fullWidth onChange={(e) => handleRowChange(e, firstItem, 'title', index, 0)} />
            <TextField size="small" sx={{ mb: 1 }}  value={firstItem.time} label="Time" variant="outlined" fullWidth onChange={(e) => handleRowChange(e, firstItem, 'time', index, 0)} />
            <TextField size="small" value={firstItem.place} label="Place" variant="outlined" fullWidth onChange={(e) => handleRowChange(e, firstItem, 'place', index, 0)} />
          </Grid>
          <Grid item size={6}>
            <TextField size="small" sx={{ mb: 1 }}  value={secondItem.url} label="Url" variant="outlined" fullWidth onChange={(e) => handleRowChange(e, secondItem, 'url', index, 1)} />
            <TextField size="small" sx={{ mb: 1 }}  value={secondItem.img} label="Image" variant="outlined" fullWidth onChange={(e) => handleRowChange(e, secondItem, 'img', index, 1)} />
            <TextField size="small" sx={{ mb: 1 }}  value={secondItem.title} label="Title" variant="outlined" fullWidth onChange={(e) => handleRowChange(e, secondItem, 'title', index, 1)} />
            <TextField size="small" sx={{ mb: 1 }}  value={secondItem.time} label="Time" variant="outlined" fullWidth onChange={(e) => handleRowChange(e, secondItem, 'time', index, 1)} />
            <TextField size="small" value={secondItem.place} label="Place" variant="outlined" fullWidth onChange={(e) => handleRowChange(e, secondItem, 'place', index, 1)} />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
    ))}
    <AddNew onClick={() => dispatch({ type: 'add-new', payload: [{...newRow[0], id: Date.now()}, {...newRow[1], id: Date.now()+1}] })}>
      <ControlPointIcon/>
    </AddNew>
  </Box>)
}

export default Modal;