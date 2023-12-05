// import { useState } from "react"
// import DatePicker from "react-datepicker"
// import "react-datepicker/dist/react-datepicker.css"
// import styled from "styled-components"
// import {
//   addMonths,
//   startOfMonth,
//   endOfMonth,
//   addWeeks,
//   startOfWeek,
//   endOfWeek,
//   subDays,
// } from "date-fns"

// const DateInputField = styled(DatePicker)`
//   display: flex;
//   height: 39px;
//   padding: 0px 10px;
//   justify-content: center;
//   align-items: center;
//   gap: 5px;

//   border-radius: 20px;
//   border: 1px solid #3a3a3a;

//   &:focus {
//     border: none;
//     outline: none;
//     opacity: 0.9;
//     transform: scale(0.98);
//   }
// `

// function CustomDateRangePicker() {
//   const [startDate, setStartDate] = useState(new Date())
//   const [endDate, setEndDate] = useState(null)

//   const onChange = (dates) => {
//     const [start, end] = dates
//     setStartDate(start)
//     setEndDate(end)
//   }

//   const handleDateChange = (date) => {
//     setStartDate(date)
//     setEndDate(null)
//   }

//   const selectLastMonth = () => {
//     const today = new Date()
//     const startLastMonthDate = startOfMonth(addMonths(today, -1))
//     const endLastMonthDate = endOfMonth(addMonths(today, -1))
//     setStartDate(startLastMonthDate)
//     setEndDate(endLastMonthDate)
//   }

//   const selectLastWeek = () => {
//     const today = new Date()
//     const startLastWeekDate = startOfWeek(addWeeks(today, -1))
//     const endLastWeekDate = endOfWeek(addWeeks(today, -1))
//     setStartDate(startLastWeekDate)
//     setEndDate(today)
//   }

//   const selectYesterday = () => {
//     const today = new Date()
//     const yesterday = subDays(today, 1)
//     setStartDate(yesterday)
//     setEndDate(yesterday)
//   }

//   return (
//     <>
//       {/* <DatePicker
//         selected={startDate}
//         onChange={onChange}
//         startDate={startDate}
//         endDate={endDate}
//         selectsRange
//         dateFormat="MM/dd"
//       /> */}
//       <DateInputField
//         selected={startDate}
//         onChange={onChange}
//         startDate={startDate}
//         endDate={endDate}
//         selectsRange
//         dateFormat="MM/dd"
//         placeholderText="Select date range"
//       />
//       <button onClick={selectLastMonth}>Last Month</button>
//       <button onClick={selectLastWeek}>Last Week</button>
//       <button onClick={selectYesterday}>Yesterday</button>
//     </>
//   )
// }

// export default CustomDateRangePicker
