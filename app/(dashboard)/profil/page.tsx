"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Edit, Save, Lock, Bell, Shield, User, Mail, BookOpen, Users, GraduationCap, Award } from "lucide-react"

export default function ProfilPage() {
  const [userRole, setUserRole] = useState<string>("siswa")

  useEffect(() => {
    const role = localStorage.getItem("userRole") || "siswa"
    setUserRole(role)
  }, [])

  if (userRole === "guru") {
    return <GuruProfile />
  }

  if (userRole === "wali") {
    return <WaliProfile />
  }

  return <SiswaProfile />
}

function GuruProfile() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Profil Guru</h1>
          <p className="text-muted-foreground mt-1">Kelola informasi akun dan data kepegawaian</p>
        </div>
      </div>

      {/* Profile Header */}
      <Card className="border-primary/20">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <Avatar className="h-32 w-32 border-4 border-primary/20">
                <AvatarImage src="/indonesian-male-teacher.jpg" />
                <AvatarFallback className="bg-primary text-white text-4xl">AK</AvatarFallback>
              </Avatar>
              <Button size="icon" className="absolute bottom-0 right-0 rounded-full bg-primary hover:bg-primary-hover">
                <Edit className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex-1 text-center md:text-left space-y-2">
              <h2 className="text-3xl font-bold text-primary">Ustadz Abdul Karim, S.Pd.I</h2>
              <p className="text-muted-foreground">NIP: 198503152010011003 | NUPTK: 1234567890123456</p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <Badge className="bg-green-100 text-green-700 border-0">Guru Tetap</Badge>
                <Badge className="bg-blue-100 text-blue-700 border-0">Guru Fiqih</Badge>
                <Badge className="bg-purple-100 text-purple-700 border-0">Wali Kelas X IPA 1</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="personal" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="personal">Informasi Pribadi</TabsTrigger>
          <TabsTrigger value="academic">Data Kepegawaian</TabsTrigger>
          <TabsTrigger value="security">Keamanan</TabsTrigger>
          <TabsTrigger value="preferences">Preferensi</TabsTrigger>
        </TabsList>

        {/* Personal Information Tab */}
        <TabsContent value="personal" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Data Pribadi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullname">Nama Lengkap</Label>
                  <Input id="fullname" defaultValue="Abdul Karim, S.Pd.I" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nik">NIK</Label>
                  <Input id="nik" defaultValue="3201234567890456" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Jenis Kelamin</Label>
                  <Input id="gender" defaultValue="Laki-laki" disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="birthplace">Tempat Lahir</Label>
                  <Input id="birthplace" defaultValue="Bandung" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="birthdate">Tanggal Lahir</Label>
                  <Input id="birthdate" type="date" defaultValue="1985-03-15" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="religion">Agama</Label>
                  <Input id="religion" defaultValue="Islam" disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="marital">Status Pernikahan</Label>
                  <Input id="marital" defaultValue="Menikah" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="blood">Golongan Darah</Label>
                  <Input id="blood" defaultValue="B+" />
                </div>
              </div>
              <Button className="bg-primary hover:bg-primary-hover">
                <Save className="w-4 h-4 mr-2" />
                Simpan Perubahan
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                Informasi Kontak
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="abdul.karim@manurulhuda.sch.id" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">No. Telepon / WhatsApp</Label>
                <Input id="phone" type="tel" defaultValue="+62 812-3456-7891" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Alamat Lengkap</Label>
                <Textarea
                  id="address"
                  defaultValue="Jl. Merdeka No. 45, RT 03/RW 05, Kelurahan Sukahati, Kecamatan Cibinong, Kabupaten Bogor, Jawa Barat 16914"
                  rows={3}
                />
              </div>
              <Button className="bg-primary hover:bg-primary-hover">
                <Save className="w-4 h-4 mr-2" />
                Simpan Perubahan
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Academic/Employment Data Tab */}
        <TabsContent value="academic" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Data Kepegawaian
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>NIP</Label>
                  <Input defaultValue="198503152010011003" disabled />
                </div>
                <div className="space-y-2">
                  <Label>NUPTK</Label>
                  <Input defaultValue="1234567890123456" disabled />
                </div>
                <div className="space-y-2">
                  <Label>Status Kepegawaian</Label>
                  <Input defaultValue="Guru Tetap" disabled />
                </div>
                <div className="space-y-2">
                  <Label>Tanggal Mulai Mengajar</Label>
                  <Input defaultValue="01 Juli 2010" disabled />
                </div>
                <div className="space-y-2">
                  <Label>Masa Kerja</Label>
                  <Input defaultValue="14 Tahun 6 Bulan" disabled />
                </div>
                <div className="space-y-2">
                  <Label>Golongan</Label>
                  <Input defaultValue="III/c" disabled />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Mata Pelajaran & Kelas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Mata Pelajaran yang Diampu</Label>
                <Input defaultValue="Fiqih" disabled />
              </div>
              <div className="space-y-2">
                <Label>Wali Kelas</Label>
                <Input defaultValue="X IPA 1" disabled />
              </div>
              <div className="space-y-2">
                <Label>Kelas yang Diajar</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="outline">X IPA 1</Badge>
                  <Badge variant="outline">X IPA 2</Badge>
                  <Badge variant="outline">XI IPA 1</Badge>
                  <Badge variant="outline">XI IPA 2</Badge>
                  <Badge variant="outline">XII IPA 1</Badge>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Total Jam Mengajar per Minggu</Label>
                <Input defaultValue="24 Jam" disabled />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Pendidikan & Sertifikasi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Pendidikan Terakhir</Label>
                  <Input defaultValue="S1 Pendidikan Agama Islam" disabled />
                </div>
                <div className="space-y-2">
                  <Label>Universitas</Label>
                  <Input defaultValue="UIN Syarif Hidayatullah Jakarta" disabled />
                </div>
                <div className="space-y-2">
                  <Label>Tahun Lulus</Label>
                  <Input defaultValue="2009" disabled />
                </div>
                <div className="space-y-2">
                  <Label>Status Sertifikasi</Label>
                  <Input defaultValue="Sudah Sertifikasi" disabled />
                </div>
                <div className="space-y-2">
                  <Label>Tahun Sertifikasi</Label>
                  <Input defaultValue="2015" disabled />
                </div>
                <div className="space-y-2">
                  <Label>No. Sertifikat Pendidik</Label>
                  <Input defaultValue="12345678901234567890" disabled />
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">Pelatihan & Workshop</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Workshop Kurikulum Merdeka (2023)</li>
                  <li>• Pelatihan Pembelajaran Digital (2022)</li>
                  <li>• Sertifikasi Asesor Kompetensi (2021)</li>
                  <li>• Workshop Penilaian Autentik (2020)</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary" />
                Ubah Password
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Password Saat Ini</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">Password Baru</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Konfirmasi Password Baru</Label>
                <Input id="confirm-password" type="password" />
              </div>
              <div className="bg-accent-light border-l-4 border-primary rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Tips Keamanan:</span> Gunakan kombinasi huruf besar,
                  huruf kecil, angka, dan simbol. Minimal 8 karakter.
                </p>
              </div>
              <Button className="bg-primary hover:bg-primary-hover">
                <Lock className="w-4 h-4 mr-2" />
                Ubah Password
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Keamanan Akun
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                <div>
                  <h4 className="font-semibold text-foreground">Verifikasi Dua Faktor</h4>
                  <p className="text-sm text-muted-foreground">Tambahkan lapisan keamanan ekstra untuk akun Anda</p>
                </div>
                <Button variant="outline">Aktifkan</Button>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                <div>
                  <h4 className="font-semibold text-foreground">Riwayat Login</h4>
                  <p className="text-sm text-muted-foreground">Lihat aktivitas login terbaru</p>
                </div>
                <Button variant="outline">Lihat</Button>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                <div>
                  <h4 className="font-semibold text-foreground">Perangkat Terhubung</h4>
                  <p className="text-sm text-muted-foreground">Kelola perangkat yang terhubung ke akun Anda</p>
                </div>
                <Button variant="outline">Kelola</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Preferences Tab */}
        <TabsContent value="preferences" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-primary" />
                Notifikasi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                <div>
                  <h4 className="font-semibold text-foreground">Notifikasi Email</h4>
                  <p className="text-sm text-muted-foreground">Terima pembaruan melalui email</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                <div>
                  <h4 className="font-semibold text-foreground">Notifikasi Tugas Baru</h4>
                  <p className="text-sm text-muted-foreground">Pemberitahuan saat ada tugas atau pengumuman baru</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                <div>
                  <h4 className="font-semibold text-foreground">Notifikasi Absensi</h4>
                  <p className="text-sm text-muted-foreground">Pengingat untuk mengisi absensi siswa</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                <div>
                  <h4 className="font-semibold text-foreground">Notifikasi Rapat</h4>
                  <p className="text-sm text-muted-foreground">Pengingat rapat dan kegiatan guru</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>
              <Button className="bg-primary hover:bg-primary-hover">
                <Save className="w-4 h-4 mr-2" />
                Simpan Preferensi
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tampilan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                <div>
                  <h4 className="font-semibold text-foreground">Mode Gelap</h4>
                  <p className="text-sm text-muted-foreground">Aktifkan tema gelap untuk kenyamanan mata</p>
                </div>
                <input type="checkbox" className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                <div>
                  <h4 className="font-semibold text-foreground">Bahasa</h4>
                  <p className="text-sm text-muted-foreground">Pilih bahasa tampilan</p>
                </div>
                <select className="border border-border rounded-lg px-3 py-2">
                  <option>Bahasa Indonesia</option>
                  <option>English</option>
                  <option>العربية</option>
                </select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Quote */}
      <Card className="bg-accent-light border-primary/20">
        <CardContent className="p-4">
          <p className="text-sm text-center text-muted-foreground italic">
            "Guru yang baik adalah guru yang mengajar dengan hati, bukan hanya dengan ilmu."
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

