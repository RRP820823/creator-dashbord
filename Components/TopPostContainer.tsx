import React from "react"
import styled from "styled-components"
import Image from "next/image"
import goForward from "../public/Images/goForward2.png.png"
import PostCardImage from "../public/Images/PostImages/image.png"
import Link from "next/link"

const Container = styled.div<{ screen: any }>`
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
  /* background-color: ${(props) =>
    props.screen === "big" ? "yellow" : "blue"}; */
  /* border: 2px dotted magenta; */

  @media (width < 576px) {
    width: 100%;
    /* height: 300px; */
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
const Wrapper = styled.div<{ screen: any; hidePaddingForDetailsPage: any }>`
  display: flex;
  padding-top: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.4);
  width: 100%;
  height: 100%;

  &.hide_Padding {
    @media (width < 576px) {
      padding-top: 0;
    }
  }
`

const DivWrapper = styled.div<{
  hideOnDetailsPage?: boolean
  hideonmobile?: any
  hidePaddingForDetailsPage?: any
}>`
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
  height: 1542.23px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  /* scroll-snap-align: none; */

  &::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`

const PostCard = styled.div`
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

const PostCardContent = styled.div`
  display: flex;
  align-items: center;
  gap: 23px;
  align-self: stretch;
`

const PostImage = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

const PostImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
`

const PostInfoWrapper = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  flex: 1 0 0;
  overflow: hidden;
  color: var(--Black, #3a3a3a);
  text-overflow: ellipsis;
  font-family: Strawford;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px; /* 150% */
`

const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;
`

const PostInfoTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  align-self: stretch;
`

const PostInfoText = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  flex: 1 0 0;
  overflow: hidden;
  color: var(--Black, #3a3a3a);
  text-overflow: ellipsis;
  /* font-family: Strawford; */
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 21px; /* 150% */
  /* font: 500 14px/21px Strawford, sans-serif; */
`

const PostEarning = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  align-self: stretch;
  align-items: center;

  align-items: center;
  justify-content: center;
`

const PostEarningText = styled.div`
  color: #000;

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

const PostWrapper = styled.div`
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
  /* scroll-snap-align: none; */

  &::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`
export default function TopPostContainer({
  hideonmobile,
  screen,
  hidePaddingForDetailsPage,
  hideOnDetailsPage,
}: {
  screen?: string
  hideonmobile?: boolean
  hidePaddingForDetailsPage?: boolean
  hideOnDetailsPage?: boolean
}) {
  return (
    <>
      {/* <Container>
        <Wrapper>
          <DivWrapper>
            <TextWrapper>Top products</TextWrapper>
            <IconWrapper>
              <Image src={goForward} alt=""></Image>
            </IconWrapper>
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
          </ProductsWrapper>
        </Wrapper>
      </Container> */}

      <Container screen={screen}>
        <Wrapper
          screen={screen}
          className={`${hidePaddingForDetailsPage ? "hide_Padding" : ""}`}
          hidePaddingForDetailsPage={hidePaddingForDetailsPage}
        >
          <DivWrapper className={`${hideonmobile ? "hide" : ""}`}>
            <TextWrapper>Top Post</TextWrapper>

            {!screen && (
              <IconWrapper>
                <Link href="/TopPosts">
                  <Image src={goForward} alt=""></Image>
                </Link>
              </IconWrapper>
            )}
          </DivWrapper>
          <PostWrapper>
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

            {[...new Array(22)].map((e) => (
              <>
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
              </>
            ))}
          </PostWrapper>
        </Wrapper>
      </Container>
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
