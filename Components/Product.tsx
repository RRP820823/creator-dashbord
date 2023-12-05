// Top products

import React from "react"
import styled from "styled-components"

import ProductImage1 from "../public/Images/productimages/Skärmavbild 2023-08-29 kl. 11.10 3 (1).png"
import Image from "next/image"
const Container = styled.div`
  display: flex;
  height: 70px;
  padding: 10px 32px;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  border: 0.801px solid #ddd;
  background: #fff;
  min-height: 70px;
  justify-content: center;
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  /* border: 2px solid black; */
`

const ImageDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
`

const ProductDetails = styled.div`
  //problem with padding
  display: flex;
  /* padding: 4px 0px; */
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;
  align-self: stretch;
  /* 
  justify-content: space-between;
  display: flex;
  gap: 16px;
  padding: 4px 0; */
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;
`

const Box1 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
`

const TextWrapper = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  flex: 1 0 0;
  overflow: hidden;
  color: var(--Black, #3a3a3a);
  text-overflow: ellipsis;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px; /* 150% */
`

const Box2 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  width: max-content;
`

const RateWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;
`

const Rate = styled.div`
  /* display: flex;
  padding: 2.087px 4.174px;
  justify-content: center;
  align-items: center;
  gap: 5.575px; */
  display: flex;
  color: var(--Black, #3a3a3a);
  margin-top: 4px;
  white-space: nowrap;
  font: 400 12px Strawford, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`

const RateTextWrapper = styled.div`
  color: #3a3a3a;
  font-family: Strawford;
  font-size: 9.739px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.438px;
  padding: 0;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: var(--Black, #3a3a3a);
  text-align: right;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const RateTextWrapper2 = styled.div`
  color: var(--Black, #3a3a3a);
  /* font-family: Strawford; */
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  color: var(--Black, #3a3a3a);
  margin-top: 4px;
  white-space: nowrap;
  font: 400 12px Strawford, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`
// 2 SEK / Click
// Pricerunner

const Earning = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  align-self: stretch;
`

const EarningWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
`

const EarningTextProductNameWrapper = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: var(--Black, #3a3a3a);
  text-align: right;
  text-overflow: ellipsis;
  /* font-family: Strawford; */
  font-size: 14px;
  font-style: bold;
  font-weight: 700;
  line-height: 21px;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1; /* 150% */
`

const EarningTextProductPriceWrapper = styled.div`
  color: var(--Black, #3a3a3a);
  /* font-family: Strawford; */
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-size: 0.75rem;
`
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  background: #fff;
`

const RateTextDivWrapper = styled.div`
  display: flex;
  padding: 2.087px 4.174px;
  justify-content: center;
  align-items: center;
  gap: 5.575px;
  border-radius: 2.783px;
  background: var(--Light-Beige, #f4f0ec);
`

const RateTextdiv1 = styled.div`
  display: flex;
  padding: 2.087px 4.174px;
  justify-content: center;
  align-items: center;
  gap: 5.575px;
  border-radius: 2.783px;
  background: var(--Light-Beige, #f4f0ec);
`

const RateText = styled.div`
  color: #3a3a3a;
  font-size: 9.739px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.438px;
`
const RateText2 = styled.div`
  color: var(--Black, #3a3a3a);

  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

export default function Product() {
  return (
    <Container>
      <Content>
        <ImageDiv>
          <ImageWrapper>
            <Image
              style={{ height: "37px", flex: "1 0 0" }}
              src={ProductImage1}
              alt=""
            ></Image>
          </ImageWrapper>
        </ImageDiv>

        <ProductDetails>
          <ProductInfo>
            <Box1>
              <TextWrapper>Nioxin Thickening Gel 140ml</TextWrapper>
            </Box1>
            <Box2>
              <RateWrapper>
                <RateTextdiv1>
                  <RateText>2 SEK / Click</RateText>
                </RateTextdiv1>
                <RateText2>Pricerunner</RateText2>
              </RateWrapper>
            </Box2>
          </ProductInfo>
          <Earning>
            <EarningWrapper>
              <EarningTextProductNameWrapper>
                SEK 625
              </EarningTextProductNameWrapper>
            </EarningWrapper>
            <EarningTextProductPriceWrapper>
              25 Clicks
            </EarningTextProductPriceWrapper>
          </Earning>
        </ProductDetails>
      </Content>
    </Container>
  )
}
