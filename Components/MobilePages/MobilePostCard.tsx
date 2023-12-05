import * as React from "react"
import styled from "styled-components"

function MobilePostCard({ label }: { label: string }) {
  return (
    <Div>
      <Div2>
        <Div3>
          <ProductNameText>{label}</ProductNameText>
        </Div3>
        <Div4>
          <EarningText>SEK 6,625</EarningText>
        </Div4>
      </Div2>
    </Div>
  )
}

const EarningText = styled.div`
  color: #000;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
const ProductNameText = styled.div`
  flex: 1 0 0;
  overflow: hidden;
  color: var(--Black, #3a3a3a);
  text-overflow: ellipsis;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.3125rem; /* 150% */
`
const Div = styled.div`
  display: flex;
  height: 70px;
  padding: 10px 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border: 0.801px solid #ddd;
  background: #fff;
`

const Div2 = styled.div`
  display: flex;
  padding: 4px 0px;
  gap: 16px;

  align-self: stretch;
`

const Div3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;
`

const Div4 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  @media (width > 576px) {
    display: none;
  }
`
function MobilePostCardContainer() {
  let List = ["Sales earnings", "Click earnings"]
  return (
    <Container>
      {List.map((i) => (
        <>
          <MobilePostCard label={i} key={i}></MobilePostCard>
        </>
      ))}
    </Container>
  )
}

export default MobilePostCardContainer
