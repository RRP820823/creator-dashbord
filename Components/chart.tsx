import Chart from "chart.js/auto"
import { CategoryScale } from "chart.js"
import { useState } from "react"
import Data from "../public/utils/data"
import React from "react"
import { Line } from "react-chartjs-2"
import styled from "styled-components"
Chart.register(CategoryScale)

const ChartContainer = styled.div`
  width: 100%;
  height: 108px;
  border: 1px solid black;
  align-self: stretch;
`

const LineChart = () => {
  const [chartDate, setChartDate] = React.useState(Data)
  const chartData = {
    labels: chartDate.map((data) => data.Date),
    datasets: [
      {
        label: "Users Gained",
        data: chartDate.map((data) => data.userGain),
        borderColor: "black",
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  }

  const options = {
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
    },
  }

  function handelClick() {
    let UpdatedData: any = chartDate.map((m) => {
      if (m.Date === "This Week") {
        return {
          ...m,
          userGain: m.userGain + 10000,
        }
      } else if (m.Date === "Yesterday") {
        return {
          ...m,
          userGain: m.userGain + 80000,
        }
      } else {
        return m
      }
    })
    setChartDate(UpdatedData)
  }

  return (
    <Container>
      {/* <button onClick={handelClick}>Change Week </button> */}

      <Line style={{ width: "100%" }} data={chartData} options={options} />
    </Container>
  )
}

let Container = styled.div`
  border: 1px solid black;
  width: 100%;
`
export default LineChart
