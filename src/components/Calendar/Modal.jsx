import { useState } from "react";

import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid2";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import { COUNTRIES, DATE_FORMAT } from "../../constants";
import { StyledMenuItem, AddNew } from "./styles";

const Modal = ({ state, dispatch }) => {
  const [selectedMonth, setSelectedMonth] = useState(dayjs());
  const [currentDay, setCurrentDay] = useState(dayjs());

  const getWeekIndexAndDayId = () => {
    const index = currentDay.week() - selectedMonth.startOf("month").week();
    const id = currentDay.format("YYYY-M-D");
    return { weekIndex: index, dayId: id };
  };
  const getCurrentEvents = () => {
    const currentWeek = state.data[getWeekIndexAndDayId().weekIndex];
    const id = getWeekIndexAndDayId().dayId;
    return currentWeek.find((day) => day.id === id);
  };

  const currentEvents = getCurrentEvents()?.holidays || [];

  const handleMonthChange = (newMonth) => {
    const year = newMonth.year();
    const month = newMonth.month();

    setCurrentDay(newMonth.clone().date(9));

    dispatch({
      type: "change-month",
      payload: { name: newMonth.format("MMMM"), year, month },
    });
    setSelectedMonth(newMonth);
  };

  const handleChangeDay = (newDay) => {
    setCurrentDay(newDay);
  };

  const handleChangeEvent = (e, id) => {
    const name = e.target.name;
    const value =
      name === "img"
        ? COUNTRIES.find((c) => c.value === e.target.value).image
        : e.target.value;

    dispatch({
      type: "change-holiday",
      payload: {
        ...getWeekIndexAndDayId(),
        holidayId: id,
        updatedHoliday: { [name]: value },
      },
    });
  };

  const handleDeleteEvent = (id) => {
    dispatch({
      type: "delete-holiday",
      payload: { ...getWeekIndexAndDayId(), holidayId: id },
    });
  };

  const handleAddHoliday = () => {
    const newHoliday = {
      id: +new Date(),
      img: "https://aspasionov.github.io/newspaper/flags/Ukraine.png",
      title: "January 7th - Orthodox Christmas",
    };

    dispatch({
      type: "add-holiday",
      payload: { ...getWeekIndexAndDayId(), newHoliday },
    });
  };

  return (
    <Box sx={{ p: 2 }}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
        <DatePicker
          label={"Choose the month"}
          views={["month"]}
          value={selectedMonth}
          onChange={handleMonthChange}
          slotProps={{
            textField: {
              size: "small",
              fullWidth: true,
            },
          }}
        />
        <StaticDatePicker
          sx={{ height: 230 }}
          onChange={handleChangeDay}
          value={selectedMonth}
          views={["day"]}
          slotProps={{
            calendarHeader: {
              sx: {
                display: "none",
              },
            },
            actionBar: {
              sx: {
                display: "none",
              },
            },
            toolbar: {
              sx: {
                display: "none",
              },
            },
          }}
        />
      </LocalizationProvider>
      {currentEvents.map((el) => (
        <Grid container spacing={2} sx={{ mt: 2 }} key={el.id}>
          <Grid item size={3}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Country</InputLabel>
              <Select
                value={COUNTRIES.find((c) => c.image === el.img)?.value || ""}
                label="Country"
                size="small"
                name="img"
                onChange={(e) => handleChangeEvent(e, el.id)}
              >
                {COUNTRIES.map((country) => (
                  <StyledMenuItem key={country.value} value={country.value}>
                    <img src={country.image} alt="" />
                    <span>{country.name}</span>
                  </StyledMenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item size={8}>
            <TextField
              value={el.title}
              size="small"
              label="Title"
              variant="outlined"
              name="title"
              fullWidth
              onChange={(e) => handleChangeEvent(e, el.id)}
            />
          </Grid>
          <Grid item size={1} sx={{ textAlign: "right" }}>
            <IconButton
              color="error"
              size="small"
              onClick={() => handleDeleteEvent(el.id)}
            >
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))}

      {currentEvents.length < 6 && (
        <AddNew onClick={handleAddHoliday}>
          <ControlPointIcon />
        </AddNew>
      )}
    </Box>
  );
};

export default Modal;
