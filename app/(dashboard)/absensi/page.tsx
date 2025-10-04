import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, Send, CheckCircle, FileText, Stethoscope, AlertCircle } from "lucide-react"
import { AttendanceCalendar } from "@/components/attendance/attendance-calendar"

const attendanceData = [
  { date: "01/03/2025", status: "Hadir", notes: "-" },
  { date: "03/03/2025", status: "Izin", notes: "Acara keluarga" },
  { date: "04/03/2025", status: "Hadir", notes: "-" },
  { date: "05/03/2025", status: "Hadir", notes: "-" },
  { date: "10/03/2025", status: "Sakit", notes: "Flu" },
  { date: "11/03/2025", status: "Hadir", notes: "-" },
  { date: "21/03/2025", status: "Alpha", notes: "Tanpa keterangan" },
  { date: "25/03/2025", status: "Hadir", notes: "-" },
]

const stats = [
  { label: "Hadir", value: "22 Hari", icon: CheckCircle, color: "text-green-600", bgColor: "bg-green-50" },
  { label: "Izin", value: "2 Hari", icon: FileText, color: "text-blue-600", bgColor: "bg-blue-50" },
  { label: "Sakit", value: "1 Hari", icon: Stethoscope, color: "text-yellow-600", bgColor: "bg-yellow-50" },
  { label: "Alpha", value: "1 Hari", icon: AlertCircle, color: "text-red-600", bgColor: "bg-red-50" },
]

export default function AbsensiPage() {
  return (
    <div className="space-y-6 px-2 md:px-0">
      {/* Header */}
      <div className="mb-2">
        <h1 className="text-xl md:text-3xl font-bold text-primary">Absensi Siswa</h1>
        <p className="text-sm md:text-base text-muted-foreground mt-1">Data kehadiran siswa berdasarkan semester dan bulan</p>
      </div>
      {/* Filter: tahun, semester, bulan */}
      <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto mb-2">
        <Select defaultValue="2024-2025">
          <SelectTrigger className="w-full sm:w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2024-2025">2024/2025</SelectItem>
            <SelectItem value="2023-2024">2023/2024</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="genap">
          <SelectTrigger className="w-full sm:w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="genap">Genap</SelectItem>
            <SelectItem value="ganjil">Ganjil</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="maret">
          <SelectTrigger className="w-full sm:w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="maret">Maret 2025</SelectItem>
            <SelectItem value="februari">Februari 2025</SelectItem>
            <SelectItem value="januari">Januari 2025</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Student Info */}
      <Card className="border-primary/20">
        <CardContent className="p-4 md:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-xs md:text-sm text-muted-foreground">Nama</p>
              <p className="font-semibold text-base md:text-lg">Ahmad Fauzi</p>
            </div>
            <div>
              <p className="text-xs md:text-sm text-muted-foreground">Kelas</p>
              <p className="font-semibold text-base md:text-lg">XI IPA 2</p>
            </div>
            <div>
              <p className="text-xs md:text-sm text-muted-foreground">NIS</p>
              <p className="font-semibold text-base md:text-lg">2021456</p>
            </div>
            <div>
              <p className="text-xs md:text-sm text-muted-foreground">Persentase Kehadiran</p>
              <p className="font-semibold text-base md:text-lg text-primary">95%</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.label} className="border-primary/10">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-lg md:text-2xl font-bold">{stat.value}</p>
                  </div>
                  <div className={`${stat.bgColor} p-2 md:p-3 rounded-lg`}>
                    <Icon className={`w-5 h-5 md:w-6 md:h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Calendar View */}
      <AttendanceCalendar />

      {/* Attendance Detail Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base md:text-lg">Detail Kehadiran</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px] md:min-w-0">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 md:py-3 px-2 md:px-4 font-semibold text-xs md:text-sm">Tanggal</th>
                  <th className="text-center py-2 md:py-3 px-2 md:px-4 font-semibold text-xs md:text-sm">Status</th>
                  <th className="text-left py-2 md:py-3 px-2 md:px-4 font-semibold text-xs md:text-sm">Keterangan</th>
                </tr>
              </thead>
              <tbody>
                {attendanceData.map((record, index) => (
                  <tr key={index} className="border-b border-border hover:bg-muted/50">
                    <td className="py-2 md:py-4 px-2 md:px-4 font-medium">{record.date}</td>
                    <td className="py-2 md:py-4 px-2 md:px-4 text-center">
                      <Badge
                        className={
                          record.status === "Hadir"
                            ? "bg-green-100 text-green-700 border-0"
                            : record.status === "Izin"
                              ? "bg-blue-100 text-blue-700 border-0"
                              : record.status === "Sakit"
                                ? "bg-yellow-100 text-yellow-700 border-0"
                                : "bg-red-100 text-red-700 border-0"
                        }
                      >
                        {record.status}
                      </Badge>
                    </td>
                    <td className="py-2 md:py-4 px-2 md:px-4 text-xs md:text-sm text-muted-foreground">{record.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex flex-col md:flex-row gap-2 md:gap-4">
        <Button className="w-full md:w-auto bg-primary hover:bg-primary-hover">
          <Download className="w-4 h-4 mr-2" />
          Unduh Laporan Absensi (PDF)
        </Button>
        <Button variant="outline" className="w-full md:w-auto">
          <Send className="w-4 h-4 mr-2" />
          Kirim Rekap Absensi ke Orang Tua
        </Button>
      </div>

      {/* Motivational Quote */}
      <Card className="bg-accent-light border-primary/20">
        <CardContent className="p-4">
          <p className="text-xs md:text-sm text-center text-muted-foreground italic">"Disiplin adalah bagian dari iman."</p>
        </CardContent>
      </Card>
    </div>
  )
}
