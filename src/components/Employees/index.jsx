import React, { useReducer, useEffect } from 'react';
import ComponentWrapper from '../ContentWrapper';
import Modal from './Modal'
import data from '../../data.json'
import { localStorageHandler } from '../../utils';
import { NEWSPAPER_KEY } from '../../constants';
import { IS1, IS2, IS3, IS4, IS5, IS6, IS7, IS8, IS9, IS10, IS11, IS12, IS13 } from './styles';

const defaultData = data.employees;

const initialState = {
  text: '',
  items: defaultData.items
};


const reducer = (state, action) => {
  switch (action.type) {
    case 'title':
      localStorageHandler('employees', {...state, text: action.payload})
      return {...state, text: action.payload};
    case 'add-new':
      localStorageHandler('employees', {...state, items: [...state.items, action.payload]})
      return {...state, items: [...state.items, action.payload]};
    case 'edit-employee':
      const newEmployees = state.items.map(item => {
        if(item.id === action.payload.id) {
          return action.payload
        }
        return item
      })
      localStorageHandler('employees', {...state, items: newEmployees})
      return {...state, items: newEmployees};
    case 'delete-employee':
      const filterdEmployees = state.items.filter(item => item.id !== action.payload)
      localStorageHandler('employees', {...state, items: filterdEmployees})
      return {...state, items: filterdEmployees};
      case 'set-employees':
        return {...state, items: action.payload};
    default:
      return state;
  }
}

const Employees = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem(NEWSPAPER_KEY))
    if(localData && localData?.employees) {
      const keysMap = {
        text: 'title',
        items: 'set-employees'
      }

      for (const key in keysMap) {
        if(localData.employees[key]) {
            dispatch({type: keysMap[key], payload: localData.employees[key]})
        }
      }
    }
  },[])


  return (
    <ComponentWrapper form={<Modal state={state} dispatch={dispatch}/>} id="employees">
      <tr>
        <td style={IS1}>
          <table style={IS2}>
            <tbody>
              <tr>
                <td style={IS3}>
                  <div className="heading" style={IS4}>{state.text || defaultData.text}</div>
                </td>
                <td className="subheading"> </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>

      <tr>
  <td>
    <table cellSpacing="0" cellPadding="0">
      {state.items.map(item => (
        <tr>
          <td style={IS5}>
            <table width="632px" style={IS6} cellSpacing="0" cellPadding="0">
              <tbody>
                <tr>
                  <td valign="top" rowSpan="3">
                    <img src={item.img} width="126" height="163" style={IS7} alt={item.name} />
                  </td>
                  <td style={IS8}>
                    <p style={IS9}>{item.name}</p>
                  </td>
                </tr>
                <tr>
                  <td style={IS10}>
                    <p style={IS11}>{item.position}</p>
                  </td>
                </tr>
                <tr>
                  <td style={IS12}>
                    <span style={IS13}>Про себе:</span> {item.about}
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      ))}
    </table>
  </td>
</tr>
    </ComponentWrapper>
  )
}

export default Employees