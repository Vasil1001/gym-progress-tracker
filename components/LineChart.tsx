import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'

const data = [
  {
    average: 35,
    today: 30
  },
  {
    average: 30,
    today: 35
  },
  {
    average: 32.5,
    today: 35
  },
  {
    average: 35,
    today: 40
  },
  {
    average: 35,
    today: 30
  },
  {
    average: 35,
    today: 35
  },
  {
    average: 35,
    today: 35
  },
  {
    average: 35,
    today: 40
  },
  {
    average: 35,
    today: 40
  },
  {
    average: 35,
    today: 35
  },
  {
    average: 35,
    today: 35
  }
]

export function LineChartWeights() {
  return (
    <Card className="flex h-full flex-col justify-between">
      <CardHeader>
        <CardTitle>Biceps Tracking</CardTitle>
        <CardDescription>
          Your exercise minutes are ahead of where you normally are.
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 15,
                right: 10,
                left: -30,
                bottom: 0
              }}>
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Average
                            </span>
                            <span className="font-bold text-muted-foreground">
                              {payload[0].value}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Today
                            </span>
                            <span className="font-bold">{payload[0].value}</span>
                          </div>
                        </div>
                      </div>
                    )
                  }

                  return null
                }}
              />
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid opacity={0.1} strokeDasharray="4 5" />
              <Line
                type="monotone"
                dataKey="today"
                strokeWidth={2.5}
                dot={{ r: 3 }}
                activeDot={{
                  r: 4,
                  style: { fill: 'var(--theme-primary)' }
                }}
              />
              <Line
                type="monotone"
                dot={false}
                strokeWidth={3}
                strokeOpacity={0.3}
                activeDot={false}
                dataKey="average"
                stroke="#82ca9d"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
