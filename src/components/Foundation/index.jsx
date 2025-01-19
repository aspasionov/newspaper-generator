import { useState, useEffect } from 'react';
import { IS1, IS2, IS3, IS4, IS5, IS6, IS7 } from './styles';
import ComponentWrapper from '../ContentWrapper';
import Modal from './Modal'
import data from '../../data.json'
import { Parser } from "html-to-react";
import { localStorageHandler, urlToSrc } from '../../utils'
import { NEWSPAPER_KEY } from '../../constants'

const defaultcontent = data.foundation;

const Foundation = () => {
  const [content, setContent] = useState({
    text: '',
    subtext: '',
    img: '',
    html: ''
  })
  const htmlToReactParser = new Parser();

  const handleChange = (data) => {
    setContent(prev => ({...prev, ...data}))
    localStorageHandler('foundation', {...content, ...data})
  }

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem(NEWSPAPER_KEY))
    if(localData && localData?.foundation) {
      setContent(prev=> ({...prev, ...localData.foundation}))
    }
  },[])


  return (
    <ComponentWrapper form={<Modal content={content} handleChange={handleChange}/>} id="foundation">
      <tr>
        <td>
          <table width="672" style={IS1}>
            <tbody>
              <tr>
                <td style={IS2}>
                  <div className="heading" style={IS3}>
                    {content.text || defaultcontent.text}
                  </div>
                </td>
                <td className="subheading">{content.subtext || defaultcontent.subtext}</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>

      <tr>
        <td style={IS4}>
          <table style={IS5}>
            <tbody>
              <tr>
                <td style={IS6}>
                  <img width={672} height={423} src={content.img || defaultcontent.img} alt="header img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td style={IS7}>
                  {htmlToReactParser.parse(content.html || defaultcontent.html)}
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      </ComponentWrapper>
  )
}

export default Foundation;