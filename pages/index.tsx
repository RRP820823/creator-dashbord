import styled from "styled-components"
import Earnings from "@/Components/Earnings"

import TopProductContainer from "@/Components/TopProductContainer"
import TopPostContainer from "@/Components/TopPostContainer"
import TopStoriesContainer from "@/Components/TopStoriesContainer"

import DateFilter from "@/Components/DateFilter"
import TopNavigationContainer from "@/Components/MobilePages/Mobile_Top_Container"
import MobilePostCard from "@/Components/MobilePages/MobilePostCard"
import LineChart from "@/Components/chart"
import DashBoardContext from "@/Components/DashBoardContext"

const Container = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  fill: var(--White, #fff);
  backdrop-filter: blur(43.5px);
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0);
  flex-direction: column;
  flex-grow: 1 0 0;
  /* border: 1px solid black; */
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 40px;
  margin: 0 auto;
  width: 80%;
  /* border: 1px solid black; */

  @media (width < 576px) {
    width: 100%;
    gap: 32px;
  }
`

let Box1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 31px;
  align-self: stretch;
`

const Box2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 19px;
  flex-wrap: wrap;
  @media (width < 576px) {
    flex-wrap: wrap;
    gap: 32px;
  }
`

export default function Home() {
  return (
    <DashBoardContext>
      <Container>
        <TopNavigationContainer />
        <Wrapper>
          <Box1>
            <DateFilter hide_On_Mobile={true}></DateFilter>
            <Earnings></Earnings>
          </Box1>
          <Box2>
            <TopProductContainer />
            <TopPostContainer />
            <TopStoriesContainer />
          </Box2>
        </Wrapper>
      </Container>
    </DashBoardContext>
  )
}
