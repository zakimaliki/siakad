import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, Calendar, CheckCircle, Clock, Send, Heart } from "lucide-react"

const counselingSessions = [
  {
    date: "15 Februari 2025",
    topic: "Konsultasi Pemilihan Jurusan Kuliah",
    counselor: "Ustadzah Nur Hidayah, S.Pd",
    status: "Selesai",
    notes: "Siswa menunjukkan minat di bidang kedokteran. Disarankan untuk fokus pada mata pelajaran sains.",
  },
  {
    date: "10 Januari 2025",
    topic: "Motivasi Belajar",
    counselor: "Ustadz Ahmad Firdaus, M.Pd",
    status: "Selesai",
    notes: "Siswa mengalami penurunan motivasi. Diberikan strategi manajemen waktu dan target belajar.",
  },
  {
    date: "05 Desember 2024",
    topic: "Adaptasi Sosial di Kelas",
    counselor: "Ustadzah Nur Hidayah, S.Pd",
    status: "Selesai",
    notes: "Siswa sudah mulai beradaptasi dengan baik. Disarankan untuk lebih aktif dalam kegiatan kelompok.",
  },
]

const upcomingSessions = [
  {
    date: "20 Maret 2025",
    time: "10:00 WIB",
    topic: "Persiapan Ujian Akhir Semester",
    counselor: "Ustadzah Nur Hidayah, S.Pd",
  },
]

export default function KonselingPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Konseling BK</h1>
          <p className="text-muted-foreground mt-1">Layanan bimbingan dan konseling untuk siswa</p>
        </div>
        <Button className="bg-primary hover:bg-primary-hover">
          <MessageSquare className="w-4 h-4 mr-2" />
          Ajukan Konseling Baru
        </Button>
      </div>

      {/* Hero Banner */}
      <Card className="islamic-pattern border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary">Kami Siap Mendengarkan</h2>
              <p className="text-muted-foreground mt-1">
                Konseling adalah ruang aman untuk berbagi, berkembang, dan menemukan solusi bersama
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Sessions */}
      {upcomingSessions.length > 0 && (
        <Card className="border-blue-200 bg-blue-50/50">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              <CardTitle className="text-lg">Jadwal Konseling Mendatang</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingSessions.map((session, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-white border border-blue-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">{session.date.split(" ")[0]}</p>
                      <p className="text-xs text-muted-foreground">{session.date.split(" ")[1]}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{session.topic}</h4>
                      <p className="text-sm text-muted-foreground">{session.counselor}</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                        <Clock className="w-3 h-3" />
                        <span>{session.time}</span>
                      </div>
                    </div>
                  </div>
                  <Badge className="bg-blue-100 text-blue-700 border-0">Terjadwal</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Counseling History */}
      <Card>
        <CardHeader>
          <CardTitle>Riwayat Konseling</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {counselingSessions.map((session, index) => (
              <div key={index} className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-foreground">{session.topic}</h4>
                      <Badge className="bg-green-100 text-green-700 border-0">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        {session.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{session.counselor}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                      <Calendar className="w-3 h-3" />
                      <span>{session.date}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-muted/50 p-3 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Catatan:</span> {session.notes}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Request Form */}
      <Card>
        <CardHeader>
          <CardTitle>Ajukan Permintaan Konseling</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Topik Konseling</label>
            <Textarea placeholder="Jelaskan topik atau masalah yang ingin Anda konsultasikan..." className="min-h-32" />
          </div>
          <div className="bg-accent-light border-l-4 border-primary rounded-lg p-4">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Catatan:</span> Semua informasi yang Anda bagikan akan
              dijaga kerahasiaannya. Guru BK akan menghubungi Anda untuk menjadwalkan sesi konseling.
            </p>
          </div>
          <Button className="w-full bg-primary hover:bg-primary-hover">
            <Send className="w-4 h-4 mr-2" />
            Kirim Permintaan
          </Button>
        </CardContent>
      </Card>

      {/* Contact BK */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg">Kontak Guru BK</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">Ustadzah Nur Hidayah, S.Pd</h4>
              <p className="text-sm text-muted-foreground mb-1">Koordinator BK</p>
              <p className="text-sm text-muted-foreground">📞 +62 812-3456-7890</p>
              <p className="text-sm text-muted-foreground">✉️ nurhidayah@manurulhuda.sch.id</p>
            </div>
            <div className="p-4 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">Ustadz Ahmad Firdaus, M.Pd</h4>
              <p className="text-sm text-muted-foreground mb-1">Guru BK</p>
              <p className="text-sm text-muted-foreground">📞 +62 813-9876-5432</p>
              <p className="text-sm text-muted-foreground">✉️ ahmadfirdaus@manurulhuda.sch.id</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quote */}
      <Card className="bg-accent-light border-primary/20">
        <CardContent className="p-4">
          <p className="text-sm text-center text-muted-foreground italic">
            "Allah tidak membebani seseorang melainkan sesuai dengan kesanggupannya." (QS. Al-Baqarah: 286)
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
