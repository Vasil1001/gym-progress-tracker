'use client'

import BarChartGoal from '@/components/BarChartGoal'
import { CVPage } from '@/components/CVPage'
import { LineChartWeights } from '@/components/LineChart'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Container from '@/components/ui/container'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Home() {
  return (
    <Container>
      <div className="">
        <div className="my-6 text-3xl font-bold tracking-tighter">Dashboard</div>
        <CVPage />
      </div>
    </Container>
  )
}
