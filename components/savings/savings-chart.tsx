"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

interface Transaction {
  date: string
  balance: number
}

export function SavingsChart({ transactions }: { transactions: Transaction[] }) {
  const chartData = transactions
    .slice()
    .reverse()
    .map((t) => ({
      date: t.date,
      balance: t.balance,
    }))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Grafik Perkembangan Tabungan</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" fontSize={12} />
            <YAxis fontSize={12} />
            <Tooltip
              formatter={(value: number) => `Rp ${value.toLocaleString("id-ID")}`}
              labelStyle={{ color: "#000" }}
            />
            <Line type="monotone" dataKey="balance" stroke="#2d7a5f" strokeWidth={2} dot={{ fill: "#2d7a5f" }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
