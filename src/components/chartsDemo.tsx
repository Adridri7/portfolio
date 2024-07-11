"use client"

import { TrendingUp } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { GridPatternDashed } from "./grid-pattern"
const chartData = [
  { month: "typescript", desktop: 300 },
  { month: "javascript", desktop: 300 },
  { month: "dart", desktop: 300 },
  { month: "react", desktop: 500 },
  { month: "flutter", desktop: 300 },
  { month: "go", desktop: 300 },
  { month: "html5", desktop: 400  },
  { month: "css3", desktop: 500 },
  { month: "nuxtdotjs", desktop: 500 },
  { month: "nextdotjs", desktop: 300 },
  { month: "python", desktop: 300 },
  { month: "nodedotjs", desktop: 300 },
  { month: "mysql", desktop: 300 },
  { month: "vercel", desktop: 300 },
  { month: "docker", desktop: 400 },
  { month: "git", desktop: 500 },


]

const chartConfig = {
  desktop: {
    label: "Pierre",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function ChartsDemo() {
  return (
    
    <Card  className="w-full absolute right-10 w-[70%] bottom-13 origin-top translate-x-0  transition-all duration-300 ease-out group-hover:-translate-x-10 bg-black">
      <CardHeader className="items-center pb-4">

      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] w-auto"
        >
          <RadarChart data={chartData}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarGrid gridType="circle" />
            <PolarAngleAxis dataKey="month" />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
     
    </Card>

              
  )
}

export default ChartsDemo;


