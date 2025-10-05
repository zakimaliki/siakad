import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Download, CheckCircle, XCircle, FileText, Stethoscope } from "lucide-react"

const teacherClasses = [
  { id: 1, name: "X IPA 1", studentCount: 32 },
  { id: 2, name: "X IPA 2", studentCount: 30 },
  { id: 3, name: "XI IPA 1", studentCount: 28 },
  { id: 4, name: "XI IPA 2", studentCount: 31 },
  { id: 5, name: "XII IPA 1", studentCount: 29 },
]

const students = [
  {
    nis: "2021456",
    name: "Ahmad Fauzi",
    class: "XI IPA 2",
    hadir: 22,
    izin: 2,
    sakit: 1,
    alpha: 1,
    total: 26,
    percentage: 85,
  },
  {
    nis: "2021457",
    name: "Fatimah Azzahra",
    class: "XI IPA 2",
    hadir: 25,
    izin: 1,
    sakit: 0,
    alpha: 0,
    total: 26,
    percentage: 96,
  },
  {
    nis: "2021458",
    name: "Muhammad Rizki",
    class: "XI IPA 2",
    hadir: 20,
    izin: 3,
    sakit: 2,
    alpha: 1,
    total: 26,
    percentage: 77,
  },
  {
    nis: "2021459",
    name: "Siti Nurhaliza",
    class: "XI IPA 2",
    hadir: 24,
    izin: 1,
    sakit: 1,
    alpha: 0,
    total: 26,
    percentage: 92,
  },
  {
    nis: "2021460",
    name: "Abdullah Rahman",
    class: "XI IPA 2",
    hadir: 23,
    izin: 2,
    sakit: 1,
    alpha: 0,
    total: 26,
    percentage: 88,
  },
  {
    nis: "2021461",
    name: "Aisyah Putri",
    class: "XI IPA 2",
    hadir: 26,
    izin: 0,
    sakit: 0,
    alpha: 0,
    total: 26,
    percentage: 100,
  },
  {
    nis: "2021462",
    name: "Umar Faruq",
    class: "XI IPA 2",
    hadir: 19,
    izin: 2,
    sakit: 3,
    alpha: 2,
    total: 26,
    percentage: 73,
  },
  {
    nis: "2021463",
    name: "Khadijah Salsabila",
    class: "XI IPA 2",
    hadir: 25,
    izin: 1,
    sakit: 0,
    alpha: 0,
    total: 26,
    percentage: 96,
  },
]

export default function AbsensiSiswaPage() {
  return (
    <div className="space-y-6 px-2 md:px-0">
      {/* Header */}
      <div className="mb-2">
        <h1 className="text-xl md:text-3xl font-bold text-primary">Absensi Siswa</h1>
        <p className="text-sm md:text-base text-muted-foreground mt-1">Data kehadiran siswa di kelas yang Anda ampu</p>
      </div>

      {/* Filter Section */}
      <Card className="border-primary/20">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label>Pilih Kelas</Label>
              <Select defaultValue="XI IPA 2">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {teacherClasses.map((cls) => (
                    <SelectItem key={cls.id} value={cls.name}>
                      {cls.name} ({cls.studentCount} siswa)
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Tahun Ajaran</Label>
              <Select defaultValue="2024-2025">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024-2025">2024/2025</SelectItem>
                  <SelectItem value="2023-2024">2023/2024</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Semester</Label>
              <Select defaultValue="genap">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="genap">Genap</SelectItem>
                  <SelectItem value="ganjil">Ganjil</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Bulan</Label>
              <Select defaultValue="maret">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="maret">Maret 2025</SelectItem>
                  <SelectItem value="februari">Februari 2025</SelectItem>
                  <SelectItem value="januari">Januari 2025</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Rata-rata Kehadiran</p>
                <p className="text-3xl font-bold text-primary">
                  {(students.reduce((sum, s) => sum + s.percentage, 0) / students.length).toFixed(0)}%
                </p>
              </div>
              <div className="bg-primary/10 p-3 rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Hadir</p>
                <p className="text-3xl font-bold text-green-600">{students.reduce((sum, s) => sum + s.hadir, 0)}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Izin/Sakit</p>
                <p className="text-3xl font-bold text-yellow-600">
                  {students.reduce((sum, s) => sum + s.izin + s.sakit, 0)}
                </p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Stethoscope className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Alpha</p>
                <p className="text-3xl font-bold text-red-600">{students.reduce((sum, s) => sum + s.alpha, 0)}</p>
              </div>
              <div className="bg-red-100 p-3 rounded-lg">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Student Attendance Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Rekap Absensi Siswa - XI IPA 2</CardTitle>
            <Button className="bg-primary hover:bg-primary-hover">
              <Download className="w-4 h-4 mr-2" />
              Unduh Rekap
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-sm">No</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">NIS</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">Nama Siswa</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">Kelas</th>
                  <th className="text-center py-3 px-4 font-semibold text-sm">Hadir</th>
                  <th className="text-center py-3 px-4 font-semibold text-sm">Izin</th>
                  <th className="text-center py-3 px-4 font-semibold text-sm">Sakit</th>
                  <th className="text-center py-3 px-4 font-semibold text-sm">Alpha</th>
                  <th className="text-center py-3 px-4 font-semibold text-sm">Total</th>
                  <th className="text-center py-3 px-4 font-semibold text-sm">Persentase</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={student.nis} className="border-b border-border hover:bg-muted/50">
                    <td className="py-3 px-4">{index + 1}</td>
                    <td className="py-3 px-4 font-medium">{student.nis}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg" />
                          <AvatarFallback className="bg-primary/10 text-primary text-xs">
                            {student.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{student.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">{student.class}</td>
                    <td className="py-3 px-4 text-center">
                      <Badge className="bg-green-100 text-green-700 border-0">{student.hadir}</Badge>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <Badge className="bg-blue-100 text-blue-700 border-0">{student.izin}</Badge>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <Badge className="bg-yellow-100 text-yellow-700 border-0">{student.sakit}</Badge>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <Badge className="bg-red-100 text-red-700 border-0">{student.alpha}</Badge>
                    </td>
                    <td className="py-3 px-4 text-center font-medium">{student.total}</td>
                    <td className="py-3 px-4 text-center">
                      <span
                        className={`font-bold ${
                          student.percentage >= 90
                            ? "text-green-600"
                            : student.percentage >= 75
                              ? "text-blue-600"
                              : student.percentage >= 60
                                ? "text-yellow-600"
                                : "text-red-600"
                        }`}
                      >
                        {student.percentage}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Info Note */}
      <Card className="bg-accent-light border-primary/20">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <FileText className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-foreground">Catatan Penting:</p>
              <p className="text-sm text-muted-foreground mt-1">
                Siswa dengan persentase kehadiran di bawah 75% akan mendapat peringatan. Harap segera koordinasi dengan
                wali kelas dan orang tua siswa.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quote */}
      <Card className="bg-accent-light border-primary/20">
        <CardContent className="p-4">
          <p className="text-sm text-center text-muted-foreground italic">
            "Kehadiran adalah bentuk komitmen terhadap ilmu dan tanggung jawab."
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
