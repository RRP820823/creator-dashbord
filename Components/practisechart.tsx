import Data from "../public/utils/data"
import ThemeContext, { useGetTheme } from "../Components/DashBoardContext"
import React, { useContext, useEffect, useMemo } from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Line } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
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

// const labels = Data.map((data) => data.Date)

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: "Users Gained",
//       data: Data.map((data) => data.userGain),
//       borderColor: "black",
//       borderWidth: 2,
//       pointRadius: 0,
//       tension: 0.4,
//     },
//   ],
// }

export default function Chart2() {
  const cachedChartData = useMemo(() => Data, [])
  const [chartData, setChartData] = React.useState(() => cachedChartData)
  const { SelectedDateCategory } = useGetTheme()

  useEffect(() => {
    let filteredChartdatata = chartData.filter((e: any) => {
      if (e.Date === "Last month") {
        return {
          ...e,
          userGain: e.userGain + 80000,
        }
      } else if (e.Date === "Yesterday") {
        return {
          ...e,
          userGain: e.userGain + 10000,
        }
      }
      return e
    })

    setChartData(filteredChartdatata)
    // console.log("SelectedDateCategory chnaged ", SelectedDateCategory)
  }, [SelectedDateCategory])
  const labels = chartData?.map((d: any) => d?.Date)
  const data = {
    labels,
    datasets: [
      {
        label: "Users Gained",
        data: chartData?.map((d: any) => d?.userGain),
        borderColor: "black",
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.4,
      },
    ],
  }
  return <Line width={"1028"} height={"108"} options={options} data={data} />
}
