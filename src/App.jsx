import { useState, useRef, createContext } from 'react'
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import NewspaperHeader from './components/Header';
import Quote from './components/Quote';
import LeftSlider from './components/LeftSlider';
import RightControls from './components/RightControls';
import { DRAWER_WIDTH } from './constants';
import { Main } from './styles';

export const CopyContext = createContext();

function App() {
  const [copyMode, setCopyMode] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [activeBlock, setActiveBlock] = useState(null);
  const contentRef = useRef(null);

  return (
    <CopyContext.Provider value={{ copyMode, setCopyMode, setOpenDrawer, openDrawer, setActiveBlock, activeBlock }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Main open={openDrawer}>
        {/* <LeftSlider/> */}
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
      </Main>
        <RightControls contentRef={contentRef}/>
      </Box>
    </CopyContext.Provider>
  )
}

export default App
