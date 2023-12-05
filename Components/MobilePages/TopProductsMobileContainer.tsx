import React from "react"
import styled from "styled-components"

import goForward from "../public/Images/goForward2.png.png"
import PostCardImage from "../public/Images/PostImages/image.png"
import Link from "next/link"
import Product from "../Product"
import Image from "next/image"
import Right_Carter_Img from "./MobilepageIcons/Icon - Go back ( Left caret ).png"
import Icon_Close from "./MobilepageIcons/Union 111.png"

const Container = styled.div<{ screen?: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;
  border-radius: 10px;
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.08);
  width: ${(props) => (props.screen ? "100%" : "390px")};
  height: ${(props) => (props.screen ? "100%" : "440px")};
  background-color: ${(props) => (props.screen === "big" ? "yellow" : "blue")};
  border: 2px dotted magenta;

  @media (width < 576px) {
    width: 100%;
  }
`
const Wrapper = styled.div<{ screen?: any }>`
  display: flex;
  padding-top: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.4);
  height: 100%;
  /* width: ${(screen) => (screen ? "100%" : "390px")}; */
`

const DivWrapper = styled.div`
  display: flex;
  padding: 0px 32px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`

const TextWrapper = styled.div`
  color: #3a3a3a;
  font-family: Strawford;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-weight: bold;
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  scroll-behavior: auto;
  scroll-behavior: smooth;
  /* overflow: hidden; */
  height: 840px;
  overflow-y: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`

const Top_navigation_container = styled.div`
  display: flex;
  height: 49.787px;
  padding: 0px 33.191px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10.372px;
  align-self: stretch;
`

const Navigation_Icon = styled.div`
  display: flex;
  width: 13.484px;
  align-items: center;
  gap: 76.755px;
`

const Icon_close = styled.div`
  display: flex;
  width: 13.484px;
  justify-content: center;
  align-items: center;
`

const Top_navigation_Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`

const Top_Navigation_Text = styled.div`
  color: #000;
  text-align: center;
  font-family: Strawford;
  font-size: 18.67px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
export default function TopProductContainer({
  hideonmobile,
  screen,
}: {
  screen?: string
  hideonmobile?: boolean
}) {
  let links = ["Top products", "Top posts", "Top stores"]
  return (
    <>
      {/* <h1>{screen}</h1> */}
      <Container screen={screen}>
        <Wrapper>
          <Top_navigation_container>
            <Top_navigation_Wrapper>
              <Navigation_Icon>
                <Image src={Right_Carter_Img} alt="Picture of the author" />
              </Navigation_Icon>
              <Top_Navigation_Text>My dashboard</Top_Navigation_Text>
              <Icon_close>
                <Image src={Icon_Close} alt="Picture of the author" />
              </Icon_close>
            </Top_navigation_Wrapper>
          </Top_navigation_container>
          <DivWrapper className="hide">
            <TextWrapper>Top products</TextWrapper>
            {!screen && (
              <IconWrapper>
                <Link href="/TopProducts">
                  <Image src={goForward} alt=""></Image>
                </Link>
              </IconWrapper>
            )}
          </DivWrapper>
          <ProductsWrapper>
            {/* <SingleProduct></SingleProduct> */}
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
          </ProductsWrapper>
        </Wrapper>
      </Container>
    </>
  )
}
