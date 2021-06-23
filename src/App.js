import { useState, useEffect } from 'react';
import './App.css';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header/Header';
import CustomCalendar from './components/Calendar/Calendar';
import Table from './components/Tabel/MyTable';
import Button from './components/Button/Button';
import TableError from './components/Tabel/TableError';

function App() {
  const [data, setData] = useState({
    userId: null,
    calendarData: null,
    reservationData: [],
    tableData: null,
    tableError: null
  });

  useEffect(() => {
    const userId = window.location.href;

    setData(prevState => {
      return {
        ...prevState,
        userId
      }
    })
  },[]);

  const calendarHandler = (calendarData, tableData) => {
    setData(prevState => {
      return {
        ...prevState,
        calendarData,
        reservationData: [],
        tableData
      }
    });
  }

  const calendarPressInput = () => {
    setData(prevState => {
      return {
        ...prevState,
        calendarData: null,
        tableError: null
      }
    })
  }


  const tableHandler = reservatin => {
    setData(prevState => {
      return {
        ...prevState,
        reservationData: reservatin,
      }
    })
  }

  const tableErrorHandler = err => {
    setData(prevState => {
      return {
        ...prevState,
        tableError: err
      }
    })
  }

  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <CustomCalendar calendarHandler={calendarHandler} calendarPressInput={calendarPressInput} tableErrorHandler={tableErrorHandler}/>
      {data.calendarData !== null && <Table tableHandler={tableHandler} tableData={data.tableData}/>}
      {data.reservationData.length !== 0 && <Button reservationData={data.reservationData} /> }
      {/* {data.tableError !== null && <TableError error={data.tableError}/>} */}
    </div>
  );
}

export default App;
