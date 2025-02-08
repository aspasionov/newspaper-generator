import React, { useReducer, useEffect } from 'react';
import ComponentWrapper from '../ContentWrapper';
import Modal from './Modal'
import data from '../../data.json'
import { localStorageHandler } from '../../utils';
import { NEWSPAPER_KEY } from '../../constants';
import { IS1, IS2, IS3, IS4, IS5, IS6, IS7, IS8, IS9, IS10, IS11, IS12, IS13, IS14, IS15, IS16, IS17 } from './styles';

const defaultData = data.events;

const initialState = {
  text: '',
  items: defaultData.items
};


const reducer = (state, action) => {
  switch (action.type) {
    case 'title':
      localStorageHandler('events', {...state, text: action.payload})
      return {...state, text: action.payload};

    case 'sub-title':
      localStorageHandler('events', {...state, subtext: action.payload})
      return {...state, subtext: action.payload};
    case 'add-new':
      localStorageHandler('events', {...state, items: [...state.items, action.payload]})
      return {...state, items: [...state.items, action.payload]};
    case 'edit-row':
      const arr = state.items
      const subArr = arr[action.payload.parentIndex]
      subArr[action.payload.index] = action.payload.obj
      localStorageHandler('events', {...state, items: arr})
      return {...state, items: arr};

    case 'delete-item':
      const filterdItems = state.items.filter((_, index) => index !== action.payload)
      localStorageHandler('events', {...state, items: filterdItems})
      return {...state, items: filterdItems};
    case 'set-items':
      return {...state, items: action.payload};
    default:
      return state;
  }
}

const Employees = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem(NEWSPAPER_KEY))
    if(localData && localData?.events) {
      const keysMap = {
        text: 'title',
        subtext: 'sub-title',
        items: 'set-items'
      }

      for (const key in keysMap) {
        if(localData.events[key]) {
            dispatch({type: keysMap[key], payload: localData.events[key]})
        }
      }
    }
  },[])

  return (
    <ComponentWrapper form={<Modal state={state} dispatch={dispatch}/>} id="events">
        <tr>
          <td>
            <table style={IS1}>
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

        <tr>
          <td style={IS4}>
            <table width="632px" style={IS5} border="0" cellSpacing="0" cellPadding="0">
              <tbody>
                
                  {state.items.map(([firstItem, secondItem], index) => (
                    <tr style={index !== 0 ? IS17 : IS6} key={firstItem.id}>
                    <td style={IS7} >
                    <a href={firstItem.url} target="_blank" rel="noopener noreferrer" style={IS8}>
                      <img src={firstItem.img} alt="" width="307" height="170" loading="lazy" style={IS9} />
                      <table border="0" cellSpacing="0" cellPadding="0" style={IS10} width="307">
                        <tbody>
                          <tr>
                            <td style={IS11}>
                              <p style={IS12}><strong>{firstItem.title}</strong></p>
                              <p style={IS13}>{firstItem.time}</p>
                              <p style={IS14}>{firstItem.place}</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </a>
                  </td>
                  <td>
                  <a href={secondItem.url} target="_blank" rel="noopener noreferrer" style={IS15}>
                    <img src={secondItem.img} loading="lazy" alt="" width="307" height="170" style={IS16} />
                    <table border="0" cellSpacing="0" cellPadding="0" style={IS10} width="307">
                      <tbody>
                        <tr>
                          <td style={IS11}>
                            <p style={IS12}><strong>{secondItem.title}</strong></p>
                            <p style={IS13}>{secondItem.time}</p>
                            <p style={IS14}>{secondItem.place}</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </a>
                </td>
                </tr>
                  ))}
                {/* <tr style={IS17}>
                  <td style={{ paddingRight: '10px' }}>
                    <a href="https://dou.ua/calendar/51330/" target="_blank" rel="noopener noreferrer" style={{ paddingTop: '15px', marginRight: '10px', textDecoration: 'none', display: 'block', cursor: 'pointer' }}>
                      <img src="https://s.dou.ua/CACHE/images/img/events/1200_x_630_px_1/ca5427fc135b9288df61d5e7a2297d30.png" alt="" width="307" height="170" loading="lazy" style={{ borderRadius: '4px 4px 0 0', objectPosition: 'middle', objectFit: 'cover', display: 'block' }} />
                      <table border="0" cellSpacing="0" cellPadding="0" style={{ margin: '0', padding: '0' }} width="307">
                        <tbody>
                          <tr>
                            <td style={{ padding: '10px', borderRadius: '0px 0 4px 4px', backgroundColor: '#f3f3f3' }}>
                              <p style={{ fontSize: '16px', fontWeight: 600, lineHeight: '1.38', color: '#171821', margin: '0 0 3px' }}>Всеукраїнська дизайн-конференція Дизаріум у Львові</p>
                              <p style={{ color: '#54555e', fontSize: '14px', lineHeight: '1.86', margin: '0px' }}>5 Жовтня</p>
                              <p style={{ color: '#000', fontSize: '12px', lineHeight: '1', margin: '0px' }}>Львів, online</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </a>
                  </td>
                  <td>
                    <a href="https://dou.ua/calendar/50224/" target="_blank" rel="noopener noreferrer" style={{ paddingTop: '15px', marginRight: '10px', textDecoration: 'none', cursor: 'pointer', display: 'block' }}>
                      <img src="https://s.dou.ua/CACHE/images/img/events/event-20242/55d8d0d2061a4d052e7b35bf2b003d27.png" loading="lazy" alt="" width="307" height="170" style={{ borderRadius: '4px 4px 0 0', objectFit: 'cover', display: 'block' }} />
                      <table border="0" cellSpacing="0" cellPadding="0" style={{ margin: '0', padding: '0' }} width="307">
                        <tbody>
                          <tr>
                            <td style={{ padding: '10px', borderRadius: '0px 0 4px 4px', backgroundColor: '#f3f3f3' }}>
                              <p style={{ fontSize: '16px', fontWeight: 600, lineHeight: '1.38', color: '#171821', margin: '0 0 3px' }}><strong>Online QADay 2024 #2</strong> <br /><br /></p>
                              <p style={{ color: '#54555e', fontSize: '14px', lineHeight: '1.86', margin: '0px' }}>19 Жовтня</p>
                              <p style={{ color: '#000', fontSize: '12px', lineHeight: '1', margin: '0px' }}>online</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </a>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </td>
        </tr>
    </ComponentWrapper>
  )
}

export default Employees