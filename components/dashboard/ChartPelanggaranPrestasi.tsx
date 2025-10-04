"use client"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import * as React from "react"

export default function ChartPelanggaranPrestasi({ chartData }: { chartData: { bulan: string, pelanggaran: number, prestasi: number }[] }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Grafik Pelanggaran vs Prestasi</CardTitle>
                <CardDescription>Perbandingan bulanan skor pelanggaran dan prestasi</CardDescription>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={chartData}>
                        <XAxis dataKey="bulan" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pelanggaran" fill="#ef4444" name="Pelanggaran" />
                        <Bar dataKey="prestasi" fill="#059669" name="Prestasi" />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}
