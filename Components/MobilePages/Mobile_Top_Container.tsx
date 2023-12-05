import React from "react"
import styled from "styled-components"
import Icon_Goback from "./MobilepageIcons/Icon - Go back ( Left caret ).png"
import Icon_Close from "./MobilepageIcons/Union 111.png"
import Image from "next/image"
import DateFilter from "../DateFilter"
import Link from "next/link"
const Top_navigation_container = styled.div`
  display: flex;
  height: 49.787px;
  padding: 0px 33.191px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10.372px;
  align-self: stretch;
  /* width: 390px; */
  padding: 0px 40px;

  @media (width > 768px) {
    display: none;
  }
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
  font-size: 18.67px;
  font-style: bold;
  font-weight: 600;
  line-height: normal;
`

const Mobile_Category_hashtags_Container = styled.div`
  display: flex;
  padding-left: 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 11px;
  align-self: stretch;

  //exp
  margin-left: 15px;
`

const Mobile_Top_Navigation_Container = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 0px;
  flex-direction: column;
  align-items: flex-start;

  gap: 32px;

  @media (width > 576px) {
    display: none;
  }
`

function Mobile_Category_hashtags() {
  return (
    <>
      <Mobile_Category_hashtags_Container>
        <DateFilter></DateFilter>
      </Mobile_Category_hashtags_Container>
    </>
  )
}

export default function Mobile_Top_Container({
  label = "My dashboard",
}: {
  label?: any
}) {
  return (
    <>
      <Mobile_Top_Navigation_Container>
        <Top_navigation_container>
          <Top_navigation_Wrapper>
            <Link href="/">
              <Navigation_Icon>
                <Image src={Icon_Goback} alt="Picture of the author" />
              </Navigation_Icon>
            </Link>
            <Top_Navigation_Text>{label}</Top_Navigation_Text>
            <Icon_close>
              <Image src={Icon_Close} alt="Picture of the author" />
            </Icon_close>
          </Top_navigation_Wrapper>
        </Top_navigation_container>
        <Mobile_Category_hashtags></Mobile_Category_hashtags>
      </Mobile_Top_Navigation_Container>
    </>
  )
}
