import { useState, useEffect } from 'react';
import { IS1, IS2, IS3, IS4, IS5, IS6 } from './styles';
import ComponentWrapper from '../ContentWrapper';
import Modal from './Modal'
import data from '../../data.json'
import { Parser } from "html-to-react";
import { localStorageHandler, urlToSrc } from '../../utils'
import { NEWSPAPER_KEY } from '../../constants'

const defaultcontent = data.education;

const Education = () => {
  const [content, setContent] = useState({
    text: '',
    subtext: '',
    html: ''
  })
  const htmlToReactParser = new Parser();

  const handleChange = (data) => {
    setContent(prev => ({...prev, ...data}))
    localStorageHandler('education', {...content, ...data})
  }

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem(NEWSPAPER_KEY))
    if(localData && localData?.education) {
      setContent(prev=> ({...prev, ...localData.education}))
    }
  },[])

    return (
      <ComponentWrapper form={<Modal handleChange={handleChange} content={content} />} id="education">
        <tr>
          <td>
            <table width="672px" style={IS1}>
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
          <td>
            <table width="632px" style={IS4}>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td align="left" style={IS5}>
                  <span style={IS6}>
                    {htmlToReactParser.parse(content.html || defaultcontent.html)}
                  </span>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </ComponentWrapper>
    );
}

export default Education;