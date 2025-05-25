import React, { useReducer, useEffect } from "react";
import ComponentWrapper from "../ContentWrapper";
import dayjs from "dayjs";
import Modal from "./Modal";
import data from "../../data.json";
import { localStorageHandler, getMonthGrid } from "../../utils";
import { NEWSPAPER_KEY } from "../../constants";
import Day from "./Day";
import {
  IS1,
  IS2,
  IS3,
  IS4,
  IS5,
  IS6,
  IS16,
  IS17,
  IS18,
  IS19,
  IS20,
  IS21,
  IS22,
  IS23,
  IS24,
  IS25,
  IS26,
  IS27,
} from "./styles";

const defaultData = data.calendar;

const month = dayjs().format("MMMM");

data.calendar.month = month;
data.calendar.data = getMonthGrid(dayjs().year(), dayjs().month() + 1);

const initialState = {
  month: defaultData.month,
  data: defaultData.data,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "set-data":
      return { ...state, ...action.payload };

    case "change-month":
      const data = getMonthGrid(action.payload.year, action.payload.month + 1);
      localStorageHandler("calendar", {
        ...state,
        month: action.payload.name,
        data,
      });
      return { ...state, month: action.payload.name, data };

    case "add-holiday": {
      const { weekIndex, dayId, newHoliday } = action.payload;
      const newData = state.data.map((week, index) => {
        if (index === weekIndex) {
          const newWeek = week.map((day) => {
            if (day.id === dayId) {
              return { ...day, holidays: [...day.holidays, newHoliday] };
            }
            return day;
          });
          return newWeek;
        }
        return week;
      });

      localStorageHandler("calendar", {
        ...state,
        data: newData,
      });

      return { ...state, data: newData };
    }

    case "change-holiday": {
      const { weekIndex, dayId, holidayId, updatedHoliday } = action.payload;
      const newData = state.data.map((week, index) => {
        if (index === weekIndex) {
          const newWeek = week.map((day) => {
            if (day.id === dayId) {
              return {
                ...day,
                holidays: day.holidays.map((holiday) => {
                  if (holiday.id === holidayId) {
                    return { ...holiday, ...updatedHoliday };
                  }
                  return holiday;
                }),
              };
            }
            return day;
          });
          return newWeek;
        }
        return week;
      });
      localStorageHandler("calendar", {
        ...state,
        data: newData,
      });
      return { ...state, data: newData };
    }

    case "delete-holiday": {
      const { weekIndex, dayId, holidayId } = action.payload;
      const newData = state.data.map((week, index) => {
        if (index === weekIndex) {
          const newWeek = week.map((day) => {
            if (day.id === dayId) {
              return {
                ...day,
                holidays: day.holidays.filter(
                  (holiday) => holiday.id !== holidayId
                ),
              };
            }
            return day;
          });
          return newWeek;
        }
        return week;
      });
      localStorageHandler("calendar", {
        ...state,
        data: newData,
      });
      return { ...state, data: newData };
    }

    default:
      return state;
  }
};

