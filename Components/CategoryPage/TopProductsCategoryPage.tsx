import React from "react"
import styled from "styled-components"
import TabBar from "./TabBar"

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 31px;
  width: 1208px;
  height: 1032px;
`
export default function TopProductsCategoryPage() {
  return (
    <Container>
      <TabBar></TabBar>
    </Container>
  )
}

// import React from "react"
// import styled from "styled-components"

// const SearchProductsWrapper = styled.div`
//   align-items: center;
//   display: flex;
//   justify-content: space-between;
//   padding: 0px 32px;
//   position: relative;
// `

// const Frame = styled.div`
//   align-items: center;
//   display: inline-flex;
//   flex: 0 0 auto;
//   gap: 60px;
//   position: relative;
// `

// const Img = styled.img`
//   flex: 0 0 auto;
//   position: relative;
// `

// const CategoryHashtags = styled.div`
//   align-items: flex-start;
//   display: inline-flex;
//   flex: 0 0 auto;
//   gap: 10px;
//   position: relative;
// `

// const Beauty = styled.div`
//   align-items: center;
//   border: 1px solid;
//   border-color: #3a3a3a;
//   border-radius: 20px;
//   display: inline-flex;
//   flex: 0 0 auto;
//   gap: 5px;
//   height: 39px;
//   justify-content: center;
//   padding: 0px 14px;
//   position: relative;
// `

// const TextWrapper = styled.div`
//   color: #3a3a3a;
//   font-family: "Strawford-Medium", Helvetica;
//   font-size: 15px;
//   font-weight: 500;
//   letter-spacing: 0;
//   line-height: normal;
//   position: relative;
//   white-space: nowrap;
//   width: fit-content;
// `

// const DivWrapper = styled.div`
//   align-items: center;
//   border: 1px solid;
//   border-color: #dddddd;
//   border-radius: 20px;
//   display: inline-flex;
//   flex: 0 0 auto;
//   gap: 5px;
//   height: 39px;
//   justify-content: center;
//   padding: 0px 14px;
//   position: relative;
// `

// const Div = styled.div`
//   color: var(--variable-collection-mid-grey-inactive-text);
//   font-family: "Strawford-Medium", Helvetica;
//   font-size: 15px;
//   font-weight: 500;
//   letter-spacing: 0;
//   line-height: normal;
//   position: relative;
//   white-space: nowrap;
//   width: fit-content;
// `

// const CategoryHashtagsWrapper = styled.div`
//   align-items: flex-end;
//   align-self: stretch;
//   display: inline-flex;
//   flex: 0 0 auto;
//   flex-direction: column;
//   gap: 5px;
//   justify-content: center;
//   padding: 0px 0px 0px 32px;
//   position: relative;
// `

// const TextWrapper2 = styled.div`
//   color: var(--variable-collection-mid-grey-inactive-text);
//   font-family: "Strawford-Medium", Helvetica;
//   font-size: 14px;
//   font-weight: 500;
//   letter-spacing: 0;
//   line-height: normal;
//   position: relative;
//   width: fit-content;
// `

// const Calendar = styled.div`
//   align-items: center;
//   border: 1px solid;
//   border-color: #3a3a3a;
//   border-radius: 20px;
//   display: inline-flex;
//   flex: 0 0 auto;
//   gap: 5px;
//   height: 39px;
//   justify-content: center;
//   padding: 0px 10px;
//   position: relative;
// `

// const P = styled.p`
//   color: #3a3a3a;
//   font-family: "Strawford-Medium", Helvetica;
//   font-size: 14px;
//   font-weight: 500;
//   letter-spacing: 0;
//   line-height: normal;
//   position: relative;
//   width: fit-content;
// `

// const Frame2 = styled.div`
//   align-items: center;
//   display: inline-flex;
//   flex: 0 0 auto;
//   gap: 10px;
//   position: relative;
//   transform: rotate(90deg);
// `

// const IconGoForward = styled.img`
//   height: 5.71px;
//   margin-left: -2.14px;
//   margin-right: -2.14px;
//   position: relative;
//   transform: rotate(-90deg);
//   width: 10px;
// `

// const TopProductsCategoryPage = () => {
//   return (
//     <SearchProductsWrapper>
//       <Frame>
//         <Img alt="Frame" src="frame-1903.svg" />
//         <CategoryHashtags>
//           <Beauty>
//             <TextWrapper>Top products</TextWrapper>
//           </Beauty>
//           <DivWrapper>
//             <Div>Top posts</Div>
//           </DivWrapper>
//           <DivWrapper>
//             <Div>Top stores</Div>
//           </DivWrapper>
//         </CategoryHashtags>
//       </Frame>
//       <CategoryHashtagsWrapper>
//         <CategoryHashtags>
//           <DivWrapper>
//             <TextWrapper2>This week</TextWrapper2>
//           </DivWrapper>
//           <DivWrapper>
//             <TextWrapper2>Yesterday</TextWrapper2>
//           </DivWrapper>
//           <DivWrapper>
//             <TextWrapper2>Last week</TextWrapper2>
//           </DivWrapper>
//           <DivWrapper>
//             <TextWrapper2>Last month</TextWrapper2>
//           </DivWrapper>
//           <Calendar>
//             <P>1st Aug - 31st Aug</P>
//             <Frame2>
//               <IconGoForward
//                 alt="Icon go forward"
//                 src="icon-go-forward-right-caret.png"
//               />
//             </Frame2>
//           </Calendar>
//         </CategoryHashtags>
//       </CategoryHashtagsWrapper>
//     </SearchProductsWrapper>
//   )
// }

// export default TopProductsCategoryPage
