import React, { useReducer, useEffect } from 'react';
import ComponentWrapper from '../ContentWrapper';
import Modal from './Modal'
import data from '../../data.json'
import { localStorageHandler } from '../../utils';
import { Parser } from "html-to-react";
import { NEWSPAPER_KEY } from '../../constants';
import { IS1, IS2, IS3, IS4, IS5, IS6, IS7 } from './styles';

const defaultData = data.others;

const initialState = {
  text: '',
  items: defaultData.items
};


const reducer = (state, action) => {
  switch (action.type) {
    case 'title':
      localStorageHandler('others', {...state, text: action.payload})
      return {...state, text: action.payload};
      case 'subtitle':
        localStorageHandler('others', {...state, text: action.payload})
        return {...state, subtext: action.payload};
    case 'add-new':
      localStorageHandler('others', {...state, items: [...state.items, action.payload]})
      return {...state, items: [...state.items, action.payload]};
    case 'edit-item':
      const newItems = state.items.map(item => {
        if(item.id === action.payload.id) {
          return action.payload
        }
        return item
      })
      localStorageHandler('others', {...state, items: newItems})
      return {...state, items: newItems};
    case 'delete-item':
      const filterdItems = state.items.filter(item => item.id !== action.payload)
      localStorageHandler('others', {...state, items: filterdItems})
      return {...state, items: filterdItems};
      case 'set-items':
        return {...state, items: action.payload};
    default:
      return state;
  }
}

const Others = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const htmlToReactParser = new Parser();

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem(NEWSPAPER_KEY))
    if(localData && localData?.others) {
      const keysMap = {
        text: 'title',
        subtext: 'subtitle',
        items: 'set-items'
      }

      for (const key in keysMap) {
        if(localData.others[key]) {
            dispatch({type: keysMap[key], payload: localData.others[key]})
        }
      }
    }
  },[])

  return (
    <ComponentWrapper form={<Modal state={state} dispatch={dispatch}/>} id="others">
      <tr>
        <td>
          <table width="672px" style={IS1}>
            <tbody>
              <tr>
                <td style={IS2}>
                  <div className="heading" style={IS3}>
                    {state.text || defaultData.text}
                  </div>
                </td>
                <td className="subheading">{state.subtext || defaultData.subtext}</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>

      {state.items.map(item => (
        <tr key={item.id}>
          <td style={IS4}>
            <table width="632px" style={IS5}>
              <tbody>
                <tr>
                  <td rowspan="2"><img src={item.img} loading="lazy" width={96} height={105} style={IS6} alt="birdthay" /></td>
                </tr>
                <tr>
                  <td style={IS7}>
                    {htmlToReactParser.parse(item.html)}
                    </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      ))}
    </ComponentWrapper>
  )
}

export default Others