function WaliProfile() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Profil Wali Murid</h1>
          <p className="text-muted-foreground mt-1">Kelola informasi akun dan data wali murid</p>
        </div>
      </div>

      {/* Profile Header */}
      <Card className="border-primary/20">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <Avatar className="h-32 w-32 border-4 border-primary/20">
                <AvatarImage src="/indonesian-man-formal.jpg" />
                <AvatarFallback className="bg-primary text-white text-4xl">AR</AvatarFallback>
              </Avatar>
              <Button size="icon" className="absolute bottom-0 right-0 rounded-full bg-primary hover:bg-primary-hover">
                <Edit className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex-1 text-center md:text-left space-y-2">
              <h2 className="text-3xl font-bold text-primary">Ahmad Rozak</h2>
              <p className="text-muted-foreground">Wali Murid dari Ahmad Fauzi (NIS: 2021456)</p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <Badge className="bg-green-100 text-green-700 border-0">Wali Aktif</Badge>
                <Badge className="bg-blue-100 text-blue-700 border-0">Hubungan: Kakak Kandung</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="personal" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="personal">Informasi Pribadi</TabsTrigger>
          <TabsTrigger value="student">Data Anak</TabsTrigger>
          <TabsTrigger value="security">Keamanan</TabsTrigger>
          <TabsTrigger value="preferences">Preferensi</TabsTrigger>
        </TabsList>

        {/* Personal Information Tab */}
        <TabsContent value="personal" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Data Pribadi Wali
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullname">Nama Lengkap</Label>
                  <Input id="fullname" defaultValue="Ahmad Rozak" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nik">NIK</Label>
                  <Input id="nik" defaultValue="3201234567890123" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Jenis Kelamin</Label>
                  <Input id="gender" defaultValue="Laki-laki" disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="birthplace">Tempat Lahir</Label>
                  <Input id="birthplace" defaultValue="Bogor" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="birthdate">Tanggal Lahir</Label>
                  <Input id="birthdate" type="date" defaultValue="1995-03-20" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="religion">Agama</Label>
                  <Input id="religion" defaultValue="Islam" disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="occupation">Pekerjaan</Label>
                  <Input id="occupation" defaultValue="Wiraswasta" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="education">Pendidikan Terakhir</Label>
                  <Input id="education" defaultValue="S1" />
                </div>
              </div>
              <Button className="bg-primary hover:bg-primary-hover">
                <Save className="w-4 h-4 mr-2" />
                Simpan Perubahan
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                Informasi Kontak
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="ahmad.rozak@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">No. Telepon / WhatsApp</Label>
                <Input id="phone" type="tel" defaultValue="+62 813-8888-9999" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Alamat Lengkap</Label>
                <Textarea
                  id="address"
                  defaultValue="Jl. Raya Bogor No. 123, RT 05/RW 08, Kelurahan Cibinong, Kecamatan Bogor Utara, Kota Bogor, Jawa Barat 16151"
                  rows={3}
                />
              </div>
              <Button className="bg-primary hover:bg-primary-hover">
                <Save className="w-4 h-4 mr-2" />
                Simpan Perubahan
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Student Data Tab */}
        <TabsContent value="student" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Data Wali Murid
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16 border-2 border-primary/20">
                    <AvatarImage src="/indonesian-man-formal.jpg" />
                    <AvatarFallback className="bg-primary text-white text-xl">AR</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-bold text-primary">Ahmad Rozak</h3>
                    <div className="grid md:grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">NIK:</span>
                        <span className="ml-2 font-medium">3201234567890123</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Pekerjaan:</span>
                        <span className="ml-2 font-medium">Wiraswasta</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">No. Telepon:</span>
                        <span className="ml-2 font-medium">+62 813-8888-9999</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Email:</span>
                        <span className="ml-2 font-medium">ahmad.rozak@email.com</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Pendidikan:</span>
                        <span className="ml-2 font-medium">S1</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Status:</span>
                        <Badge className="ml-2 bg-green-100 text-green-700 border-0">Wali Aktif</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Data Anak yang Diampu
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-accent-light border border-primary/20 rounded-lg p-4">
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16 border-2 border-primary/20">
                    <AvatarImage src="/indonesian-student-boy.jpg" />
                    <AvatarFallback className="bg-primary text-white text-xl">AF</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-bold text-primary">Ahmad Fauzi</h3>
                    <div className="grid md:grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">NIS:</span>
                        <span className="ml-2 font-medium">2021456</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">NISN:</span>
                        <span className="ml-2 font-medium">0012345678</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Kelas:</span>
                        <span className="ml-2 font-medium">XI IPA 2</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Status:</span>
                        <Badge className="ml-2 bg-green-100 text-green-700 border-0">Aktif</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="relationship">Hubungan dengan Siswa</Label>
                  <Input id="relationship" defaultValue="Kakak Kandung" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status-wali">Status Wali</Label>
                  <Input id="status-wali" defaultValue="Wali Utama" disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="responsibility">Tanggung Jawab</Label>
                  <Input id="responsibility" defaultValue="Penuh" disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="since">Menjadi Wali Sejak</Label>
                  <Input id="since" defaultValue="2021" disabled />
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">Informasi Tambahan</h4>
                <p className="text-sm text-blue-700">
                  Sebagai wali murid, Anda memiliki akses untuk memantau perkembangan akademik, absensi, pelanggaran,
                  prestasi, dan keuangan anak Anda. Anda juga dapat berkomunikasi dengan pihak madrasah melalui sistem
                  ini.
                </p>
              </div>

              <Button className="bg-primary hover:bg-primary-hover">
                <Save className="w-4 h-4 mr-2" />
                Simpan Perubahan
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary" />
                Ubah Password
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Password Saat Ini</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">Password Baru</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Konfirmasi Password Baru</Label>
                <Input id="confirm-password" type="password" />
              </div>
              <div className="bg-accent-light border-l-4 border-primary rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Tips Keamanan:</span> Gunakan kombinasi huruf besar,
                  huruf kecil, angka, dan simbol. Minimal 8 karakter.
                </p>
              </div>
              <Button className="bg-primary hover:bg-primary-hover">
                <Lock className="w-4 h-4 mr-2" />
                Ubah Password
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Keamanan Akun
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                <div>
                  <h4 className="font-semibold text-foreground">Verifikasi Dua Faktor</h4>
                  <p className="text-sm text-muted-foreground">Tambahkan lapisan keamanan ekstra untuk akun Anda</p>
                </div>
                <Button variant="outline">Aktifkan</Button>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                <div>
                  <h4 className="font-semibold text-foreground">Riwayat Login</h4>
                  <p className="text-sm text-muted-foreground">Lihat aktivitas login terbaru</p>
                </div>
                <Button variant="outline">Lihat</Button>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                <div>
                  <h4 className="font-semibold text-foreground">Perangkat Terhubung</h4>
                  <p className="text-sm text-muted-foreground">Kelola perangkat yang terhubung ke akun Anda</p>
                </div>
                <Button variant="outline">Kelola</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Preferences Tab */}
        <TabsContent value="preferences" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-primary" />
                Notifikasi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                <div>
                  <h4 className="font-semibold text-foreground">Notifikasi Email</h4>
                  <p className="text-sm text-muted-foreground">Terima pembaruan melalui email</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                <div>
                  <h4 className="font-semibold text-foreground">Notifikasi Nilai Anak</h4>
                  <p className="text-sm text-muted-foreground">Dapatkan notifikasi saat nilai anak tersedia</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                <div>
                  <h4 className="font-semibold text-foreground">Notifikasi Absensi</h4>
                  <p className="text-sm text-muted-foreground">Pemberitahuan jika anak tidak hadir</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                <div>
                  <h4 className="font-semibold text-foreground">Notifikasi Pembayaran</h4>
                  <p className="text-sm text-muted-foreground">Pengingat pembayaran SPP dan tabungan</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                <div>
                  <h4 className="font-semibold text-foreground">Notifikasi Kegiatan</h4>
                  <p className="text-sm text-muted-foreground">Informasi kegiatan dan acara madrasah</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                <div>
                  <h4 className="font-semibold text-foreground">Notifikasi Pelanggaran/Prestasi</h4>
                  <p className="text-sm text-muted-foreground">Pemberitahuan tentang pelanggaran atau prestasi anak</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>
              <Button className="bg-primary hover:bg-primary-hover">
                <Save className="w-4 h-4 mr-2" />
                Simpan Preferensi
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tampilan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                <div>
                  <h4 className="font-semibold text-foreground">Mode Gelap</h4>
                  <p className="text-sm text-muted-foreground">Aktifkan tema gelap untuk kenyamanan mata</p>
                </div>
                <input type="checkbox" className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                <div>
                  <h4 className="font-semibold text-foreground">Bahasa</h4>
                  <p className="text-sm text-muted-foreground">Pilih bahasa tampilan</p>
                </div>
                <select className="border border-border rounded-lg px-3 py-2">
                  <option>Bahasa Indonesia</option>
                  <option>English</option>
                  <option>العربية</option>
                </select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Quote */}
      <Card className="bg-accent-light border-primary/20">
        <CardContent className="p-4">
          <p className="text-sm text-center text-muted-foreground italic">
            "Didiklah anakmu sesuai dengan zamannya, karena mereka hidup bukan di zamanmu."
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

