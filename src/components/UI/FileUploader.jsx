import { useState } from 'react';
import Box from '@mui/material/Box';
import useDrivePicker from 'react-google-drive-picker'

const SCOPES2 = [
  "https://www.googleapis.com/auth/drive",
  "https://www.googleapis.com/auth/drive.readonly",
  "https://www.googleapis.com/auth/drive.file",
  "https://www.googleapis.com/auth/drive.appdata",
  "https://www.googleapis.com/auth/drive.metadata.readonly",
  "https://www.googleapis.com/auth/drive.photos.readonly",
  "https://www.googleapis.com/auth/drive.metadata"
];

const Uploader = ({setFile, file}) => {
  const [openPicker, authResponse] = useDrivePicker();
  const handleOpenPicker = () => {
    openPicker({
      clientId: import.meta.env.VITE_CLIENT_ID,
      developerKey: import.meta.env.VITE_API_KEY,
      viewId: "DOCS_IMAGES",
      // token: token, // pass oauth token in case you already have one
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      customScopes: SCOPES2,
      // customViews: customViewsArray, // custom view
      callbackFunction: (data) => {
        if (data.action === 'cancel') {
          console.log('User clicked cancel/close button')
        }
        if (data.action === 'picked') {
          setFile(data.docs)
        }
      },
    })
  }


  
  return (
    <Box sx={{ p: 2 }}>
        <button onClick={() => handleOpenPicker()}>Open Picker</button>
        <Box sx={{ mt: 1 }}>{file && file[0].name}</Box>
    </Box>
  );
}

export default Uploader;