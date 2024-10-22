"use client"


import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
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
const chartData = [
  { month: "typescript", desktop: 300 },
  { month: "javascript", desktop: 300 },
  { month: "react", desktop: 400 },
  { month: "go", desktop: 600 },
  { month: "html5", desktop: 300 },
  { month: "css3", desktop: 300 },
  { month: "nuxtdotjs", desktop: 300 },
  { month: "nextdotjs", desktop: 300 },
  { month: "python", desktop: 300 },
  { month: "nodedotjs", desktop: 300 },
  { month: "mysql", desktop: 500 },
  { month: "vercel", desktop: 200 },
  { month: "docker", desktop: 500 },
  { month: "git", desktop: 500 },


]

const chartConfig = {
  desktop: {
    label: "Adrien",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export function ChartsDemo() {

  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const currentTheme = theme === 'system' ? systemTheme : theme
  const bgColor = currentTheme === 'dark' ? 'bg-transparent' : 'bg-transparent'
  const textColor = currentTheme === 'dark' ? 'text-white' : 'text-black'
  return (
    <Card className={`w-full absolute right-10 w-[70%] bottom-13 border-0 border-transparent origin-top translate-x-0 transition-all duration-300 ease-out group-hover:-translate-x-10 ${bgColor} ${textColor}`}style={{ boxShadow: '0 0 0 0 transparent' }}>
      <CardHeader className="items-center pb-4">
     
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] w-full"
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