// // "@emotion/react": "latest",
// //     "@emotion/styled": "latest",
// //     "@mui/material": "latest",
// //     "@mui/styles": "5.14.18",
// //     "@mui/x-date-pickers": "latest",
// //     "@mui/x-date-pickers-pro": "latest",
// //     "@types/react": "latest",
// //     "@types/react-dom": "latest",
// //     "dayjs": "latest",
// //     "react": "latest",
// //     "react-dom": "latest",
// //     "styled-components": "6.1.1",
// //     "typescript": "latest"

// import * as React from "react"
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
// import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker"
// import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField"
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo"
// import { createTheme, ThemeProvider } from "@mui/material/styles"
// import dayjs from "dayjs"

// export default function MaterialUIDateRangePicker() {
//   const [selectedDateRange, setSelectedDateRange] = React.useState({
//     start: dayjs(),
//     end: dayjs(),
//   })

//   const handleShortcutClick = (shortcut: any) => {
//     const today = dayjs()

//     switch (shortcut) {
//       case "yesterday":
//         setSelectedDateRange({
//           start: today.subtract(1, "day"),
//           end: today.subtract(1, "day"),
//         })
//         break
//       case "lastWeek":
//         setSelectedDateRange({
//           start: today.subtract(1, "week").startOf("week"),
//           end: today.subtract(1, "week").endOf("week"),
//         })
//         break
//       case "thisWeek":
//         setSelectedDateRange({
//           start: today.startOf("week"),
//           end: today.endOf("week"),
//         })
//         break
//       case "lastMonth":
//         setSelectedDateRange({
//           start: today.subtract(1, "month").startOf("month"),
//           end: today.subtract(1, "month").endOf("month"),
//         })
//         break
//       default:
//         break
//     }
//   }

//   const handleDateRangeChange = (dateRange: any) => {
//     setSelectedDateRange({
//       start: dateRange.at(0),
//       end: dateRange.at(1),
//     })

//     // Log the selected date range to the console
//     console.log("Selected Date Range:", dateRange)
//   }

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer components={["SingleInputDateRangeField"]}>
//         <div style={{ display: "flex", gap: "10px" }}>
//           <button onClick={() => handleShortcutClick("yesterday")}>
//             Yesterday
//           </button>
//           <button onClick={() => handleShortcutClick("lastWeek")}>
//             Last Week
//           </button>
//           <button onClick={() => handleShortcutClick("thisWeek")}>
//             This Week
//           </button>
//           <button onClick={() => handleShortcutClick("lastMonth")}>
//             Last Month
//           </button>
//         </div>
//         <DateRangePicker
//           slots={{ field: SingleInputDateRangeField }}
//           onChange={handleDateRangeChange}
//           value={[selectedDateRange.start, selectedDateRange.end]}
//         />
//       </DemoContainer>
//     </LocalizationProvider>
//   )
// }
