import React from "react"
import styled from "styled-components"
import Image from "next/image"
import goForward from "../public/Images/goForward2.png.png"
import PostCardImage from "../public/Images/PostImages/image.png"
import Product from "./Product"
import Card from "./Card"
import Link from "next/link"
import Icon_Goback from "../Components/MobilePages/MobilepageIcons/Icon - Go back ( Left caret ).png"
import Icon_Close from "../Components/MobilePages/MobilepageIcons/Union 111.png"

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

  @media (width < 576px) {
    width: 100%;
  }

  @media (width < 576px) {
    height: ${(props) => (props.screen ? "100%" : "300px")};
  }

  &.hide_gap {
    @media (width < 576px) {
      gap: none;
    }
  }
`
const Wrapper = styled.div<{ screen?: any; hidePaddingForDetailsPage: any }>`
  display: flex;
  padding-top: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.4);
  height: 100%;
  &.hide_Padding {
    @media (width < 576px) {
      padding-top: 0;
    }
  }
`

const DivWrapper = styled.div`
  display: flex;
  padding: 0px 32px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  &.hide {
    @media (width < 576px) {
      display: none;
    }
  }
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

const IconWrapper = styled.div<{ hideOnDetailsPage: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;

  &.hideIon {
    @media (width < 576px) {
      display: none;
    }
  }
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
  hidePaddingForDetailsPage,
  hideOnDetailsPage,
}: {
  screen?: string
  hideonmobile?: boolean
  hidePaddingForDetailsPage?: boolean
  hideOnDetailsPage?: any
}) {
  return (
    <>
      <Container screen={screen}>
        <Wrapper
          className={`${hidePaddingForDetailsPage ? "hide_Padding" : ""}`}
          hidePaddingForDetailsPage={hidePaddingForDetailsPage}
        >
          <DivWrapper className={`${hideonmobile ? "hide" : ""}`}>
            <TextWrapper>Top products</TextWrapper>
            {!screen && (
              <IconWrapper
                className={`${hideOnDetailsPage ? "hideIon" : ""}`}
                hideOnDetailsPage={hideOnDetailsPage}
              >
                <Link href="/TopProducts">
                  <Image src={goForward} alt=""></Image>
                </Link>
              </IconWrapper>
            )}
          </DivWrapper>
          <ProductsWrapper>
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

      {/* <Container>
        <Wrapper>
          <DivWrapper>
            <TextWrapper>Top Post</TextWrapper>
            <IconWrapper>
              <Image src={goForward} alt=""></Image>
            </IconWrapper>
          </DivWrapper>
          <PostCard>
            <PostCardContent>
              <PostImage>
                <PostImageWrapper>
                  <Image alt="" src={PostCardImage}></Image>
                </PostImageWrapper>
              </PostImage>
              <PostInfoWrapper>
                <PostInfo>
                  <PostInfoTextWrapper>
                    <PostInfoText>
                      I badrumsskåpet med Bianca Ingrosso 🌸
                    </PostInfoText>
                  </PostInfoTextWrapper>
                </PostInfo>
              </PostInfoWrapper>
              <PostEarning>
                <PostEarningText>SEK 962</PostEarningText>
              </PostEarning>
            </PostCardContent>
          </PostCard>
        </Wrapper>
      </Container> */}
      {/* 
      <Container>
        <Wrapper>
          <DivWrapper>
            <TextWrapper>Top stores</TextWrapper>
            <IconWrapper>
              <Image src={goForward} alt=""></Image>
            </IconWrapper>
          </DivWrapper>
          <Card />
        </Wrapper>
      </Container> */}
    </>
  )
}
