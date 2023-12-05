import CategryFilter from "@/Components/CategryFilter"
import DateFilter from "@/Components/DateFilter"
import TopProductContainer from "@/Components/TopProductContainer"
import React, { useEffect } from "react"
import IconLeftForward from "../public/Images/PostImages/iconleftFoeward.png"
import TopStoriesContainer from "@/Components/TopStoriesContainer"
import Mobile_Top_Container from "../Components/MobilePages/Mobile_Top_Container"
import { usePathname } from "next/navigation"
import styled from "styled-components"
import Image from "next/image"
import TopPostContainer from "@/Components/TopPostContainer"
import Link from "next/link"
const Container = styled.div`
  /* flex-shrink: 0;
  display: flex;
  justify-content: center; */
  /* border: 1px solid black; */
  /* fill: var(--White, #fff);
  backdrop-filter: blur(43.5px);
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0);
  margin: 0 auto;
  max-width: 1440px; */
  flex-shrink: 0;
  display: flex;
  justify-content: center;

  fill: var(--White, #fff);
  backdrop-filter: blur(43.5px);
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0);
  margin: 0 auto;

  @media (width < 576px) {
    width: 390px;
  }

  @media (width < 576px) {
    width: 100%;
  }
`

const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 31px;

  width: 1208px;

  padding: 40px;
 
  &.tab {
    background-color: yellow;
    width: 50%;
  } */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 31px;
  width: 1208px;
  padding: 40px;

  @media (width < 576px) {
    padding: 0;
  }

  @media (width < 576px) {
    overflow-x: auto;
  }
`

let Box1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 31px;
  align-self: stretch;
  align-items: center;
`

const Box2 = styled.div<{ screen?: any }>`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 19px;
  border: 1px solid black;
  width: ${(screen) => screen && "100%"};
`

const NavBar = styled.div`
  display: flex;
  /* padding: 0px 32px; */
  padding: 0px 16px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  @media (width < 576px) {
    display: none;
  }
`

const CategoryDivWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`

const CategoryDivIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: -27px;
`
const RowListContainer = styled.div`
  display: flex;
  padding: 32px 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;

  @media (width < 576px) {
    padding: 0;
  }
`
function RowList({
  children,
  currentIndex,
}: {
  currentIndex: number
  children: any
}) {
  // const [currentIndex, setCurrentIndex] = React.useState(0)
  let pages = React.Children.toArray(children)

  return (
    <RowListContainer className="RowList">
      {pages[currentIndex]}
    </RowListContainer>
  )
}

export default function TopPosts() {
  const [currentIndex, setCurrentIndex] = React.useState(1)
  function handleChange(index: number) {
    console.log("index", index)
    setCurrentIndex(index)
  }

  useEffect(() => {
    setCurrentIndex(1)
  }, [])

  return (
    <Container>
      <Wrapper>
        <Mobile_Top_Container label="Top Post"></Mobile_Top_Container>
        <NavBar>
          <CategoryDivWrapper>
            <CategoryDivIconWrapper>
              <Link href="/">
                <Image alt="IconLeftForward" src={IconLeftForward}></Image>
              </Link>
            </CategoryDivIconWrapper>
            <CategryFilter
              currentIndex={currentIndex}
              handleChange={handleChange}
            ></CategryFilter>
          </CategoryDivWrapper>
          <DateFilter></DateFilter>
        </NavBar>

        <RowList currentIndex={currentIndex}>
          <TopProductContainer screen={"big"} />
          <TopPostContainer
            hideOnDetailsPage={true}
            hidePaddingForDetailsPage={true}
            hideonmobile={true}
            screen="big"
          ></TopPostContainer>
          <TopStoriesContainer screen={"big"}></TopStoriesContainer>
        </RowList>
        <Box2 screen="big"></Box2>
      </Wrapper>
    </Container>
  )
}
