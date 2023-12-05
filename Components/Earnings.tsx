import localFont from "next/dist/compiled/@next/font/dist/local"
import styled from "styled-components"
import MobilePostCard from "./MobilePages/MobilePostCard"
import MobilePostCardContainer from "./MobilePages/MobilePostCard"
import LineChart from "./chart"
import Chart2 from "./practisechart"
import Graph from "./NewChart"
// import Chart from "./Chart"

let EarningWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 10px;
  width: 100%;
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.08);
`

const Container = styled.div`
  display: flex;
  padding: 32px 32px 28px 32px;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`
let TextWrapper = styled.div`
  color: #3a3a3a;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

let GraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  height: 108px;
`

const Container2 = styled.div`
  display: flex;
  padding: 0px 32px 32px 32px;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`
const TextWrapper2 = styled.div`
  color: #3a3a3a;
  text-align: center;
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  font-size: 2.625rem;
`

const Mobile_Product_name = styled.div`
  overflow: hidden;
  color: var(--Black, #3a3a3a);
  text-overflow: ellipsis;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px; /* 150% */
`

const MobilePostPriceTesxt = styled.div`
  color: #000;
  font-family: Strawford;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
const MobilePostDiv = styled.div`
  display: flex;
  height: 70px;
  padding: 10px 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`
const MobilePostCards = () => {
  return (
    <>
      <MobilePostDiv>
        <Mobile_Product_name>Sales earnings</Mobile_Product_name>
        <MobilePostPriceTesxt>SEK 6,625</MobilePostPriceTesxt>
      </MobilePostDiv>
    </>
  )
}
function EarningGraph() {
  return (
    <GraphWrapper>
      <Chart2 />
      {/* <Graph /> */}
    </GraphWrapper>
  )
}
export default function Earnings() {
  return (
    <EarningWrapper>
      <Container>
        <TextWrapper>Earnings</TextWrapper>
      </Container>
      <EarningGraph></EarningGraph>
      <Container2>
        <TextWrapper2>SEK 2,582</TextWrapper2>
      </Container2>
      <MobilePostCardContainer></MobilePostCardContainer>
    </EarningWrapper>
  )
}
