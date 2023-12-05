import * as React from "react"
import styled from "styled-components"

export default function SingleProduct() {
  return (
    <Products>
      <Div>
        <Div2>
          <Img loading="lazy" srcSet="..." />
        </Div2>
        <Div3>
          <Box>
            <Div4>Nioxin Thickening Gel 140ml</Div4>
            <Div5>
              <Div6>2 SEK / Click</Div6>
              <Div7>Pricerunner</Div7>
            </Div5>
          </Box>
          <Div8>
            <Div9>SEK 625</Div9>
            <Div10>25 Clicks</Div10>
          </Div8>
        </Div3>
      </Div>
    </Products>
  )
}

const Products = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`
const Div = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
  max-width: 307px;
  gap: 10px;
  border: 1px solid black;
`

const Div2 = styled.div`
  justify-content: center;
  align-items: center;
  background-color: #fff;
  display: flex;
  aspect-ratio: 0.625;
  flex-direction: column;
  padding: 6px 0;
`

const Img = styled.img`
  aspect-ratio: 0.81;
  object-fit: contain;
  object-position: center;
  width: 30px;
  overflow: hidden;
`

const Div3 = styled.div`
  justify-content: space-between;
  display: flex;
  gap: 16px;
  padding: 4px 0;
`

const Box = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
`

const Div4 = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: var(--Black, #3a3a3a);
  text-overflow: ellipsis;
  font: 500 14px/21px Strawford, sans-serif;
`

const Div5 = styled.div`
  display: flex;
  margin-top: 4px;
  justify-content: space-between;
  gap: 10px;
`

const Div6 = styled.div`
  color: #3a3a3a;
  letter-spacing: -0.4382608938217163px;
  white-space: nowrap;
  justify-content: center;
  border-radius: 2.783px;
  background-color: var(--Light-Beige, #f4f0ec);
  aspect-ratio: 3.75;
  padding: 2px 4px;
  font: 500 10px Strawford, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`

const Div7 = styled.div`
  color: var(--Black, #3a3a3a);
  align-self: start;
  flex-grow: 1;
  white-space: nowrap;
  font: 400 12px Strawford, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`

const Div8 = styled.div`
  align-self: start;
  display: flex;
  flex-basis: 0%;
  flex-direction: column;
  padding: 1px 0;
`

const Div9 = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: var(--Black, #3a3a3a);
  text-align: right;
  text-overflow: ellipsis;
  white-space: nowrap;
  font: 500 14px/21px Strawford, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`

const Div10 = styled.div`
  color: var(--Black, #3a3a3a);
  margin-top: 4px;
  white-space: nowrap;
  font: 400 12px Strawford, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`
