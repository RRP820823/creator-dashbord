import React, { ReactNode, useContext, useEffect, useState } from "react"
import { createContext } from "react"
import Data from "../public/utils/data"
type Theme = {
  setSelectedDateCategory: any
  SelectedDateCategory: any
}
export const ThemeContext = createContext<Theme>({})
export const useGetTheme = () => useContext(ThemeContext)
export default function DashBoardContext({
  children,
}: {
  children: ReactNode
}) {
  const [SelectedDateCategory, setSelectedDateCategory] = React.useState("")

  console.log("SelectedDateCategory", SelectedDateCategory)

  let context: Theme = {
    setSelectedDateCategory,
    SelectedDateCategory,
  }
  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  )
}
