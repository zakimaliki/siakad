"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"

interface Grade {
  subject: string
  score: number
}

export function GradesChart({ grades }: { grades: Grade[] }) {
  const chartData = grades.map((g) => ({
    subject: g.subject.length > 10 ? g.subject.substring(0, 10) + "..." : g.subject,
    score: g.score,
  }))

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Bar Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Distribusi Nilai</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="subject" fontSize={12} />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Bar dataKey="score" fill="#2d7a5f" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Radar Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Profil Kompetensi</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={chartData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" fontSize={12} />
              <PolarRadiusAxis domain={[0, 100]} />
              <Radar name="Nilai" dataKey="score" stroke="#2d7a5f" fill="#2d7a5f" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
