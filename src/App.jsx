import { useState, useRef, createContext } from 'react'
import Main from './pages/Main';


export const CopyContext = createContext();

function App() {
  const [copyMode, setCopyMode] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [activeBlock, setActiveBlock] = useState(null);
  const [token, setToken] = useState(null);
  const contentRef = useRef(null);

  return (
    <CopyContext.Provider value={{ copyMode, setCopyMode, setOpenDrawer, openDrawer, setActiveBlock, activeBlock, setToken, token }}>
      <Main contentRef={contentRef} />
    </CopyContext.Provider>
  )
}

export default App
