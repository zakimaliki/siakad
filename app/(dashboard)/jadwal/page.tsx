import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, Clock, BookOpen, User, MapPin } from "lucide-react"

const schedule = {
  Senin: [
    { time: "07:00 - 07:45", subject: "Upacara Bendera", teacher: "-", room: "Lapangan", type: "ceremony" },
    { time: "07:45 - 08:30", subject: "Matematika", teacher: "Ustadz Budi Santoso", room: "XI IPA 2", type: "lesson" },
    { time: "08:30 - 09:15", subject: "Matematika", teacher: "Ustadz Budi Santoso", room: "XI IPA 2", type: "lesson" },
    { time: "09:15 - 09:30", subject: "Istirahat", teacher: "-", room: "-", type: "break" },
    { time: "09:30 - 10:15", subject: "Fisika", teacher: "Ustadzah Siti Maryam", room: "XI IPA 2", type: "lesson" },
    { time: "10:15 - 11:00", subject: "Fisika", teacher: "Ustadzah Siti Maryam", room: "XI IPA 2", type: "lesson" },
    { time: "11:00 - 11:30", subject: "Istirahat & Shalat Dzuhur", teacher: "-", room: "Masjid", type: "break" },
    { time: "11:30 - 12:15", subject: "Bahasa Indonesia", teacher: "Ustadzah Rahmi", room: "XI IPA 2", type: "lesson" },
    { time: "12:15 - 13:00", subject: "Bahasa Indonesia", teacher: "Ustadzah Rahmi", room: "XI IPA 2", type: "lesson" },
  ],
  Selasa: [
    { time: "07:00 - 07:45", subject: "Fiqih", teacher: "Ustadz H. Abdul Karim", room: "XI IPA 2", type: "lesson" },
    { time: "07:45 - 08:30", subject: "Fiqih", teacher: "Ustadz H. Abdul Karim", room: "XI IPA 2", type: "lesson" },
    { time: "08:30 - 09:15", subject: "Kimia", teacher: "Ustadz Ahmad Firdaus", room: "Lab Kimia", type: "lesson" },
    { time: "09:15 - 09:30", subject: "Istirahat", teacher: "-", room: "-", type: "break" },
    { time: "09:30 - 10:15", subject: "Kimia", teacher: "Ustadz Ahmad Firdaus", room: "Lab Kimia", type: "lesson" },
    { time: "10:15 - 11:00", subject: "Bahasa Arab", teacher: "Ustadzah Nur Aini", room: "XI IPA 2", type: "lesson" },
    { time: "11:00 - 11:30", subject: "Istirahat & Shalat Dzuhur", teacher: "-", room: "Masjid", type: "break" },
    { time: "11:30 - 12:15", subject: "Bahasa Arab", teacher: "Ustadzah Nur Aini", room: "XI IPA 2", type: "lesson" },
    { time: "12:15 - 13:00", subject: "Biologi", teacher: "Ustadzah Siti Maryam", room: "XI IPA 2", type: "lesson" },
  ],
  Rabu: [
    { time: "07:00 - 07:45", subject: "Aqidah Akhlak", teacher: "Ustadzah Nur Aini", room: "XI IPA 2", type: "lesson" },
    { time: "07:45 - 08:30", subject: "Aqidah Akhlak", teacher: "Ustadzah Nur Aini", room: "XI IPA 2", type: "lesson" },
    { time: "08:30 - 09:15", subject: "Matematika", teacher: "Ustadz Budi Santoso", room: "XI IPA 2", type: "lesson" },
    { time: "09:15 - 09:30", subject: "Istirahat", teacher: "-", room: "-", type: "break" },
    { time: "09:30 - 10:15", subject: "Matematika", teacher: "Ustadz Budi Santoso", room: "XI IPA 2", type: "lesson" },
    { time: "10:15 - 11:00", subject: "Bahasa Inggris", teacher: "Ustadzah Rahmi", room: "XI IPA 2", type: "lesson" },
    { time: "11:00 - 11:30", subject: "Istirahat & Shalat Dzuhur", teacher: "-", room: "Masjid", type: "break" },
    { time: "11:30 - 12:15", subject: "Bahasa Inggris", teacher: "Ustadzah Rahmi", room: "XI IPA 2", type: "lesson" },
    { time: "12:15 - 13:00", subject: "Sejarah", teacher: "Ustadz Fadhlan", room: "XI IPA 2", type: "lesson" },
  ],
  Kamis: [
    { time: "07:00 - 07:45", subject: "Biologi", teacher: "Ustadzah Siti Maryam", room: "Lab Biologi", type: "lesson" },
    { time: "07:45 - 08:30", subject: "Biologi", teacher: "Ustadzah Siti Maryam", room: "Lab Biologi", type: "lesson" },
    { time: "08:30 - 09:15", subject: "Fisika", teacher: "Ustadzah Siti Maryam", room: "XI IPA 2", type: "lesson" },
    { time: "09:15 - 09:30", subject: "Istirahat", teacher: "-", room: "-", type: "break" },
    { time: "09:30 - 10:15", subject: "Fisika", teacher: "Ustadzah Siti Maryam", room: "XI IPA 2", type: "lesson" },
    { time: "10:15 - 11:00", subject: "PKN", teacher: "Ustadz Ahmad Firdaus", room: "XI IPA 2", type: "lesson" },
    { time: "11:00 - 11:30", subject: "Istirahat & Shalat Dzuhur", teacher: "-", room: "Masjid", type: "break" },
    { time: "11:30 - 12:15", subject: "Seni Budaya", teacher: "Ustadzah Rahmi", room: "Ruang Seni", type: "lesson" },
    { time: "12:15 - 13:00", subject: "Seni Budaya", teacher: "Ustadzah Rahmi", room: "Ruang Seni", type: "lesson" },
  ],
  Jumat: [
    {
      time: "07:00 - 07:45",
      subject: "Tahfidz Quran",
      teacher: "Ustadz H. Abdul Karim",
      room: "Masjid",
      type: "lesson",
    },
    {
      time: "07:45 - 08:30",
      subject: "Tahfidz Quran",
      teacher: "Ustadz H. Abdul Karim",
      room: "Masjid",
      type: "lesson",
    },
    { time: "08:30 - 09:15", subject: "Penjaskes", teacher: "Ustadz Budi Santoso", room: "Lapangan", type: "lesson" },
    { time: "09:15 - 09:30", subject: "Istirahat", teacher: "-", room: "-", type: "break" },
    { time: "09:30 - 10:15", subject: "Penjaskes", teacher: "Ustadz Budi Santoso", room: "Lapangan", type: "lesson" },
    { time: "10:15 - 11:00", subject: "Persiapan Shalat Jumat", teacher: "-", room: "Masjid", type: "break" },
  ],
}

