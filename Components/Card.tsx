import styled from "styled-components"
import Image from "next/image"
import goForward from "../public/Images/goForward2.png.png"
import PostCardImage from "../public/Images/PostImages/image.png"
import ProductImage1 from "../public/Images/productimages/Skärmavbild 2023-08-29 kl. 11.10 3 (1).png"
const CardContainer = styled.div`
  display: flex;
  height: 70px !important;
  padding: 10px 32px;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  border: 0.801px solid #ddd;
  background: #fff;
  min-height: 70px !important;
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
  flex: 1 0 0;
  overflow: hidden;
  color: var(--Black, #3a3a3a);
  text-overflow: ellipsis;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
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
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  flex: 1 0 0;
`

const PostInfoText = styled.div`
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
  line-height: 21px;
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

function MyCard() {
  return (
    <Div>
      <Div2>
        <Div3>Bangerhead</Div3>
        <Div4>SEK 2702</Div4>
      </Div2>
    </Div>
  )
}

const Div = styled.div`
  display: flex;
  padding: 10px 32px;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  border: 0.801px solid #ddd;
  background: #fff;
  height: 70px !important;
`

const Div2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
`

const Div3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;
`

const Div4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  align-self: stretch;
`

export default function Card({ image }: { image?: string }) {
  return (
    <CardContainer>
      <PostCardContent>
        {image && (
          <PostImage>
            <PostImageWrapper>
              <Image alt="" src={PostCardImage}></Image>
            </PostImageWrapper>
          </PostImage>
        )}
        <PostInfoWrapper>
          <PostInfo>
            <PostInfoTextWrapper>
              <PostInfoText>Lyko</PostInfoText>
            </PostInfoTextWrapper>
          </PostInfo>
        </PostInfoWrapper>
        <PostEarning>
          <PostEarningText>SEK 962</PostEarningText>
        </PostEarning>
      </PostCardContent>
    </CardContainer>
  )
}