function SiswaProfile() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Profil Pengguna</h1>
          <p className="text-muted-foreground mt-1">Kelola informasi akun dan pengaturan pribadi</p>
        </div>
      </div>

      {/* Profile Header */}
      <Card className="border-primary/20">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <Avatar className="h-32 w-32 border-4 border-primary/20">
                <AvatarImage src="/placeholder.svg?key=profile-photo" />
                <AvatarFallback className="bg-primary text-white text-4xl">AF</AvatarFallback>
              </Avatar>
              <Button size="icon" className="absolute bottom-0 right-0 rounded-full bg-primary hover:bg-primary-hover">
                <Edit className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex-1 text-center md:text-left space-y-2">
              <h2 className="text-3xl font-bold text-primary">Ahmad Fauzi</h2>
              <p className="text-muted-foreground">NIS: 2021456 | NISN: 0012345678</p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <Badge className="bg-green-100 text-green-700 border-0">Siswa Aktif</Badge>
                <Badge className="bg-blue-100 text-blue-700 border-0">Kelas XI IPA 2</Badge>
                <Badge className="bg-yellow-100 text-yellow-700 border-0">Tahun Ajaran 2024/2025</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="personal" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="personal">Informasi Pribadi</TabsTrigger>
          <TabsTrigger value="security">Keamanan</TabsTrigger>
          <TabsTrigger value="preferences">Preferensi</TabsTrigger>
        </TabsList>

        {/* Personal Information Tab */}
        <TabsContent value="personal" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Data Pribadi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullname">Nama Lengkap</Label>
                  <Input id="fullname" defaultValue="Ahmad Fauzi" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Jenis Kelamin</Label>
                  <Input id="gender" defaultValue="Laki-laki" disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="birthplace">Tempat Lahir</Label>
                  <Input id="birthplace" defaultValue="Jakarta" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="birthdate">Tanggal Lahir</Label>
                  <Input id="birthdate" type="date" defaultValue="2007-08-15" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="religion">Agama</Label>
                  <Input id="religion" defaultValue="Islam" disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="blood">Golongan Darah</Label>
                  <Input id="blood" defaultValue="A" />
                </div>
              </div>
              <Button className="bg-primary hover:bg-primary-hover">
                <Save className="w-4 h-4 mr-2" />
                Simpan Perubahan
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                Informasi Kontak
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="ahmad.fauzi@student.manurulhuda.sch.id" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">No. Telepon</Label>
                <Input id="phone" type="tel" defaultValue="+62 812-3456-7890" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Alamat Lengkap</Label>
                <Textarea
                  id="address"
                  defaultValue="Jl. Raya Bogor No. 123, RT 05/RW 08, Kelurahan Cibinong, Kecamatan Bogor Utara, Kota Bogor, Jawa Barat 16151"
                  rows={3}
                />
              </div>
              <Button className="bg-primary hover:bg-primary-hover">
                <Save className="w-4 h-4 mr-2" />
                Simpan Perubahan
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Informasi Akademik
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>NIS</Label>
                  <Input defaultValue="2021456" disabled />
                </div>
                <div className="space-y-2">
                  <Label>NISN</Label>
                  <Input defaultValue="0012345678" disabled />
                </div>
                <div className="space-y-2">
                  <Label>Kelas</Label>
                  <Input defaultValue="XI IPA 2" disabled />
                </div>
                <div className="space-y-2">
                  <Label>Tahun Masuk</Label>
                  <Input defaultValue="2021/2022" disabled />
                </div>
                <div className="space-y-2">
                  <Label>Wali Kelas</Label>
                  <Input defaultValue="Ustadzah Siti Maryam" disabled />
                </div>
                <div className="space-y-2">
                  <Label>Status</Label>
                  <Input defaultValue="Aktif" disabled />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Informasi Wali Murid
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Nama Wali</Label>
                  <Input defaultValue="Ahmad Rozak" disabled />
                </div>
                <div className="space-y-2">
                  <Label>Hubungan</Label>
                  <Input defaultValue="Kakak Kandung" disabled />
                </div>
                <div className="space-y-2">
                  <Label>No. Telepon Wali</Label>
                  <Input defaultValue="+62 813-8888-9999" disabled />
                </div>
                <div className="space-y-2">
                  <Label>Email Wali</Label>
                  <Input defaultValue="ahmad.rozak@email.com" disabled />
                </div>
                <div className="space-y-2">
                  <Label>Pekerjaan Wali</Label>
                  <Input defaultValue="Wiraswasta" disabled />
                </div>
                <div className="space-y-2">
                  <Label>Pendidikan Wali</Label>
                  <Input defaultValue="S1" disabled />
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-700">
                  <span className="font-semibold">Catatan:</span> Untuk mengubah data wali, silakan hubungi bagian
                  administrasi atau minta wali Anda untuk login dan memperbarui data mereka.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary" />
                Ubah Password
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Password Saat Ini</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">Password Baru</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Konfirmasi Password Baru</Label>
                <Input id="confirm-password" type="password" />
              </div>
              <div className="bg-accent-light border-l-4 border-primary rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Tips Keamanan:</span> Gunakan kombinasi huruf besar,
                  huruf kecil, angka, dan simbol. Minimal 8 karakter.
                </p>
              </div>
              <Button className="bg-primary hover:bg-primary-hover">
                <Lock className="w-4 h-4 mr-2" />
                Ubah Password
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Keamanan Akun
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                <div>
                  <h4 className="font-semibold text-foreground">Verifikasi Dua Faktor</h4>
                  <p className="text-sm text-muted-foreground">Tambahkan lapisan keamanan ekstra untuk akun Anda</p>
                </div>
                <Button variant="outline">Aktifkan</Button>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                <div>
                  <h4 className="font-semibold text-foreground">Riwayat Login</h4>
                  <p className="text-sm text-muted-foreground">Lihat aktivitas login terbaru</p>
                </div>
                <Button variant="outline">Lihat</Button>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                <div>
                  <h4 className="font-semibold text-foreground">Perangkat Terhubung</h4>
                  <p className="text-sm text-muted-foreground">Kelola perangkat yang terhubung ke akun Anda</p>
                </div>
                <Button variant="outline">Kelola</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Preferences Tab */}
        <TabsContent value="preferences" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-primary" />
                Notifikasi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                <div>
                  <h4 className="font-semibold text-foreground">Notifikasi Email</h4>
                  <p className="text-sm text-muted-foreground">Terima pembaruan melalui email</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                <div>
                  <h4 className="font-semibold text-foreground">Notifikasi Nilai</h4>
                  <p className="text-sm text-muted-foreground">Dapatkan notifikasi saat nilai baru tersedia</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                <div>
                  <h4 className="font-semibold text-foreground">Notifikasi Pembayaran</h4>
                  <p className="text-sm text-muted-foreground">Pengingat pembayaran SPP dan tabungan</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                <div>
                  <h4 className="font-semibold text-foreground">Notifikasi Kegiatan</h4>
                  <p className="text-sm text-muted-foreground">Informasi kegiatan dan acara madrasah</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>
              <Button className="bg-primary hover:bg-primary-hover">
                <Save className="w-4 h-4 mr-2" />
                Simpan Preferensi
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tampilan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                <div>
                  <h4 className="font-semibold text-foreground">Mode Gelap</h4>
                  <p className="text-sm text-muted-foreground">Aktifkan tema gelap untuk kenyamanan mata</p>
                </div>
                <input type="checkbox" className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                <div>
                  <h4 className="font-semibold text-foreground">Bahasa</h4>
                  <p className="text-sm text-muted-foreground">Pilih bahasa tampilan</p>
                </div>
                <select className="border border-border rounded-lg px-3 py-2">
                  <option>Bahasa Indonesia</option>
                  <option>English</option>
                  <option>العربية</option>
                </select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Quote */}
      <Card className="bg-accent-light border-primary/20">
        <CardContent className="p-4">
          <p className="text-sm text-center text-muted-foreground italic">
            "Jagalah amanahmu, karena setiap amanah akan dimintai pertanggungjawaban."
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
