import { useState, useEffect } from 'react';
import ComponentWrapper from '../ContentWrapper';
import Box from '@mui/material/Box';
import Uploader from '../UI/FileUploader';
import { urlToSrc, localStorageHandler } from '../../utils'
import { NEWSPAPER_KEY } from '../../constants'
import data from '../../data.json'

const defaultSrc = data.header.url;

const NewspaperHeader = () => {
  const [file, setFile] = useState(null)

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem(NEWSPAPER_KEY))
    if(localData && localData?.header?.url) {
        const url = new URL(localData.header.url);
        const id = url.searchParams.get('id');
        setFile([{id}])
    }
    
  }, [])

  const saveFile = (val) => {
    setFile(val)
    localStorageHandler('header', {url: urlToSrc(val[0].id)})
    
  }
  
    return (
        <ComponentWrapper form={<Box>
          <Uploader setFile={saveFile} file={file}/>
        </Box>} id="header">
            <tr>
                <td width="672">
                    <img width="672" height="321" src={file ? `${urlToSrc(file[0].id)}&sz=w1000`: defaultSrc} alt="header img" loading="lazy"/>
                </td>
            </tr>
        </ComponentWrapper>
    );
}

export default NewspaperHeader;