import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  background-color: white;
  @media (width < 576px) {
    display: none;
  }
`

const Text = styled.div<{ index: any; currentIndex: any }>`
  color: var(--mid-grey-inactive-text, #9d9d9d);

  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  color: ${(props) =>
    props.currentIndex === props.index
      ? "#3A3A3A"
      : "var(--mid-grey-inactive-text, #9D9D9D)"};
  font-weight: ${(props) =>
    props.currentIndex === props.index ? "700" : "none"};
`

const ButtonWrapper = styled.button<{
  currentIndex: number
  index: number
  currentPathName: string
  link: string
}>`
  display: flex;
  height: 39px;
  padding: 0px 14px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 20px;

  background-color: white;
  border: ${(props) =>
    props.currentIndex === props.index
      ? "1px solid #140b0b"
      : " 1px solid #DDD"};
  background-color: ${(props) =>
    props.currentIndex === props.index ? "white" : "none"};

  /* background-color: ${(props) =>
    props.currentPathName === props.link ? "grey" : "transparent"}; */
`

export default function CategryFilter({
  handleChange,
  currentPathName,
  currentIndex,
}: any) {
  let links = ["Top products", "Top posts", "Top stores"]

  return (
    <Container>
      {links.map((link: string, index: number) => {
        return (
          <>
            <ButtonWrapper
              className={`${currentIndex === index ? "Selected" : ""}`}
              link={link}
              index={index}
              currentIndex={currentIndex}
              currentPathName={currentPathName}
              onClick={() => handleChange(index)}
            >
              <Text
                index={index}
                currentIndex={currentIndex}
                className={currentIndex === index ? "selected" : ""}
              >
                {link}
              </Text>
            </ButtonWrapper>
          </>
        )
      })}
    </Container>
  )
}
