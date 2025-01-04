import { useContext } from 'react';
import { Wrapper } from './styles';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Button from '@mui/material/Button';
import { CopyContext } from '../../App';

const RightControls = () => {
  const { setCopyMode } = useContext(CopyContext);

  const copyToClipboard = async (e) => {
    await setCopyMode(true)
    const code = contentRef.current.innerHTML;
    await navigator.clipboard.writeText(code);
    setCopyMode(false)
  };

  return (
    <Wrapper item size={2}>
      <Button size="large" sx={{ mb: 2 }} startIcon={<ContentCopyIcon/>} variant="contained" onClick={copyToClipboard}>Copy code</Button>
    </Wrapper>
  )
};

export default RightControls;