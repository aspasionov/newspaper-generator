import { useState, useEffect } from 'react';
import { IS1, IS2, IS3, IS4, IS5, IS6 } from './styles';
import ComponentWrapper from '../ContentWrapper';
import Modal from './Modal'
import data from '../../data.json'
import { Parser } from "html-to-react";
import { localStorageHandler, urlToSrc } from '../../utils'
import { NEWSPAPER_KEY } from '../../constants'

const defaultText = data.quote.text;

const Quote = () => {
  const [quote, setQuote] = useState("")
  const htmlToReactParser = new Parser();

  const handleChange = (html) => {
    setQuote(html)
    localStorageHandler('quote', {text: html})
  }

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem(NEWSPAPER_KEY))
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
                        <img src={urlToSrc('13c3APOvQqTH_I8nbyy4_HEu-60oTWkx3')} width="175" alt="quote" />
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