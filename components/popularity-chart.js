import React from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts"

function formatter(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

function createBlankRecord(year) {
  return {
    afabCount: 0,
    amabCount: 0,
    total: 0,
    fractionOfPopulation: 0,
    year: year,
  }
}

function createBlankRecords(min, max) {
  const arr = []
  for (let i = min; i < max; i++) {
    arr.push(createBlankRecord(i))
  }
  return arr
}

function combineRecords(records, blankRecords) {
  return blankRecords.map((blankRecord) => {
    const matchingRecords = records.filter((record) => {
      return record.year === blankRecord.year
    })
    if (matchingRecords.length > 0) {
      return matchingRecords[0]
    } else {
      return blankRecord
    }
  })
}

export default function PopularityChart(props) {
  const blankRecords = createBlankRecords(1880, 2018)
  const combinedRecords = combineRecords(props.records, blankRecords)
  return (
    <ResponsiveContainer width="100%" aspect={2.5}>
      <LineChart id={props.name} data={combinedRecords}>
        <XAxis
          dataKey="year"
          interval={9}
          //  ticks={ticks}
        />
        <YAxis label={{ formatter }} />
        <Tooltip separator=": " />
        <Legend />
        <Line
          name="Assigned female at birth"
          type="monotoneX"
          dot={false}
          dataKey="afabCount"
          stroke="#e74694"
          strokeWidth={4}
          activeDot={{ r: 7 }}
        />
        <Line
          name="Assigned male at birth"
          type="linear"
          dot={false}
          dataKey="amabCount"
          stroke="#319795"
          strokeWidth={4}
          activeDot={{ r: 7 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
