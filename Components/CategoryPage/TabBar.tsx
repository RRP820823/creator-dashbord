import styled from "styled-components"
import React from "react"
import Image from "next/image"
import goForwad from "./Images/Icon - Go forward ( Right caret ) (1).png"
let Container = styled.div`
  display: flex;
  padding: 0px 32px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`

const Box1 = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: -27px;
`
const Icon = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const CategoryHashtagsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`

const Box = styled.div`
  display: flex;
  height: 39px;
  padding: 0px 14px;
  justify-content: center;
  align-items: center;
  gap: 5px;

  border-radius: 20px;
  border: 1px solid #3a3a3a;
`

const TextWrapper = styled.div`
  color: #3a3a3a;
  font-family: Strawford;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

const Box2 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`
function CategoryHashtags({ categories }: { categories: Array<string> }) {
  return (
    <CategoryHashtagsContainer>
      {categories.map((c) => (
        <>
          <Box>
            <TextWrapper>{c}</TextWrapper>
          </Box>
        </>
      ))}
    </CategoryHashtagsContainer>
  )
}
export default function TabBar() {
  return (
    <Container>
      <Box1>
        <IconWrapper>
          <Icon>
            <Image src={goForwad} alt=""></Image>
          </Icon>
        </IconWrapper>
        <CategoryHashtags
          categories={["Top products", "Top posts", "Top stores"]}
        ></CategoryHashtags>
      </Box1>

      <Box2>
        <CategoryHashtags
          categories={[
            "This week",
            "Yesterday",
            "Last week",
            "Last month",
            "1st Aug - 31st Aug ",
            "1-18th Aug",
          ]}
        ></CategoryHashtags>
      </Box2>
    </Container>
  )
}
