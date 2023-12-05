import React from "react"
import styled from "styled-components"
import Image from "next/image"
import goForward from "../public/Images/goForward2.png.png"
import PostCardImage from "../public/Images/PostImages/image.png"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;
  border-radius: 10px;
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.08);
  width: 390px;
  height: 440px;

  border-radius: 10px;
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.08);
`
const Wrapper = styled.div`
  display: flex;
  padding-top: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.4);
  width: 390px;
  height: 440px;
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
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  border: 0.801px solid #ddd;
  background: #fff;
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
  font-family: Strawford;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px; /* 150% */
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

// const PostEarningIcon = styled.div`

// `
export default function TopPosts() {
  return (
    <>
      <Container>
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
      </Container>
    </>
  )
}
