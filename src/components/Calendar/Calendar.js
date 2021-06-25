import React, { useState } from 'react';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import './Calendar.css';
import fetchDataTable from '../data/fetchDataTable';

const CustomCalendar = props => {
  const [selectedDay, setSelectedDay] = useState();
  const { calendarHandler, calendarPressInput, tableErrorHandler } = props;

  const onChangeHandler = async (value) => {
    setSelectedDay(value);
    let month = value.month;
    if (value.month <= 9) {
      month = `0${month}`;
    }
    const day = `?q=${value.year}-${month}-${value.day}`;

    try {
      const tableData = await fetchDataTable(day);
      calendarHandler(value, tableData);
    } catch (error) {
      tableErrorHandler(error.message)
    }
  }

  const renderCustomInput = ({ ref }) => (
    <input
      onClick={() => calendarPressInput()}
      readOnly
      ref={ref}
      placeholder="Виберіть дату бронювання"
      size={25}
      value={selectedDay ? `✅ ${selectedDay.year}/${selectedDay.month}/${selectedDay.day} ` : ''}
      style={{
        marginTop: '5.5rem',
        textAlign: 'center',
        padding: '1rem 1rem',
        fontWeight: 'bold',
        fontSize: '1rem',
        border: '1px solid white',
        borderRadius: '100px',
        color: 'white',
        outline: 'none',
        cursor: 'pointer',
        backdropFilter: "blur(10px",
        backgroundColor: 'rgba(0,0,0,0.3)',
      }}
      className="my-custom-input-class"
    />)
  return (
    <DatePicker
      value={selectedDay}
      onChange={value => onChangeHandler(value)}
      renderInput={renderCustomInput}
      shouldHighlightWeekends
    />
  );
}

export default CustomCalendar;