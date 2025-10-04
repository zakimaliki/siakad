import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, Upload, FileText, CreditCard, Calendar, AlertCircle } from "lucide-react"

export default function PPDBPage() {
  const steps = [
    { number: 1, title: "Isi Formulir Pendaftaran", status: "current" },
    { number: 2, title: "Upload Dokumen", status: "pending" },
    { number: 3, title: "Konfirmasi Pembayaran Formulir", status: "pending" },
    { number: 4, title: "Verifikasi Data", status: "pending" },
    { number: 5, title: "Cetak Kartu Ujian", status: "pending" },
  ]

  const announcements = [
    { title: "Gelombang 1", date: "1 Feb – 31 Maret 2025", icon: Calendar },
    { title: "Tes Seleksi", date: "5 April 2025", icon: FileText },
    { title: "Pengumuman Hasil", date: "10 April 2025", icon: AlertCircle },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-emerald-800">Pendaftaran Peserta Didik Baru (PPDB)</h1>
        <p className="text-muted-foreground">
          Daftarkan diri Anda untuk menjadi bagian dari keluarga besar Madrasah Aliyah Al-Hikmah
        </p>
      </div>

      {/* Hero Banner */}
      <Card className="border-emerald-200 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
        <CardContent className="pt-6 pb-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Membangun Generasi Qur'ani & Cerdas</h2>
            <p className="text-emerald-100">Bergabunglah dengan madrasah yang membentuk karakter Islami</p>
          </div>
        </CardContent>
      </Card>

      {/* Progress Steps */}
      <Card>
        <CardHeader>
          <CardTitle className="text-emerald-800">Alur Pendaftaran</CardTitle>
          <CardDescription>Ikuti langkah-langkah berikut untuk menyelesaikan pendaftaran</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-4">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center text-center z-10 min-w-[120px]">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold mb-2 shadow-md border-4 transition-colors duration-200
                      ${step.status === "current"
                        ? "bg-emerald-600 text-white border-emerald-400"
                        : step.status === "completed"
                          ? "bg-emerald-200 text-emerald-800 border-emerald-400"
                          : "bg-gray-200 text-gray-500 border-gray-200"}
                    `}
                  >
                    {step.status === "completed" ? <CheckCircle2 className="h-6 w-6" /> : step.number}
                  </div>
                  <p className="text-sm font-medium mt-1 w-28 md:w-auto">{step.title}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block flex-1 h-2 relative -mx-2">
                    <div className="absolute top-1/2 left-0 right-0 h-1 rounded bg-gradient-to-r from-emerald-300 via-emerald-200 to-gray-200" style={{ transform: 'translateY(-50%)' }} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Registration Form */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          {/* Data Pribadi */}
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-800">Data Pribadi</CardTitle>
              <CardDescription>Lengkapi informasi pribadi calon siswa</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="nama">Nama Lengkap *</Label>
                  <Input id="nama" placeholder="Masukkan nama lengkap" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nisn">NISN *</Label>
                  <Input id="nisn" placeholder="Nomor Induk Siswa Nasional" />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="tempat-lahir">Tempat Lahir *</Label>
                  <Input id="tempat-lahir" placeholder="Kota kelahiran" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tanggal-lahir">Tanggal Lahir *</Label>
                  <Input id="tanggal-lahir" type="date" />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="jenis-kelamin">Jenis Kelamin *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih jenis kelamin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="laki-laki">Laki-laki</SelectItem>
                      <SelectItem value="perempuan">Perempuan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="agama">Agama *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih agama" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="islam">Islam</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="alamat">Alamat Lengkap *</Label>
                <Textarea id="alamat" placeholder="Masukkan alamat lengkap" rows={3} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="hp">Nomor HP / WhatsApp *</Label>
                <Input id="hp" placeholder="08xxxxxxxxxx" />
              </div>
            </CardContent>
          </Card>

          {/* Data Orang Tua */}
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-800">Data Orang Tua / Wali</CardTitle>
              <CardDescription>Informasi orang tua atau wali siswa</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="nama-ayah">Nama Ayah *</Label>
                  <Input id="nama-ayah" placeholder="Nama lengkap ayah" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pekerjaan-ayah">Pekerjaan Ayah *</Label>
                  <Input id="pekerjaan-ayah" placeholder="Pekerjaan ayah" />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="nama-ibu">Nama Ibu *</Label>
                  <Input id="nama-ibu" placeholder="Nama lengkap ibu" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pekerjaan-ibu">Pekerjaan Ibu *</Label>
                  <Input id="pekerjaan-ibu" placeholder="Pekerjaan ibu" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="hp-ortu">Nomor HP Orang Tua *</Label>
                <Input id="hp-ortu" placeholder="08xxxxxxxxxx" />
              </div>
            </CardContent>
          </Card>

          {/* Data Pendidikan */}
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-800">Data Pendidikan</CardTitle>
              <CardDescription>Riwayat pendidikan sebelumnya</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="asal-sekolah">Asal Sekolah *</Label>
                <Input id="asal-sekolah" placeholder="Nama sekolah asal" />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="tahun-lulus">Tahun Lulus *</Label>
                  <Input id="tahun-lulus" placeholder="2025" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nilai-rata">Nilai Rata-rata Raport *</Label>
                  <Input id="nilai-rata" placeholder="85.5" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="prestasi">Prestasi Akademik / Non Akademik (Opsional)</Label>
                <Textarea id="prestasi" placeholder="Tuliskan prestasi yang pernah diraih" rows={3} />
              </div>
            </CardContent>
          </Card>

          {/* Upload Dokumen */}
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-800">Upload Dokumen</CardTitle>
              <CardDescription>Unggah dokumen pendukung pendaftaran</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Scan Raport *</Label>
                <div className="border-2 border-dashed border-emerald-200 rounded-lg p-6 text-center hover:border-emerald-400 transition-colors cursor-pointer">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-emerald-600" />
                  <p className="text-sm text-muted-foreground">Klik untuk upload atau drag & drop</p>
                  <p className="text-xs text-muted-foreground mt-1">PDF, JPG, PNG (Max 2MB)</p>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Scan Akte Kelahiran *</Label>
                <div className="border-2 border-dashed border-emerald-200 rounded-lg p-6 text-center hover:border-emerald-400 transition-colors cursor-pointer">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-emerald-600" />
                  <p className="text-sm text-muted-foreground">Klik untuk upload atau drag & drop</p>
                  <p className="text-xs text-muted-foreground mt-1">PDF, JPG, PNG (Max 2MB)</p>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Scan Kartu Keluarga *</Label>
                <div className="border-2 border-dashed border-emerald-200 rounded-lg p-6 text-center hover:border-emerald-400 transition-colors cursor-pointer">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-emerald-600" />
                  <p className="text-sm text-muted-foreground">Klik untuk upload atau drag & drop</p>
                  <p className="text-xs text-muted-foreground mt-1">PDF, JPG, PNG (Max 2MB)</p>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Pas Foto 3x4 *</Label>
                <div className="border-2 border-dashed border-emerald-200 rounded-lg p-6 text-center hover:border-emerald-400 transition-colors cursor-pointer">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-emerald-600" />
                  <p className="text-sm text-muted-foreground">Klik untuk upload atau drag & drop</p>
                  <p className="text-xs text-muted-foreground mt-1">JPG, PNG (Max 1MB)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button className="w-full bg-emerald-600 hover:bg-emerald-700" size="lg">
            Simpan & Lanjutkan ke Pembayaran
          </Button>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Payment Info */}
          <Card className="border-amber-200 bg-gradient-to-br from-amber-50 to-emerald-50">
            <CardHeader>
              <CardTitle className="text-emerald-800 flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Informasi Pembayaran
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">Biaya Pendaftaran</p>
                <p className="text-2xl font-bold text-emerald-700">Rp 150.000</p>
              </div>
              <div className="pt-3 border-t">
                <p className="text-sm font-medium mb-2">Metode Pembayaran:</p>
                <p className="text-sm text-muted-foreground">Transfer Bank Syariah</p>
                <p className="text-sm text-muted-foreground">Virtual Account</p>
              </div>
            </CardContent>
          </Card>

          {/* Announcements */}
          <Card className="border-emerald-200">
            <CardHeader>
              <CardTitle className="text-emerald-800">Pengumuman Penting</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {announcements.map((announcement, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-emerald-50">
                  <announcement.icon className="h-5 w-5 text-emerald-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">{announcement.title}</p>
                    <p className="text-xs text-muted-foreground">{announcement.date}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Islamic Quote */}
          <Card className="border-amber-200 bg-gradient-to-r from-amber-50 to-emerald-50">
            <CardContent className="pt-6">
              <p className="text-center text-sm font-semibold text-emerald-800">
                "Carilah ilmu dari buaian hingga ke liang lahat."
              </p>
              <p className="text-center text-xs text-muted-foreground mt-1">(HR. Muslim)</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-muted-foreground">
        <p className="font-medium text-emerald-700">Madrasah: Jalan Ilmu, Iman, dan Akhlak.</p>
      </div>
    </div>
  )
}
