import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AlertTriangle, Award, Scale, Download, Send, Plus } from "lucide-react"
import ChartPelanggaranPrestasi from "@/components/dashboard/ChartPelanggaranPrestasi"

const chartData = [
  { bulan: "Jan", pelanggaran: -10, prestasi: 15 },
  { bulan: "Feb", pelanggaran: -5, prestasi: 10 },
  { bulan: "Mar", pelanggaran: -15, prestasi: 25 },
]

export default function PelanggaranPrestasiPage() {
  const summaryData = [
    { label: "Pelanggaran", value: "3 Kasus", icon: AlertTriangle, color: "bg-red-500" },
    { label: "Prestasi", value: "2 Pencapaian", icon: Award, color: "bg-emerald-600" },
    { label: "Status Disiplin", value: "Baik", icon: Scale, color: "bg-amber-500" },
  ]

  const violations = [
    {
      tanggal: "05/03/2025",
      jenis: "Terlambat masuk kelas",
      skor: -5,
      guru: "Ustadz H. Abdul Karim",
      status: "Diselesaikan",
    },
    {
      tanggal: "11/03/2025",
      jenis: "Tidak membawa Al-Qur'an saat pelajaran",
      skor: -5,
      guru: "Ustadzah Nur Aini",
      status: "Proses",
    },
    {
      tanggal: "21/03/2025",
      jenis: "Bolos pelajaran",
      skor: -5,
      guru: "Ustadz Fadhlan",
      status: "Diselesaikan",
    },
  ]

  const achievements = [
    {
      tanggal: "10/02/2025",
      jenis: "Juara 1 MTQ Kabupaten",
      skor: 15,
      pembimbing: "Ustadzah Nur Aini",
      keterangan: "Membawa nama baik madrasah.",
    },
    {
      tanggal: "18/03/2025",
      jenis: "Aktif menjadi MC pada acara Maulid Nabi",
      skor: 10,
      pembimbing: "Ustadz Fadhlan",
      keterangan: "Meningkatkan percaya diri.",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-emerald-800">Skor Pelanggaran & Prestasi Siswa</h1>
        <p className="text-muted-foreground">Rekap skor kedisiplinan dan prestasi siswa per semester.</p>
      </div>

      {/* Student Info Card */}
      <Card className="border-emerald-200 bg-gradient-to-br from-emerald-50 to-white">
        <CardHeader>
          <CardTitle className="text-emerald-800">Informasi Siswa</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-5">
          <div>
            <p className="text-sm text-muted-foreground">Nama</p>
            <p className="font-semibold">Ahmad Fauzi</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Kelas</p>
            <p className="font-semibold">XI IPA 2</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">NIS</p>
            <p className="font-semibold">2021456</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Total Skor Pelanggaran</p>
            <p className="text-2xl font-bold text-red-600">-15</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Total Skor Prestasi</p>
            <p className="text-2xl font-bold text-emerald-700">+25</p>
          </div>
        </CardContent>
        <CardContent className="border-t pt-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Net Score</p>
              <p className="text-3xl font-bold text-emerald-700">+10</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Catatan Wali Kelas</p>
              <p className="font-medium text-amber-700">Perlu meningkatkan kedisiplinan waktu.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {summaryData.map((item, index) => (
          <Card key={index} className="border-l-4" style={{ borderLeftColor: item.color.replace("bg-", "#") }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{item.label}</CardTitle>
              <item.icon className={`h-5 w-5 text-white rounded-full p-1 ${item.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Chart */}
      <ChartPelanggaranPrestasi chartData={chartData} />

      {/* Violations Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Catatan Pelanggaran</CardTitle>
              <CardDescription>Riwayat pelanggaran siswa</CardDescription>
            </div>
            <Button variant="destructive">
              <Plus className="mr-2 h-4 w-4" />
              Tambah Pelanggaran
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tanggal</TableHead>
                <TableHead>Jenis Pelanggaran</TableHead>
                <TableHead>Skor (-)</TableHead>
                <TableHead>Guru Pencatat</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {violations.map((violation, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{violation.tanggal}</TableCell>
                  <TableCell>{violation.jenis}</TableCell>
                  <TableCell className="text-red-600 font-bold">{violation.skor}</TableCell>
                  <TableCell>{violation.guru}</TableCell>
                  <TableCell>
                    <Badge variant={violation.status === "Diselesaikan" ? "outline" : "secondary"}>
                      {violation.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Achievements Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Catatan Prestasi</CardTitle>
              <CardDescription>Riwayat prestasi siswa</CardDescription>
            </div>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Plus className="mr-2 h-4 w-4" />
              Tambah Prestasi
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tanggal</TableHead>
                <TableHead>Jenis Prestasi</TableHead>
                <TableHead>Skor (+)</TableHead>
                <TableHead>Pembimbing</TableHead>
                <TableHead>Keterangan</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {achievements.map((achievement, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{achievement.tanggal}</TableCell>
                  <TableCell>{achievement.jenis}</TableCell>
                  <TableCell className="text-emerald-600 font-bold">+{achievement.skor}</TableCell>
                  <TableCell>{achievement.pembimbing}</TableCell>
                  <TableCell>{achievement.keterangan}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-2 md:gap-4">
        <Button variant="outline" className="w-full md:w-auto bg-transparent">
          <Download className="mr-2 h-4 w-4" />
          Cetak Rekap (PDF)
        </Button>
        <Button variant="outline" className="w-full md:w-auto bg-transparent">
          <Send className="mr-2 h-4 w-4" />
          Kirim laporan ke Orang Tua
        </Button>
      </div>

      {/* Islamic Quote */}
      <Card className="border-amber-200 bg-gradient-to-r from-amber-50 to-emerald-50">
        <CardContent className="pt-6">
          <p className="text-center text-lg font-semibold text-emerald-800">
            "Sesungguhnya Allah mencintai orang-orang yang berbuat baik."
          </p>
          <p className="text-center text-sm text-muted-foreground">(QS. Al-Baqarah: 195)</p>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-center text-sm text-muted-foreground">
        <p className="font-medium text-emerald-700">
          Prestasi adalah bukti kerja keras, pelanggaran adalah peluang untuk memperbaiki diri.
        </p>
      </div>
    </div>
  )
}
