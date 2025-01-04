import { useState, useRef, createContext } from 'react'
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import NewspaperHeader from './components/Header';
import Quote from './components/Quote';
import LeftSlider from './components/LeftSlider';
import RightControls from './components/RightControls';

export const CopyContext = createContext();

function App() {
  const [copyMode, setCopyMode] = useState(false);
  const contentRef = useRef(null);

  return (
    <CopyContext.Provider value={{ copyMode, setCopyMode }}>
      <input type="hidden" />
      <Grid container sx={{ minHeight: '100vh' }}>
      <LeftSlider/>
      <Grid item size={8} sx={{ p: 2 }}>
        <Box sx={{ mx: 'auto', width: '100%', maxWidth: 675 }} ref={contentRef}>
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style={{ margin: 0, padding: 0 }}>
            <tbody>
              <tr>
                <td align="center">
                  <table border="0" cellpadding="0" cellspacing="0" width="632px" style={{ maxWidth: '672px', fontFamily: 'Montserrat, Arial', margin: 0, backgroundColor: '#FEFEFE', WebkitTextSizeAdjust: 'none' }}>
                    <tbody>
                      <NewspaperHeader/>
                      <Quote/>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Grid>
      <RightControls/>
    </Grid>
    </CopyContext.Provider>
  )
}

export default App
