"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Edit, Save, BookOpen, Users } from "lucide-react"

const teacherClasses = [
  { id: 1, name: "X IPA 1", studentCount: 32 },
  { id: 2, name: "X IPA 2", studentCount: 30 },
  { id: 3, name: "XI IPA 1", studentCount: 28 },
  { id: 4, name: "XI IPA 2", studentCount: 31 },
  { id: 5, name: "XII IPA 1", studentCount: 29 },
]

const students = [
  { nis: "2021456", name: "Ahmad Fauzi", nilaiTugas: 85, nilaiUTS: 88, nilaiUAS: 90, nilaiAkhir: 88, grade: "B+" },
  {
    nis: "2021457",
    name: "Fatimah Azzahra",
    nilaiTugas: 92,
    nilaiUTS: 90,
    nilaiUAS: 95,
    nilaiAkhir: 92,
    grade: "A",
  },
  {
    nis: "2021458",
    name: "Muhammad Rizki",
    nilaiTugas: 78,
    nilaiUTS: 75,
    nilaiUAS: 80,
    nilaiAkhir: 78,
    grade: "B-",
  },
  {
    nis: "2021459",
    name: "Siti Nurhaliza",
    nilaiTugas: 88,
    nilaiUTS: 85,
    nilaiUAS: 87,
    nilaiAkhir: 87,
    grade: "B+",
  },
  {
    nis: "2021460",
    name: "Abdullah Rahman",
    nilaiTugas: 82,
    nilaiUTS: 80,
    nilaiUAS: 85,
    nilaiAkhir: 82,
    grade: "B",
  },
  { nis: "2021461", name: "Aisyah Putri", nilaiTugas: 90, nilaiUTS: 92, nilaiUAS: 93, nilaiAkhir: 92, grade: "A" },
  { nis: "2021462", name: "Umar Faruq", nilaiTugas: 75, nilaiUTS: 78, nilaiUAS: 76, nilaiAkhir: 76, grade: "B-" },
  {
    nis: "2021463",
    name: "Khadijah Salsabila",
    nilaiTugas: 95,
    nilaiUTS: 93,
    nilaiUAS: 96,
    nilaiAkhir: 95,
    grade: "A",
  },
]

export default function InputNilaiPage() {
  const [selectedClass, setSelectedClass] = useState("XI IPA 2")
  const [selectedStudent, setSelectedStudent] = useState<any>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleEditGrade = (student: any) => {
    setSelectedStudent(student)
    setIsDialogOpen(true)
  }

  const handleSaveGrade = () => {
    // Logic to save grade
    setIsDialogOpen(false)
    setSelectedStudent(null)
  }

  return (
    <div className="space-y-6 px-2 md:px-0">
      {/* Header */}
      <div className="mb-2">
        <h1 className="text-xl md:text-3xl font-bold text-primary">Input Nilai</h1>
        <p className="text-sm md:text-base text-muted-foreground mt-1">
          Kelola dan input nilai siswa untuk mata pelajaran yang Anda ampu
        </p>
      </div>

      {/* Filter Section */}
      <Card className="border-primary/20">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Pilih Kelas</Label>
              <Select value={selectedClass} onValueChange={setSelectedClass}>
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
          </div>
        </CardContent>
      </Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Siswa</p>
                <p className="text-3xl font-bold text-primary">{students.length}</p>
              </div>
              <div className="bg-primary/10 p-3 rounded-lg">
                <Users className="w-6 h-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Rata-rata Kelas</p>
                <p className="text-3xl font-bold text-primary">
                  {(students.reduce((sum, s) => sum + s.nilaiAkhir, 0) / students.length).toFixed(1)}
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Nilai Tertinggi</p>
                <p className="text-3xl font-bold text-green-600">{Math.max(...students.map((s) => s.nilaiAkhir))}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Nilai Terendah</p>
                <p className="text-3xl font-bold text-red-600">{Math.min(...students.map((s) => s.nilaiAkhir))}</p>
              </div>
              <div className="bg-red-100 p-3 rounded-lg">
                <BookOpen className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Student Grades Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            Daftar Nilai Siswa - {selectedClass}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-sm">No</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">NIS</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">Nama Siswa</th>
                  <th className="text-center py-3 px-4 font-semibold text-sm">Tugas</th>
                  <th className="text-center py-3 px-4 font-semibold text-sm">UTS</th>
                  <th className="text-center py-3 px-4 font-semibold text-sm">UAS</th>
                  <th className="text-center py-3 px-4 font-semibold text-sm">Nilai Akhir</th>
                  <th className="text-center py-3 px-4 font-semibold text-sm">Grade</th>
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
                    <td className="py-3 px-4 text-center font-medium">{student.nilaiTugas}</td>
                    <td className="py-3 px-4 text-center font-medium">{student.nilaiUTS}</td>
                    <td className="py-3 px-4 text-center font-medium">{student.nilaiUAS}</td>
                    <td className="py-3 px-4 text-center">
                      <span className="text-lg font-bold text-primary">{student.nilaiAkhir}</span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <Badge
                        className={
                          student.nilaiAkhir >= 90
                            ? "bg-green-100 text-green-700 border-0"
                            : student.nilaiAkhir >= 80
                              ? "bg-blue-100 text-blue-700 border-0"
                              : student.nilaiAkhir >= 70
                                ? "bg-yellow-100 text-yellow-700 border-0"
                                : "bg-red-100 text-red-700 border-0"
                        }
                      >
                        {student.grade}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <Button variant="ghost" size="sm" onClick={() => handleEditGrade(student)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Edit Grade Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Input/Edit Nilai Siswa</DialogTitle>
            <DialogDescription>
              Masukkan nilai untuk {selectedStudent?.name} ({selectedStudent?.nis})
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="tugas">Nilai Tugas (30%)</Label>
              <Input
                id="tugas"
                type="number"
                min="0"
                max="100"
                defaultValue={selectedStudent?.nilaiTugas}
                placeholder="0-100"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="uts">Nilai UTS (30%)</Label>
              <Input
                id="uts"
                type="number"
                min="0"
                max="100"
                defaultValue={selectedStudent?.nilaiUTS}
                placeholder="0-100"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="uas">Nilai UAS (40%)</Label>
              <Input
                id="uas"
                type="number"
                min="0"
                max="100"
                defaultValue={selectedStudent?.nilaiUAS}
                placeholder="0-100"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="catatan">Catatan Guru (Opsional)</Label>
              <Textarea id="catatan" placeholder="Tambahkan catatan untuk siswa..." rows={3} />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Batal
            </Button>
            <Button onClick={handleSaveGrade} className="bg-primary hover:bg-primary-hover">
              <Save className="w-4 h-4 mr-2" />
              Simpan Nilai
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Quote */}
      <Card className="bg-accent-light border-primary/20">
        <CardContent className="p-4">
          <p className="text-sm text-center text-muted-foreground italic">
            "Nilai bukan segalanya, tetapi usaha dan kejujuran adalah segalanya."
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
