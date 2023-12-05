import React, { useState } from "react"
import styled from "styled-components"
import goForward from "../public/Images/goforward.png"
const Date_data = ["This week", "Yesterday", "Last week", "Last month"]
import Image from "next/image"
import Earnings from "./Earnings"

import DatePicker from "react-datepicker"
import DateComponent from "./Date"

let CategoryHashtagsWrapper = styled.div`
  display: flex;
  height: 39px;
  padding: 0px 14px;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
  width: 100%;
  /* border: 1px solid #ddd; */
  align-items: flex-end;
`

let CategoryHastags = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`

const DivWrapper = styled.button`
  align-items: center;
  border: 1px solid;
  border-color: #c1a3a3;
  border-radius: 20px;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 5px;
  height: 39px;
  justify-content: center;
  padding: 0px 14px;
  position: relative;
  &:hover {
    background-color: yellow;
  }
`

const TextWrapper = styled.div`
  color: var(--mid-grey-inactive-text, #9d9d9d);
  font-family: Strawford;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

const CalenderTextWrapper = styled.div`
  color: #3a3a3a;
  font-family: Strawford;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
//foo

const CalenderWrapper = styled.div`
  display: flex;
  height: 39px;
  padding: 0px 10px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 20px;
  border: 1px solid #3a3a3a;
`

const Calender = () => {
  return (
    <CalenderWrapper>
      <CalenderTextWrapper>
        {/* 1st Aug - 31st Aug {() => +DateComponent()} */}
        <DateComponent></DateComponent>
      </CalenderTextWrapper>
      <Image src={goForward} alt="goForward" />
    </CalenderWrapper>
  )
}

const Text = ({ value }: { value: string }) => {
  return <TextWrapper>{value}</TextWrapper>
}
export default function DateCategory() {
  const [date, setDate] = React.useState()
  return (
    <>
      <CategoryHashtagsWrapper>
        <CategoryHastags>
          {Date_data.map((i) => (
            <DivWrapper key={i}>
              <Text key={i} value={i} />
            </DivWrapper>
          ))}
          <Calender></Calender>
        </CategoryHastags>
      </CategoryHashtagsWrapper>
    </>
  )
}
