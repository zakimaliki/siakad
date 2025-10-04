import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BookOpen, AlertTriangle, CheckCircle, Download, Send, Plus } from "lucide-react"

export default function CatatanBKPage() {
  const summaryData = [
    { label: "Jumlah Konseling", value: "2 Sesi", icon: BookOpen, color: "bg-blue-500" },
    { label: "Pelanggaran", value: "1 Kasus", icon: AlertTriangle, color: "bg-red-500" },
    { label: "Pembinaan / Motivasi", value: "1 Catatan", icon: CheckCircle, color: "bg-emerald-600" },
  ]

  const bkRecords = [
    {
      tanggal: "05/03/2025",
      gurubk: "Ustadzah Nur Aini",
      jenis: "Konseling",
      ringkasan: "Diskusi tentang manajemen waktu belajar.",
      status: "Selesai",
    },
    {
      tanggal: "12/03/2025",
      gurubk: "Ustadz H. Abdul Karim",
      jenis: "Pelanggaran",
      ringkasan: "Terlambat masuk kelas lebih dari 3 kali.",
      status: "Proses",
    },
    {
      tanggal: "20/03/2025",
      gurubk: "Ustadz Fadhlan",
      jenis: "Pembinaan",
      ringkasan: "Diberi motivasi untuk ikut lomba kaligrafi.",
      status: "Selesai",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-emerald-800">Catatan BK</h1>
        <p className="text-muted-foreground">Riwayat bimbingan konseling, pelanggaran, dan pembinaan siswa.</p>
      </div>

      {/* Student Info Card */}
      <Card className="border-emerald-200 bg-gradient-to-br from-emerald-50 to-white">
        <CardHeader>
          <CardTitle className="text-emerald-800">Informasi Siswa</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-4">
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
            <p className="text-sm text-muted-foreground">Total Catatan BK Semester Ini</p>
            <p className="text-2xl font-bold text-emerald-700">3</p>
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

      {/* BK Records Table */}
      <Card>
        <CardHeader>
          <div>
            <CardTitle>Catatan Bimbingan Konseling</CardTitle>
            <CardDescription>Riwayat lengkap catatan BK siswa</CardDescription>
          </div>
          <div className="mt-4 flex flex-col md:flex-row gap-2 w-full">
            <Button className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-700">
              <Plus className="mr-2 h-4 w-4" />
              Tambah Catatan Baru
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tanggal</TableHead>
                <TableHead>Guru BK</TableHead>
                <TableHead>Jenis Catatan</TableHead>
                <TableHead>Ringkasan</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bkRecords.map((record, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{record.tanggal}</TableCell>
                  <TableCell>{record.gurubk}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        record.jenis === "Konseling"
                          ? "default"
                          : record.jenis === "Pelanggaran"
                            ? "destructive"
                            : "secondary"
                      }
                    >
                      {record.jenis}
                    </Badge>
                  </TableCell>
                  <TableCell>{record.ringkasan}</TableCell>
                  <TableCell>
                    <Badge variant={record.status === "Selesai" ? "outline" : "secondary"}>{record.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" className="w-full md:w-auto">
                      Detail
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="mt-6 flex flex-col md:flex-row gap-2 md:gap-4">
            <Button variant="outline" className="w-full md:w-auto bg-transparent">
              <Download className="mr-2 h-4 w-4" />
              Cetak Catatan BK (PDF)
            </Button>
            <Button variant="outline" className="w-full md:w-auto bg-transparent">
              <Send className="mr-2 h-4 w-4" />
              Kirim ke Orang Tua / Wali
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Islamic Quote */}
      <Card className="border-amber-200 bg-gradient-to-r from-amber-50 to-emerald-50">
        <CardContent className="pt-6">
          <p className="text-center text-lg font-semibold text-emerald-800">
            "Ingatlah, dengan mengingat Allah hati menjadi tenang."
          </p>
          <p className="text-center text-sm text-muted-foreground">(QS. Ar-Ra'd: 28)</p>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-center text-sm text-muted-foreground">
        <p className="font-medium text-emerald-700">
          Bimbingan adalah wujud kasih sayang dalam mendidik generasi berakhlak mulia.
        </p>
      </div>
    </div>
  )
}