const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"]

export default function JadwalPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="mb-2">
          <h1 className="text-xl md:text-3xl font-bold text-primary">Jadwal Pelajaran</h1>
          <p className="text-sm md:text-base text-muted-foreground mt-1">Jadwal mata pelajaran mingguan kelas XI IPA 2</p>
        </div>
        {/* Filter dan aksi */}
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
          <Button className="w-full sm:w-auto bg-primary hover:bg-primary-hover">
            <Download className="w-4 h-4 mr-2" />
            Unduh PDF
          </Button>
        </div>
      </div>

      {/* Class Info */}
      <Card className="border-primary/20">
        <CardContent className="p-6">
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Kelas</p>
              <p className="font-semibold text-lg">XI IPA 2</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Wali Kelas</p>
              <p className="font-semibold text-lg">Ustadzah Siti Maryam</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Jumlah Siswa</p>
              <p className="font-semibold text-lg">32 Siswa</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Semester</p>
              <p className="font-semibold text-lg">Genap 2024/2025</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Schedule by Day */}
      {days.map((day) => (
        <Card key={day}>
          <CardHeader className="bg-primary/5">
            <CardTitle className="text-xl text-primary">{day}</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="text-left py-3 px-4 font-semibold text-sm w-32">Waktu</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm">Mata Pelajaran</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm">Guru Pengampu</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm">Ruangan</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule[day as keyof typeof schedule].map((item, index) => (
                    <tr
                      key={index}
                      className={`border-b border-border hover:bg-muted/50 ${item.type === "break" ? "bg-yellow-50/50" : item.type === "ceremony" ? "bg-blue-50/50" : ""
                        }`}
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2 text-sm font-medium">
                          <Clock className="w-4 h-4 text-primary" />
                          {item.time}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          {item.type === "lesson" && <BookOpen className="w-4 h-4 text-primary" />}
                          <span className="font-semibold">{item.subject}</span>
                          {item.type === "break" && (
                            <Badge className="bg-yellow-100 text-yellow-700 border-0 ml-2">Istirahat</Badge>
                          )}
                          {item.type === "ceremony" && (
                            <Badge className="bg-blue-100 text-blue-700 border-0 ml-2">Upacara</Badge>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        {item.teacher !== "-" && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <User className="w-4 h-4" />
                            {item.teacher}
                          </div>
                        )}
                      </td>
                      <td className="py-4 px-4">
                        {item.room !== "-" && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            {item.room}
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Legend */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Keterangan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-white border border-border" />
              <span className="text-sm">Pelajaran Regular</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-yellow-50 border border-yellow-200" />
              <span className="text-sm">Istirahat</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-blue-50 border border-blue-200" />
              <span className="text-sm">Upacara/Kegiatan Khusus</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notes */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg">Catatan Penting</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Siswa wajib hadir 15 menit sebelum pelajaran dimulai</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Shalat Dzuhur berjamaah wajib diikuti oleh seluruh siswa</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Perubahan jadwal akan diinformasikan melalui pengumuman resmi</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Siswa wajib membawa perlengkapan sesuai mata pelajaran</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Quote */}
      <Card className="bg-accent-light border-primary/20">
        <CardContent className="p-4">
          <p className="text-sm text-center text-muted-foreground italic">
            "Menuntut ilmu adalah kewajiban bagi setiap muslim." (HR. Ibnu Majah)
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
