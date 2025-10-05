import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, BookOpen, Clock, MapPin, Eye } from "lucide-react"
import Link from "next/link"

const teacherClasses = [
  {
    id: 1,
    name: "X IPA 1",
    subject: "Fiqih",
    schedule: "Senin, 07:30 - 09:00",
    room: "Ruang 201",
    studentCount: 32,
    waliKelas: false,
  },
  {
    id: 2,
    name: "X IPA 2",
    subject: "Fiqih",
    schedule: "Senin, 09:15 - 10:45",
    room: "Ruang 202",
    studentCount: 30,
    waliKelas: false,
  },
  {
    id: 3,
    name: "XI IPA 1",
    subject: "Fiqih",
    schedule: "Selasa, 07:30 - 09:00",
    room: "Ruang 301",
    studentCount: 28,
    waliKelas: false,
  },
  {
    id: 4,
    name: "XI IPA 2",
    subject: "Fiqih",
    schedule: "Selasa, 09:15 - 10:45",
    room: "Ruang 302",
    studentCount: 31,
    waliKelas: true,
  },
  {
    id: 5,
    name: "XII IPA 1",
    subject: "Fiqih",
    schedule: "Rabu, 07:30 - 09:00",
    room: "Ruang 401",
    studentCount: 29,
    waliKelas: false,
  },
]

const students = [
  { nis: "2021456", name: "Ahmad Fauzi", gender: "L", status: "Aktif" },
  { nis: "2021457", name: "Fatimah Azzahra", gender: "P", status: "Aktif" },
  { nis: "2021458", name: "Muhammad Rizki", gender: "L", status: "Aktif" },
  { nis: "2021459", name: "Siti Nurhaliza", gender: "P", status: "Aktif" },
  { nis: "2021460", name: "Abdullah Rahman", gender: "L", status: "Aktif" },
  { nis: "2021461", name: "Aisyah Putri", gender: "P", status: "Aktif" },
  { nis: "2021462", name: "Umar Faruq", gender: "L", status: "Aktif" },
  { nis: "2021463", name: "Khadijah Salsabila", gender: "P", status: "Aktif" },
]

export default function DaftarKelasPage() {
  return (
    <div className="space-y-6 px-2 md:px-0">
      {/* Header */}
      <div className="mb-2">
        <h1 className="text-xl md:text-3xl font-bold text-primary">Daftar Kelas</h1>
        <p className="text-sm md:text-base text-muted-foreground mt-1">
          Kelas yang Anda ampu dan data siswa di dalamnya
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Kelas</p>
                <p className="text-3xl font-bold text-primary">{teacherClasses.length}</p>
              </div>
              <div className="bg-primary/10 p-3 rounded-lg">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Siswa</p>
                <p className="text-3xl font-bold text-primary">
                  {teacherClasses.reduce((sum, cls) => sum + cls.studentCount, 0)}
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Wali Kelas</p>
                <p className="text-3xl font-bold text-primary">
                  {teacherClasses.filter((cls) => cls.waliKelas).length}
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <Users className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Class List */}
      <div className="grid gap-4">
        {teacherClasses.map((classItem) => (
          <Card key={classItem.id} className="border-primary/10 hover:border-primary/30 transition-colors">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-xl">{classItem.name}</CardTitle>
                    {classItem.waliKelas && <Badge className="bg-green-100 text-green-700 border-0">Wali Kelas</Badge>}
                  </div>
                  <p className="text-sm text-muted-foreground">Mata Pelajaran: {classItem.subject}</p>
                </div>
                <Link href={`/daftar-kelas/${classItem.id}`}>
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    Lihat Detail
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Jadwal</p>
                    <p className="text-sm font-medium">{classItem.schedule}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Ruangan</p>
                    <p className="text-sm font-medium">{classItem.room}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Jumlah Siswa</p>
                    <p className="text-sm font-medium">{classItem.studentCount} Siswa</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Example: Detailed Student List for XI IPA 2 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            Daftar Siswa - XI IPA 2 (Contoh)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-sm">No</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">NIS</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">Nama Siswa</th>
                  <th className="text-center py-3 px-4 font-semibold text-sm">L/P</th>
                  <th className="text-center py-3 px-4 font-semibold text-sm">Status</th>
                  <th className="text-center py-3 px-4 font-semibold text-sm">Aksi</th>
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
                    <td className="py-3 px-4 text-center">
                      <Badge variant="outline" className="border-primary/30">
                        {student.gender}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <Badge className="bg-green-100 text-green-700 border-0">{student.status}</Badge>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Quote */}
      <Card className="bg-accent-light border-primary/20">
        <CardContent className="p-4">
          <p className="text-sm text-center text-muted-foreground italic">
            "Guru yang baik adalah yang mengajarkan dengan hati, bukan hanya dengan ilmu."
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
