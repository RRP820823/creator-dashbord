import styled from "styled-components"
import * as React from "react"
import { useContext } from "react"
import { ThemeContext, useGetTheme } from "../Components/DashBoardContext"
import DatePicker from "react-datepicker"
import {
  addMonths,
  startOfMonth,
  endOfMonth,
  addWeeks,
  startOfWeek,
  endOfWeek,
  subDays,
  format,
} from "date-fns"
import "react-datepicker/dist/react-datepicker.css"
import { useState } from "react"

import "react-datepicker/dist/react-datepicker.css"

const Container = styled.div<{ hide_On_Mobile: any }>`
  display: flex;
  padding-left: 0px;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  align-self: stretch;
  padding: 2px;

  flex-shrink: 0;

  @media (width < 576px) {
    overflow-x: auto;
    margin-left: 32px;
  }

  &.hide-on-mobile {
    @media (width < 576px) {
      display: none;
    }
  }
  /* hide_On_Mobile */
`

const CategoryWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-left: auto;
  @media (width < 576px) {
    flex-direction: row-reverse;
    gap: 10px;
  }
`

const Box = styled.button<{ currentSelected?: any; filterValue?: any }>`
  display: flex;
  height: 39px;
  width: 100px; /// added for making it have equla width
  padding: 0px 14px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 20px;
  border: 1px solid #ddd;
  border-radius: 20px;
  border: ${(props) =>
    props.filterValue === props.currentSelected
      ? "1px solid black"
      : "1px solid #ddd"};

  background-color: ${(props) =>
    props.filterValue === props.currentSelected ? "white" : "inherit"};
`

const DateInputField = styled(DatePicker)`
  display: flex;
  height: 39px;
  padding: 0px 10px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background-color: white;

  border-radius: 20px;
  /* border: 1px solid #3a3a3a; */

  &:focus {
    border: none;
    outline: none;
    opacity: 0.9;
    transform: scale(0.98);
  }

  color: #3a3a3a;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  //
`

const BoxTextWrapper = styled.div<{ filterValue: any; currentSelected: any }>`
  color: var(--mid-grey-inactive-text, #9d9d9d);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background-color: white;
`
export default function DateFilter({
  hide_On_Mobile,
}: {
  hide_On_Mobile?: boolean
}) {
  const today = new Date()
  const startLastMonthDate = startOfMonth(addMonths(today, -1))
  const endLastMonthDate = endOfMonth(addMonths(today, -1))

  const [startDate, setStartDate] = useState(startLastMonthDate)
  const [endDate, setEndDate] = useState(endLastMonthDate)
  const [currentSelected, setCurrentSelected] = React.useState(false)
  const [selectedFilter, setSelectedFilter] = React.useState("")

  // let { setSelectedDateCategory } = useGetTheme()

  function handelSelectedFilter(value: any) {
    setSelectedFilter(value)
    // setSelectedDateCategory(value)
  }
  const onChange = (dates: any) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }

  const selectLastMonth = () => {
    const today = new Date()
    const startLastMonthDate = startOfMonth(addMonths(today, -1))
    const endLastMonthDate: any = endOfMonth(addMonths(today, -1))
    setStartDate(startLastMonthDate)
    setEndDate(endLastMonthDate)
  }

  const selectLastWeek = () => {
    const today: any = new Date()
    const startLastWeekDate = startOfWeek(addWeeks(today, -1))
    const endLastWeekDate: any = endOfWeek(addWeeks(today, -1))
    setStartDate(startLastWeekDate)
    setEndDate(today)
  }

  const selectYesterday = () => {
    const today = new Date()
    const yesterday: any = subDays(today, 1)
    setStartDate(yesterday)
    setEndDate(yesterday)
  }

  function handelChecked(value: any) {
    setCurrentSelected(value)
  }
  return (
    <Container
      className={`${hide_On_Mobile ? " hide-on-mobile" : ""}`}
      hide_On_Mobile={hide_On_Mobile}
    >
      <CategoryWrapper>
        <>
          <Box
            filterValue="This week"
            currentSelected={currentSelected}
            onClick={() => {
              handelSelectedFilter("This week")
              handelChecked("This week")
            }}
          >
            <BoxTextWrapper
              filterValue="This week"
              currentSelected={currentSelected}
            >
              This week
            </BoxTextWrapper>
          </Box>
          <Box
            filterValue="Yesterday"
            currentSelected={currentSelected}
            onClick={() => {
              handelSelectedFilter("Yesterday")
              handelChecked("Yesterday")
              selectYesterday()
            }}
          >
            <BoxTextWrapper
              filterValue="This week"
              currentSelected={currentSelected}
            >
              Yesterday
            </BoxTextWrapper>
          </Box>
          <Box
            filterValue="Last week"
            currentSelected={currentSelected}
            onClick={() => {
              handelSelectedFilter("Last week")
              handelChecked("Last week")
              selectLastWeek()
            }}
          >
            <BoxTextWrapper
              filterValue="This week"
              currentSelected={currentSelected}
            >
              {" "}
              Last week
            </BoxTextWrapper>
          </Box>
          <Box
            filterValue="Last month"
            currentSelected={currentSelected}
            onClick={() => {
              handelSelectedFilter("Last month")
              handelChecked("Last month")
              selectLastMonth()
            }}
          >
            <BoxTextWrapper
              filterValue="This week"
              currentSelected={currentSelected}
            >
              Last month
            </BoxTextWrapper>
          </Box>
        </>
        <DateInputField
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          dateFormat="do MMM"
          placeholderText={`${
            startDate ? format(startDate, "do MMM") : "Select start date"
          } - ${endDate ? format(endDate, "do MMM") : "Select end date"}`}
        />
      </CategoryWrapper>
    </Container>
  )
}
