import React, { useState, useEffect } from "react"
import { Line } from "react-chartjs-2"
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import "react-datepicker/dist/react-datepicker.css"
import { format, subDays } from "date-fns"

// import DateComponent from "./DateComponent";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

type ChartData = {
  labels: string[]
  datasets: {
    data: number[]
    // label: string;
    fill: boolean
    borderColor: string
    // backgroundColor: string;
    // pointBorderColor: string;
    tension: number
    pointRadius: number
  }[]
}

// Declaring the generateChartData function
const generateChartData = (
  interval: string,
  customStart?: Date | null,
  customEnd?: Date | null
): ChartData => {
  const labels = []
  const data = []

  switch (interval) {
    case "thisWeek":
      for (let i = 0; i < 7; i++) {
        labels.push(format(subDays(new Date(), i), "d MMM "))
        // console.log("format", format);
        // console.log("subDays", subDays);
        console.log(labels, "lll")
        data.push(Math.floor(Math.random() * 100))
        console.log("data", data)
      }
      break

    case "custom":
      if (customStart && customEnd) {
        console.log("customStart and customEnd", customStart, customEnd)
        for (let i = 0; i < 7; i++) {
          labels.push(format(subDays(customEnd, i), "d MMM"))
          data.push(Math.floor(Math.random() * 100))
        }
      }
      break
    default:
      break
  }

  return {
    labels,
    datasets: [
      {
        data,
        // label: "Dataset 1",
        fill: false,
        // backgroundColor: "none",
        borderColor: "#3a3a3a",
        // pointBorderColor: "",
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  }
}

const options = {
  scales: {
    x: {
      display: false, // Hide x-axis  i.e date
    },
    y: {
      display: false, // Hide y-axis i.e random  data
    },
  },
  responsive: true,
  plugins: {
    legend: {
      // position: "top" as const,
      display: false,
    },
    title: {
      display: false, // Hide the title
      text: "React ChartLJS-V2",
    },
  },
  maintainAspectRatio: false,
  height: 150,
}

const Graph: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData>(
    generateChartData("thisWeek")
  )

  const [selectedDateRange, setSelectedDateRange] = useState<{
    start: Date | null
    end: Date | null
  }>({ start: null, end: null })

  useEffect(() => {
    // Fetch initial data based on default date range
    fetchData(selectedDateRange.start, selectedDateRange.end)
  }, [])

  const handleDateChange = (start: Date | null, end: Date | null) => {
    // Update the selected date range state
    setSelectedDateRange({ start, end })
    // Fetch data based on the selected date range
    fetchData(start, end)
  }

  const fetchData = (start: Date | null, end: Date | null) => {
    //  data fetching logic here
    // Generating random data
    const newChartData = generateChartData("custom", start, end)
    // console.log("newChartData", newChartData);
    setChartData(newChartData)
  }

  return <Line data={chartData} options={options} />
}

export default Graph
