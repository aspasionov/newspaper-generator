import { useState, useEffect } from 'react';
import { Parser } from "html-to-react";
import ComponentWrapper from '../ContentWrapper';
import { localStorageHandler } from '../../utils'
import { NEWSPAPER_KEY } from '../../constants'
import data from '../../data.json'
import Modal from './Modal'

import { IS1, IS2, IS3, IS4, IS5, IS6 } from './styles';

const defaultData = data.projectOverview;
const ProjectOverview = () => {
  const [content, setContent] = useState({
    text: '',
    logo: '',
    html: ''
  });
  const htmlToReactParser = new Parser();

  const handleChange = (obj) => {
    setContent(prev => ({...prev, ...obj}))
    localStorageHandler('projectOverview', {...content, ...obj})
  }

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem(NEWSPAPER_KEY))
    if(localData && localData?.projectOverview) {
      setContent(prev => ({...prev, ...localData.projectOverview}))
    }
  },[])

  return (
    <ComponentWrapper form={<Modal content={content} handleChange={handleChange}/>} id="project-overview">
      <tr>
        <td width="672" style={IS1}>
          <table width="672" style={IS2}>
            <tbody>
              <tr>
                <td style={IS3}>
                  <div
                    className="heading"
                    style={IS4}
                  >
                    {content.text || defaultData.text} 
                  </div>
                </td>
                <td align="right">
                  <img src={content.logo || defaultData.logo} height="36" width="160" alt={content.text || defaultData.text} />
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>

      <tr>
        <td>
          <table
            border={0}
            cellPadding={0}
            cellSpacing={0}
            width="100%"
            style={IS5}
          >
            <tbody>
              <tr>
                <td
                  style={IS6}
                >
                  {content.html && content.html !== '<br>'  ? htmlToReactParser.parse(content.html) : defaultData.html}
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </ComponentWrapper>
  );
};

export default ProjectOverview;
