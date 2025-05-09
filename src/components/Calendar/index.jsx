import React, { useReducer, useEffect } from "react";
import ComponentWrapper from "../ContentWrapper";
import dayjs from "dayjs";
import Modal from "./Modal";
import data from "../../data.json";
import { localStorageHandler, getMonthGrid } from "../../utils";
import { NEWSPAPER_KEY } from "../../constants";
import Day from "./Day";
import { IS1, IS2, IS3, IS4, IS5, IS6 } from "./styles";

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

const Employees = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem(NEWSPAPER_KEY));
    if (localData && localData?.calendar) {
      dispatch({ type: "set-data", payload: localData.calendar });
    }
  }, []);

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
          <table width="672px" cellspacing="0" cellpadding="2px" border="0">
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
    </ComponentWrapper>
  );
};

export default Employees;
