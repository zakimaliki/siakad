import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Edit, Save, Lock, Bell, Shield, User, Mail, BookOpen } from "lucide-react"

export default function ProfilPage() {
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
