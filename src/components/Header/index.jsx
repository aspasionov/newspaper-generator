import ComponentWrapper from '../ComponentWrapper';
import Box from '@mui/material/Box';

const NewspaperHeader = () => {
    return (
        <ComponentWrapper form={<Box>lolik</Box>}>
            <tr>
                <td width="672">
                    <img width="672" height="321" src="https://aspasionov.github.io/newspaper/30/header.jpg" alt="header img" loading="lazy"/>
                </td>
            </tr>
        </ComponentWrapper>
    );
}

export default NewspaperHeader;