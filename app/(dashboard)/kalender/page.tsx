import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, CalendarIcon, BookOpen } from "lucide-react"
import { AcademicCalendar } from "@/components/calendar/academic-calendar"

const upcomingEvents = [
  { date: "03/03/2025", title: "Ujian Tengah Semester Genap", type: "Akademik" },
  { date: "10/03/2025", title: "Isra Mi'raj 1446 H", type: "Keagamaan" },
  { date: "18/03/2025", title: "Libur Nasional", type: "Libur" },
  { date: "25/03/2025", title: "Pengumuman Nilai Semester", type: "Akademik" },
  { date: "02/04/2025", title: "Pesantren Kilat Ramadhan", type: "Keagamaan" },
]

export default function KalenderPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-2">
        <h1 className="text-xl md:text-3xl font-bold text-primary">Kalender Akademik</h1>
        <p className="text-sm md:text-base text-muted-foreground mt-1">Lihat jadwal kegiatan, ujian, libur, dan acara madrasah</p>
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

      {/* Hero Banner */}
      <Card className="islamic-pattern border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <CalendarIcon className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary">Mengatur Waktu dengan Ilmu dan Iman</h2>
              <p className="text-muted-foreground mt-1">Jadwal lengkap kegiatan akademik dan keagamaan madrasah</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Calendar */}
      <AcademicCalendar />

      {/* Upcoming Events */}
      <Card>
        <CardHeader>
          <CardTitle>Kegiatan Mendatang</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">{event.date.split("/")[0]}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(event.date.split("/").reverse().join("-")).toLocaleDateString("id-ID", {
                        month: "short",
                      })}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{event.title}</h4>
                    <p className="text-sm text-muted-foreground">{event.type}</p>
                  </div>
                </div>
                <Badge
                  className={
                    event.type === "Akademik"
                      ? "bg-green-100 text-green-700 border-0"
                      : event.type === "Keagamaan"
                        ? "bg-blue-100 text-blue-700 border-0"
                        : "bg-yellow-100 text-yellow-700 border-0"
                  }
                >
                  {event.type}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex flex-col md:flex-row gap-2 md:gap-4">
        <Button className="w-full md:w-auto bg-primary hover:bg-primary-hover">
          <Download className="w-4 h-4 mr-2" />
          Cetak Kalender PDF
        </Button>
        <Button variant="outline">
          <CalendarIcon className="w-4 h-4 mr-2" />
          Sinkronkan dengan Google Calendar
        </Button>
      </div>

      {/* Quote */}
      <Card className="bg-accent-light border-primary/20">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-primary shrink-0" />
            <p className="text-sm text-center text-muted-foreground italic">
              "Dua nikmat yang banyak manusia tertipu: kesehatan dan waktu luang." (HR. Bukhari)
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
