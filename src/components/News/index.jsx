import React,{ useReducer, useEffect } from 'react';
import { Parser } from "html-to-react";
import ComponentWrapper from '../ContentWrapper';
import Modal from './Modal'
import data from '../../data.json'
import { urlToSrc, localStorageHandler } from '../../utils';
import { NEWSPAPER_KEY } from '../../constants';
import { IS1, IS2, IS3, IS4, IS5, IS6, IS7, IS8, IS9, IS10, IS11, IS12, IS13 } from './styles';

const defaultData = data.news;

const initialState = {
  text: '',
  subtext: '',
  items: [{
    id: 1,
    img: urlToSrc('15UVMmBB1etchWyGshCY_4m40e6Bff5ab'),
    title: '',
    html: 'Some content...'
  }]
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'title':
      localStorageHandler('news', {...state, text: action.payload})
      return {...state, text: action.payload};
    case 'subtext':
      localStorageHandler('news', {...state, subtext: action.payload})
      return {...state, subtext: action.payload};
    case 'add-new':
      localStorageHandler('news', {...state, items: [...state.items, action.payload]})
      return {...state, items: [...state.items, action.payload]};
    case 'edit-item':
      const newItems = state.items.map(item => {
        if(item.id === action.payload.id) {
          return action.payload
        }
        return item
      })
      localStorageHandler('news', {...state, items: newItems})
      return {...state, items: newItems};
    case 'delete-item':
      const filterdItems = state.items.filter(item => item.id !== action.payload)
      localStorageHandler('news', {...state, items: filterdItems})
      return {...state, items: filterdItems};
      case 'set-items':
        return {...state, items: action.payload};
    default:
      return state;
  }
}



const News = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const htmlToReactParser = new Parser();

  useEffect(() => {
      const localData = JSON.parse(localStorage.getItem(NEWSPAPER_KEY))
      if(localData && localData?.news) {
        const keysMap = {
          text: 'title',
          subtext: 'subtext',
          items: 'set-items'
        }
  
        for (const key in keysMap) {
          if(localData.news[key]) {
            if(localData.news[key]) {
              dispatch({type: keysMap[key], payload: localData.news[key]})
            }
          }
        }
      }
    },[])
  
  return (
    <ComponentWrapper form={<Modal state={state} dispatch={dispatch}/>} id="news">
      <tr>
        <td width="672" style={IS1}>
          <table width="672" style={IS2}>
            <tbody>
              <tr>
                <td style={IS3}>
                  <div className="heading" style={IS4}>
                    {state.text || defaultData.text}
                  </div>
                </td>
                <td className="subheading">{state.subtext || defaultData.subtext}</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>

      {(state.items.length ? state.items : defaultData.items).map((item) => (<React.Fragment key={item.id}>
        {item?.title && <tr>
        <td style={IS5}>
          <table width={672} style={IS6}>
            <tr>
              <td>{item.title}</td>
            </tr>
          </table>
        </td>
      </tr>}

      <tr>
        <td width="632px" style={IS7}>
          <table border="0" cellSpacing="0" cellPadding="0">
            <tr>
              <td style={IS8}>
                <table width="632px" style={IS9} border="0" cellSpacing="0" cellPadding="0">
                  <tbody>
                    <tr>
                      <td valign="middle" style={IS10}>
                        <div>
                          <img height={40} width={110} style={IS13} src={item.img} alt={item.title} />
                        </div>
                      </td>
                      <td rowSpan="2" style={IS12}>
                        {htmlToReactParser.parse(item.html)}
                      </td>
                    </tr>
                    <tr>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr> 
          </table>
        </td>
      </tr>
      </React.Fragment>
        
      ))}
    </ComponentWrapper>
  )
}


export default News;