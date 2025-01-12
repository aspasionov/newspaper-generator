import { useReducer, useEffect, useState } from 'react';
import ComponentWrapper from '../ContentWrapper';
import Modal from './Modal'
import data from '../../data.json'
import { urlToSrc, localStorageHandler } from '../../utils'
import { NEWSPAPER_KEY } from '../../constants'
import { IS1, IS2, IS3, IS4, IS5, IS6, IS7, IS8, IS9, IS10, IS11, IS12, IS13, IS14, IS15, IS16, IS17, IS18, IS19, IS20, IS21, IS22 } from './styles';

const defaultData = data.vacancies;

const initialState = {
  text: '',
  subtext: '',
  positions: [{
    id: 1,
    img: urlToSrc('14_LCv-tVtkmVyem6Y1I5uUA6yAjw9RD3'),
    title: 'Senior Technical Support Engineer',
    experience: '5',
    location: 'Poland',
    link: 'https://strongsd.com/careers/51/senior-technical-support-engineer'
  }]
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'title':
      localStorageHandler('vacancies', {...state, text: action.payload})
      return {...state, text: action.payload};
    case 'subtext':
      localStorageHandler('vacancies', {...state, subtext: action.payload})
      return {...state, subtext: action.payload};
    case 'add-new':
      localStorageHandler('vacancies', {...state, positions: [...state.positions, action.payload]})
      return {...state, positions: [...state.positions, action.payload]};
    case 'edit-vacancy':
      const newPositions = state.positions.map(position => {
        if(position.id === action.payload.id) {
          return action.payload
        }
        return position
      })
      localStorageHandler('vacancies', {...state, positions: newPositions})
      return {...state, positions: newPositions};
    case 'delete-vacancy':
      const filterdPositions = state.positions.filter(position => position.id !== action.payload)
      localStorageHandler('vacancies', {...state, positions: filterdPositions})
      return {...state, positions: filterdPositions};
      case 'set-vacancies':
        return {...state, positions: action.payload};
    default:
      return state;
  }
}

const Vacancies = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [quote, setQuote] = useState("")

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem(NEWSPAPER_KEY))
    if(localData && localData?.vacancies) {
      const keysMap = {
        text: 'title',
        subtext: 'subtext',
        positions: 'set-vacancies'
      }

      for (const key in keysMap) {
        if(localData.vacancies[key]) {
          if(localData.vacancies[key]) {
            dispatch({type: keysMap[key], payload: localData.vacancies[key]})
          }
        }
      }
    }
  },[])

    return (
      <ComponentWrapper form={<Modal state={state} dispatch={dispatch} setQuote={setQuote} quote={quote}/>} id="vacancies">
            <tr>
              <td width="632px" style={IS1}>
                <table width="672px" style={IS2} border="0" cellPadding="0" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td style={IS3}>
                        <div className="heading" style={IS4}>{state.text || defaultData.text}</div>
                      </td>
                      <td className="subheading">{state.subtext || defaultData.subtext}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            {state.positions.map((position, index) => (
              <tr key={position.id}>
              <td width="632px" style={IS5}>
                <table border="0" cellPadding="0" cellSpacing="0">
                  <tr>
                    <td style={IS6}>
                      <table border="0" cellPadding="0" cellSpacing="0" width="632px" style={IS7}>
                        <tbody>
                          <tr>
                            <td style={IS8}>
                              <table border="0" cellPadding="0" cellSpacing="0" width="100%" style={{margin: 0}}>
                                <tbody>
                                  <tr>
                                    <td rowSpan="2" width="65" height="65px" style={IS9}>
                                      <img src={position.img} width="40" alt="elixir" style={IS10} />
                                    </td>
                                    <td style={IS11}>{position.title}</td>
                                  </tr>
                                  <tr>
                                    <td style={IS12}>
                                      <table style={IS13}>
                                        <tbody>
                                          <tr>
                                            <td width="90" style={IS14}>Full-time</td>
                                            <td width="276" style={IS15}>
                                              <table border="0" cellSpacing="0" cellPadding="0" style={IS16}>
                                                <tr valign="middle">
                                                  <td style={IS17}><img src={urlToSrc('1J0RgVnkRZes6i8L1Ax2X6zKOSym0dAfo')} alt="map" style={IS18} /></td>
                                                  <td>{position.location}</td>
                                                </tr>
                                              </table>
                                            </td>
                                            <td style={IS19}>
                                              <table border="0" cellSpacing="0" cellPadding="0" style={IS16}>
                                                <tr valign="middle">
                                                  <td style={IS17}><img src={urlToSrc('1A14rizn8p-z8JbIQcLlBm78G_xa6P7Ih')} alt="calendar" style={IS18} /></td>
                                                  <td>{position.experience}+ Years experience</td>
                                                </tr>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table border="0" cellPadding="0" cellSpacing="0" width="100%" style={IS20}>
                                <tbody>
                                  <tr>
                                    <td />
                                    <td style={IS21}>
                                      <a href={position.link} target="_blank" style={IS22}>Детальніше про вакансію ▸</a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            ))}
      </ComponentWrapper>
    );
}

export default Vacancies;