import { NEWSPAPER_KEY } from "../constants";
import dayjs from "dayjs";
import "dayjs/locale/en-gb";
dayjs.locale("en-gb");

const urlToSrc = (id) => {
  return `https://drive.google.com/thumbnail?id=${id}`;
};

const localStorageHandler = (key, obj) => {
  const prevData = JSON.parse(localStorage.getItem(NEWSPAPER_KEY));
  localStorage.setItem(
    NEWSPAPER_KEY,
    JSON.stringify({ ...prevData, ...{ [key]: obj } })
  );
};

function getMonthGrid(year, month) {
  const firstDay = dayjs(`${year}-${month}-01`);
  const lastDay = firstDay.endOf("month");

  const startDayOfWeek = (firstDay.day() + 6) % 7; // Convert Sunday (0) to Monday-starting (6 → 0)
  const daysInMonth = lastDay.date();

  // Previous month's trailing days
  const prevMonthDays = startDayOfWeek; // Number of days from previous month
  const prevMonth = firstDay.subtract(1, "month");
  const prevMonthLastDate = prevMonth.endOf("month").date();
  const prevMonthDaysArray = Array.from({ length: prevMonthDays }, (_, i) => ({
    date: prevMonthLastDate - prevMonthDays + i + 1,
    month: prevMonth.month() + 1,
    year: prevMonth.year(),
    outside: true,
  }));

  // Current month days
  const currentMonthDaysArray = Array.from({ length: daysInMonth }, (_, i) => ({
    id: `${year}-${month}-${i + 1}`,
    date: i + 1,
    month: month,
    year: year,
    outside: false,
    holidays: [],
  }));

  // Next month's leading days
  const totalDays = prevMonthDays + daysInMonth;
  const nextMonthDays = 42 - totalDays; // Ensure exactly 6 weeks (42 days)
  const nextMonth = firstDay.add(1, "month");
  const nextMonthDaysArray = Array.from({ length: nextMonthDays }, (_, i) => ({
    date: i + 1,
    month: nextMonth.month() + 1,
    year: nextMonth.year(),
    outside: true,
  }));

  // Combine all days into a single array
  const fullGrid = [
    ...prevMonthDaysArray,
    ...currentMonthDaysArray,
    ...nextMonthDaysArray,
  ];

  // Split into weeks (arrays of 7 days each)
  const weeks = Array.from({ length: 6 }, (_, i) =>
    fullGrid.slice(i * 7, i * 7 + 7)
  );

  return weeks;
}

export { urlToSrc, localStorageHandler, getMonthGrid };
