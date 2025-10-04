import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Edit, Download, User, MapPin, Phone, Mail, Users, Calendar, BookOpen } from "lucide-react"

export default function DataSiswaPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="mb-2">
          <h1 className="text-xl md:text-3xl font-bold text-primary">Data Siswa</h1>
          <p className="text-sm md:text-base text-muted-foreground mt-1">Informasi lengkap profil dan data pribadi siswa</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto mb-2">
          <Button variant="outline" className="w-full sm:w-auto">
            <Edit className="w-4 h-4 mr-2" />
            Edit Profil
          </Button>
          <Button className="w-full sm:w-auto bg-primary hover:bg-primary-hover">
            <Download className="w-4 h-4 mr-2" />
            Unduh Biodata
          </Button>
        </div>
      </div>

      {/* Profile Card */}
      <Card className="border-primary/20">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Avatar */}
            <div className="flex flex-col items-center gap-4">
              <Avatar className="h-32 w-32 border-4 border-primary/20">
                <AvatarImage src="/placeholder.svg?key=student-photo" />
                <AvatarFallback className="bg-primary text-white text-4xl">AF</AvatarFallback>
              </Avatar>
              <Badge className="bg-green-100 text-green-700 border-0">Siswa Aktif</Badge>
            </div>

            {/* Basic Info */}
            <div className="flex-1 space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-primary">Ahmad Fauzi</h2>
                <p className="text-muted-foreground">NIS: 2021456 | NISN: 0012345678</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Jenis Kelamin</p>
                    <p className="font-medium">Laki-laki</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Tempat, Tanggal Lahir</p>
                    <p className="font-medium">Jakarta, 15 Agustus 2007</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Kelas</p>
                    <p className="font-medium">XI IPA 2</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Wali Kelas</p>
                    <p className="font-medium">Ustadzah Siti Maryam</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>Informasi Kontak</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Alamat Lengkap</p>
                <p className="font-medium">
                  Jl. Raya Bogor No. 123, RT 05/RW 08, Kelurahan Cibinong, Kecamatan Bogor Utara, Kota Bogor, Jawa Barat
                  16151
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">No. Telepon</p>
                  <p className="font-medium">+62 812-3456-7890</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">ahmad.fauzi@student.com</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Parent Information */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Father */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Data Ayah</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="text-sm text-muted-foreground">Nama Lengkap</p>
              <p className="font-medium">H. Muhammad Yusuf</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Pekerjaan</p>
              <p className="font-medium">Wiraswasta</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Pendidikan Terakhir</p>
              <p className="font-medium">S1 - Ekonomi</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">No. Telepon</p>
              <p className="font-medium">+62 813-9876-5432</p>
            </div>
          </CardContent>
        </Card>

        {/* Mother */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Data Ibu</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="text-sm text-muted-foreground">Nama Lengkap</p>
              <p className="font-medium">Hj. Siti Aisyah</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Pekerjaan</p>
              <p className="font-medium">Ibu Rumah Tangga</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Pendidikan Terakhir</p>
              <p className="font-medium">SMA</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">No. Telepon</p>
              <p className="font-medium">+62 812-1111-2222</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Academic Information */}
      <Card>
        <CardHeader>
          <CardTitle>Informasi Akademik</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-muted-foreground">Tahun Masuk</p>
              <p className="font-medium">2021/2022</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Asal Sekolah</p>
              <p className="font-medium">MTs Nurul Huda</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Status Siswa</p>
              <Badge className="bg-green-100 text-green-700 border-0">Aktif</Badge>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Jurusan</p>
              <p className="font-medium">IPA (Ilmu Pengetahuan Alam)</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Rata-rata Nilai</p>
              <p className="font-medium text-primary">85.5 (B+)</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Kehadiran</p>
              <p className="font-medium text-primary">95%</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Information */}
      <Card>
        <CardHeader>
          <CardTitle>Informasi Tambahan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-muted-foreground">Hobi</p>
              <p className="font-medium">Membaca, Olahraga, Kaligrafi</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Cita-cita</p>
              <p className="font-medium">Dokter</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Ekstrakurikuler</p>
              <p className="font-medium">Pramuka, Tahfidz, Futsal</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Prestasi</p>
              <p className="font-medium">Juara 2 Lomba Kaligrafi Tingkat Kota (2024)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quote */}
      <Card className="bg-accent-light border-primary/20">
        <CardContent className="p-4">
          <p className="text-sm text-center text-muted-foreground italic">
            "Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia lainnya." (HR. Ahmad)
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