const Calendar = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem(NEWSPAPER_KEY));
    if (localData && localData?.calendar) {
      dispatch({ type: "set-data", payload: localData.calendar });
    }
  }, []);

  const allHolidays = state.data.reduce((parentAcc, week) => {
    return {
      ...parentAcc,
      ...week.reduce((acc, day) => {
        if (day.holidays?.length && day.id) {
          const transformedHolidays = day.holidays.map((holiday) => {
            const { img, ...rest } = holiday;
            return {
              ...rest,
              flags: [img],
            };
          });
          return {
            ...acc,
            [day.id]: transformedHolidays,
          };
        } else {
          return acc;
        }
      }, {}),
    };
  }, {});

  for (const key in allHolidays) {
    const groppedHolidays = allHolidays[key].reduce((acc, holiday) => {
      const currentEl = acc.find((el) => el.title === holiday.title);
      if (currentEl) {
        currentEl.flags.push(...holiday.flags);
        return [...acc.filter((el) => el.id !== currentEl.id), currentEl];
      } else {
        return [...acc, holiday];
      }
    }, []);
    allHolidays[key] = groppedHolidays;
  }

  const firstIndex = Math.ceil(Object.keys(allHolidays).length / 2);
  return (
    <ComponentWrapper
      form={<Modal state={state} dispatch={dispatch} />}
      id="calendar"
    >
      <tr>
        <td>
          <table width="672px" cellSpacing="0" cellPadding="2px" border="0">
            <tr>
              <td style={IS1}>
                <b style={IS2}>Holidays in {state.month}</b>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <tr align="center">
        <td style={IS3}>
          <table width="672px" cellSpacing="0" cellPadding="2px" border="0">
            <thead style={IS4}>
              <tr style={IS5}>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
                <th>Sun</th>
              </tr>
            </thead>
            <tbody>
              {state.data.map((week, index) => (
                <tr style={IS6} key={index}>
                  {week.map((day, index) => (
                    <Day key={index} day={day} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </td>
      </tr>
      <tr align="center">
        <td style={IS16}>
          <table
            width="672px"
            border={0}
            cellPadding="0px"
            cellSpacing={0}
            style={IS17}
            cols={2}
          >
            <tbody>
              <tr>
                <td colSpan={2} style={IS18}>
                  Public Holidays
                </td>
              </tr>
              <tr valign="top" style={IS27}>
                <td style={IS19} width="50%">
                  <table
                    border="0"
                    cellPadding="2px"
                    cellSpacing="0"
                    style={IS20}
                  >
                    {Object.entries(allHolidays).map((el, idx) => {
                      if (idx + 1 > firstIndex) {
                        return null;
                      }

                      return el[1].map((h, i) => {
                        if (h.flags.length > 1) {
                          return (
                            <tr valign="top" style={IS26}>
                              <td style={IS21}>
                                {i === 0 && dayjs(el[0]).format("M.DD")}
                              </td>
                              <td colSpan="2">
                                <table
                                  cellPadding="0"
                                  cellSpacing="0"
                                  style={IS22}
                                >
                                  <tr>
                                    {h.flags.map((flag, index) => (
                                      <td
                                        valign="top"
                                        key={flag}
                                        style={{
                                          paddingLeft: index === 0 ? 0 : 2,
                                        }}
                                      >
                                        <img
                                          className="flag"
                                          width="14px"
                                          height="10px"
                                          src={flag}
                                          alt=""
                                        />
                                      </td>
                                    ))}
                                    <td style={IS23}>{h.title}</td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          );
                        }
                        return (
                          <tr valign="top" style={IS26}>
                            <td style={IS21}>
                              {i === 0 && dayjs(el[0]).format("M.DD")}
                            </td>
                            <td colSpan="2">
                              <table
                                cellPadding="0"
                                cellSpacing="0"
                                style={IS22}
                              >
                                <tr>
                                  <td valign="top" key={h.flags[0]}>
                                    <img
                                      className="flag"
                                      width={14}
                                      height={10}
                                      src={h.flags[0]}
                                      alt=""
                                    />
                                  </td>
                                  <td style={IS24}>{h.title}</td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        );
                      });
                    })}
                  </table>
                </td>
                <td style={IS25} width="50%">
                  <table border="0" cellPadding="2px" cellSpacing="0">
                    {Object.entries(allHolidays).map((el, idx) => {
                      if (idx + 1 <= firstIndex) {
                        return null;
                      }

                      return el[1].map((h, i) => {
                        if (h.flags.length > 1) {
                          return (
                            <tr valign="top" style={IS26}>
                              <td style={IS21}>
                                {i === 0 && dayjs(el[0]).format("M.DD")}
                              </td>
                              <td colSpan="2">
                                <table
                                  cellPadding="0"
                                  cellSpacing="0"
                                  style={IS22}
                                >
                                  <tr>
                                    {h.flags.map((flag, index) => (
                                      <td
                                        valign="top"
                                        key={flag}
                                        style={{
                                          paddingLeft: index === 0 ? 0 : 2,
                                        }}
                                      >
                                        <img
                                          className="flag"
                                          width="14px"
                                          height="10px"
                                          src={flag}
                                          alt=""
                                        />
                                      </td>
                                    ))}
                                    <td style={IS23}>{h.title}</td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          );
                        }
                        return (
                          <tr valign="top" style={IS26}>
                            <td style={IS21}>
                              {i === 0 && dayjs(el[0]).format("M.DD")}
                            </td>
                            <td colSpan="2">
                              <table
                                cellPadding="0"
                                cellSpacing="0"
                                style={IS22}
                              >
                                <tr>
                                  <td valign="top" key={h.flags[0]}>
                                    <img
                                      className="flag"
                                      width={14}
                                      height={10}
                                      src={h.flags[0]}
                                      alt=""
                                    />
                                  </td>
                                  <td style={IS24}>{h.title}</td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        );
                      });
                    })}
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </ComponentWrapper>
  );
};

export default Calendar;
