import { IS1, IS2, IS3, IS4, IS5, IS6 } from './styles';
import ComponentWrapper from '../ComponentWrapper';
import Box from '@mui/material/Box';

const Quote = () => {
    return (
      <ComponentWrapper form={<Box>lolik</Box>}>
            <tr style={IS1}>
              <td style={IS2}>
                <table border="0" cellpadding="0" cellspacing="0" width="632px" style={IS3}>
                  <tbody>
                    <tr style={IS4} valign="middle">
                      <td valign="middle" style={IS5}>
                        <img src="https://aspasionov.github.io/newspaper/quote.png" width="175" alt="quote" loading="lazy" />
                      </td>
                      <td valign="middle" style={IS6}>
                        Not everyone can truly succeed in everything. But success only comes with self-management and determination.
                        {/* <span style={{ fontStyle: 'normal', fontWeight: 300, color: 'black', fontSize: '13px', paddingTop: '5px', display: 'inline-block' }}>
                          Japanese Proverb
                        </span> */}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
      </ComponentWrapper>
    );
}

export default Quote;