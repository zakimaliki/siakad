import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, Send, BookOpen } from "lucide-react"
import { GradesChart } from "@/components/grades/grades-chart"

const grades = [
  {
    subject: "Fiqih",
    teacher: "Ustadz H. Abdul Karim",
    score: 85,
    grade: "B",
    notes: "Cukup baik, tingkatkan konsistensi.",
  },
  { subject: "Aqidah Akhlak", teacher: "Ustadzah Nur Aini", score: 92, grade: "A", notes: "Aktif dan disiplin." },
  { subject: "Bahasa Arab", teacher: "Ustadz Fadhlan", score: 90, grade: "A-", notes: "Penguasaan kosakata bagus." },
  { subject: "Matematika", teacher: "Ustadz Budi Santoso", score: 78, grade: "B-", notes: "Perlu latihan tambahan." },
  {
    subject: "IPA",
    teacher: "Ustadzah Siti Maryam",
    score: 80,
    grade: "B",
    notes: "Baik, perlu fokus saat praktikum.",
  },
  { subject: "Bahasa Inggris", teacher: "Ustadzah Rahmi", score: 88, grade: "B+", notes: "Komunikasi lancar." },
]

export default function NilaiPage() {
  const averageScore = (grades.reduce((sum, g) => sum + g.score, 0) / grades.length).toFixed(2)

  return (
    <div className="space-y-6 px-2 md:px-0">
      {/* Header */}
      <div className="mb-2">
        <h1 className="text-xl md:text-3xl font-bold text-primary">Nilai Semester</h1>
        <p className="text-sm md:text-base text-muted-foreground mt-1">Laporan nilai mata pelajaran per semester siswa</p>
      </div>
      {/* Filter: tahun, semester */}
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
      </div>

      {/* Student Summary */}
      <Card className="border-primary/20">
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Nama Siswa</p>
                  <p className="font-semibold text-lg">Ahmad Fauzi</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Kelas</p>
                  <p className="font-semibold text-lg">XI IPA 2</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">NIS</p>
                  <p className="font-semibold text-lg">2021456</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Rata-rata</p>
                  <p className="font-semibold text-lg text-primary">{averageScore} (B+)</p>
                </div>
              </div>
            </div>
            <div className="bg-accent-light border-l-4 border-primary rounded-lg p-4">
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground text-balance">
                    "Barangsiapa menempuh jalan untuk mencari ilmu, Allah akan memudahkan baginya jalan menuju surga."
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">(HR. Muslim)</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Grades Table */}
      <Card>
        <CardHeader>
          <CardTitle>Daftar Nilai Mata Pelajaran</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-sm">Mata Pelajaran</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">Guru Pengampu</th>
                  <th className="text-center py-3 px-4 font-semibold text-sm">Nilai Angka</th>
                  <th className="text-center py-3 px-4 font-semibold text-sm">Nilai Huruf</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">Predikat / Catatan Guru</th>
                </tr>
              </thead>
              <tbody>
                {grades.map((grade, index) => (
                  <tr key={index} className="border-b border-border hover:bg-muted/50">
                    <td className="py-4 px-4 font-medium">{grade.subject}</td>
                    <td className="py-4 px-4 text-muted-foreground">{grade.teacher}</td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-lg font-bold">{grade.score}</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <Badge
                        className={
                          grade.score >= 90
                            ? "bg-green-100 text-green-700 border-0"
                            : grade.score >= 80
                              ? "bg-blue-100 text-blue-700 border-0"
                              : grade.score >= 70
                                ? "bg-yellow-100 text-yellow-700 border-0"
                                : "bg-red-100 text-red-700 border-0"
                        }
                      >
                        {grade.grade}
                      </Badge>
                    </td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">{grade.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Visual Representation */}
      <GradesChart grades={grades} />

      {/* Actions */}
      <div className="flex flex-col md:flex-row gap-2 md:gap-4">
        <Button className="w-full md:w-auto bg-primary hover:bg-primary-hover">
          <Download className="w-4 h-4 mr-2" />
          Unduh Rapor (PDF)
        </Button>
        <Button variant="outline" className="w-full md:w-auto">
          <Send className="w-4 h-4 mr-2" />
          Kirim ke Wali Kelas
        </Button>
      </div>

      {/* Info Note */}
      <Card className="bg-muted/50 border-primary/20">
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground text-center">
            Nilai bersifat rahasia, hanya dapat diakses oleh siswa, orang tua, dan guru terkait.
          </p>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-center pt-6">
        <p className="text-sm text-muted-foreground italic">"Ilmu adalah cahaya yang menerangi kehidupan."</p>
      </div>
    </div>
  )
}
