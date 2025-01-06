import { useState, useEffect } from 'react';
import { IS1, IS2, IS3, IS4, IS5, IS6 } from './styles';
import ComponentWrapper from '../ContentWrapper';
import Box from '@mui/material/Box';
import Modal from './Modal'
import data from '../../data.json'
import { Parser } from "html-to-react";
import { localStorageHandler } from '../../utils'

const defaultText = data.quote.text;

const Quote = () => {
  const [quote, setQuote] = useState("")
  const htmlToReactParser = new Parser();

  const handleChange = (html) => {
    setQuote(html)
    localStorageHandler('quote', {text: html})
  }

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('nwsppr'))
    if(localData && localData?.quote?.text) {
      setQuote(localData.quote.text)
    }
  },[])

    return (
      <ComponentWrapper form={<Modal setQuote={handleChange} quote={quote}/>} id="quote">
            <tr style={IS1}>
              <td style={IS2}>
                <table border="0" cellpadding="0" cellspacing="0" width="632px" style={IS3}>
                  <tbody>
                    <tr style={IS4} valign="middle">
                      <td valign="middle" style={IS5}>
                        <img src="https://aspasionov.github.io/newspaper/quote.png" width="175" alt="quote" loading="lazy" />
                      </td>
                      <td valign="middle" style={IS6}>
                        {quote && quote !== '<br>'  ? htmlToReactParser.parse(quote) :  defaultText}
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