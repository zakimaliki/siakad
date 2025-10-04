import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Globe, Users, GraduationCap, Award, BookOpen } from "lucide-react"

export default function ProfilMadrasahPage() {
  const identitas = [
    { label: "Nama Madrasah", value: "Madrasah Aliyah Al-Hikmah" },
    { label: "Status", value: "Swasta Terakreditasi A" },
    { label: "Alamat", value: "Jl. Melati No. 25, Bandung" },
    { label: "Telepon", value: "(022) 555-1234" },
    { label: "Email", value: "info@alhikmah.sch.id" },
    { label: "Website", value: "www.alhikmah.sch.id" },
  ]

  const statistik = [
    { label: "Jumlah Siswa", value: "850", icon: Users, color: "bg-blue-500" },
    { label: "Jumlah Guru & Staff", value: "65", icon: GraduationCap, color: "bg-emerald-600" },
    { label: "Prestasi Akademik", value: "120 Penghargaan", icon: Award, color: "bg-amber-500" },
    { label: "Program Unggulan", value: "Tahfidz & Olimpiade", icon: BookOpen, color: "bg-purple-500" },
  ]

  const strukturOrganisasi = [
    { jabatan: "Kepala Madrasah", nama: "Drs. H. Ahmad Syafii" },
    { jabatan: "Wakil Kepala Bidang Kurikulum", nama: "Ustadzah Nur Aini" },
    { jabatan: "Wakil Kepala Bidang Kesiswaan", nama: "Ustadz Fadhlan" },
    { jabatan: "Wakil Kepala Bidang Sarpras", nama: "Ustadzah Rani" },
  ]

  return (
    <div className="space-y-6">
      {/* Hero Banner */}
      <Card className="border-emerald-200 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white overflow-hidden">
        <CardContent className="pt-6 pb-8">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold">Madrasah Aliyah Al-Hikmah</h1>
            <p className="text-xl text-emerald-100">Membangun generasi berilmu dan berakhlak mulia</p>
          </div>
        </CardContent>
      </Card>

      {/* About Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-emerald-800">Tentang Madrasah</CardTitle>
          <CardDescription>Sejarah dan identitas madrasah kami</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">Sejarah Singkat</h3>
            <p className="text-muted-foreground leading-relaxed">
              Madrasah Aliyah Al-Hikmah didirikan pada tahun 1985, berkomitmen membentuk insan berilmu, beramal, dan
              berakhlak mulia. Dengan pengalaman lebih dari 40 tahun dalam dunia pendidikan Islam, kami terus berinovasi
              untuk memberikan pendidikan terbaik yang menggabungkan ilmu pengetahuan modern dengan nilai-nilai Islam
              yang kuat.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {identitas.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-emerald-50">
                <div className="mt-1">
                  {item.label === "Alamat" && <MapPin className="h-5 w-5 text-emerald-600" />}
                  {item.label === "Telepon" && <Phone className="h-5 w-5 text-emerald-600" />}
                  {item.label === "Email" && <Mail className="h-5 w-5 text-emerald-600" />}
                  {item.label === "Website" && <Globe className="h-5 w-5 text-emerald-600" />}
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-semibold">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Visi dan Misi */}
      <Card className="border-amber-200">
        <CardHeader>
          <CardTitle className="text-emerald-800">Visi dan Misi Madrasah</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg bg-gradient-to-r from-emerald-50 to-amber-50 border-l-4 border-emerald-600">
            <h3 className="font-semibold text-lg mb-2 text-emerald-800">Visi</h3>
            <p className="text-emerald-900 leading-relaxed">
              Mewujudkan generasi berilmu, beriman, berakhlak, dan berdaya saing global.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-lg text-emerald-800">Misi</h3>
            <ul className="space-y-2">
              {[
                "Menyelenggarakan pendidikan berlandaskan Al-Qur'an dan Sunnah",
                "Mengembangkan potensi akademik, keterampilan, dan karakter siswa",
                "Menanamkan nilai kedisiplinan, tanggung jawab, dan kejujuran",
                "Meningkatkan kualitas guru dan tenaga kependidikan",
              ].map((misi, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Badge className="mt-1 bg-emerald-600">{index + 1}</Badge>
                  <span className="text-muted-foreground">{misi}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Statistik */}
      <div className="grid gap-4 md:grid-cols-4">
        {statistik.map((item, index) => (
          <Card key={index} className="border-l-4" style={{ borderLeftColor: item.color.replace("bg-", "#") }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{item.label}</CardTitle>
              <item.icon className={`h-5 w-5 text-white rounded-full p-1 ${item.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Struktur Organisasi */}
      <Card>
        <CardHeader>
          <CardTitle className="text-emerald-800">Struktur Organisasi</CardTitle>
          <CardDescription>Pimpinan dan pengurus madrasah</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {strukturOrganisasi.map((item, index) => (
              <div key={index} className="p-4 rounded-lg border border-emerald-200 bg-emerald-50">
                <p className="text-sm text-muted-foreground">{item.jabatan}</p>
                <p className="font-semibold text-lg text-emerald-800">{item.nama}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Testimonials */}
      <Card className="border-amber-200 bg-gradient-to-br from-amber-50 to-emerald-50">
        <CardHeader>
          <CardTitle className="text-emerald-800">Testimoni</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg bg-white border border-emerald-200">
            <p className="text-muted-foreground italic mb-2">
              "Madrasah ini tidak hanya mendidik anak saya berilmu, tapi juga berakhlak."
            </p>
            <p className="text-sm font-semibold text-emerald-700">- Orang Tua Siswa</p>
          </div>
          <div className="p-4 rounded-lg bg-white border border-emerald-200">
            <p className="text-muted-foreground italic mb-2">
              "Lingkungan madrasah yang Islami membuat saya nyaman belajar."
            </p>
            <p className="text-sm font-semibold text-emerald-700">- Alumni 2022</p>
          </div>
        </CardContent>
      </Card>

      {/* Islamic Quote */}
      <Card className="border-amber-200 bg-gradient-to-r from-amber-50 to-emerald-50">
        <CardContent className="pt-6">
          <p className="text-center text-lg font-semibold text-emerald-800">
            "Allah akan meninggikan orang-orang yang beriman di antaramu dan orang-orang yang diberi ilmu beberapa
            derajat."
          </p>
          <p className="text-center text-sm text-muted-foreground">(QS. Al-Mujadilah: 11)</p>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-center text-sm text-muted-foreground">
        <p className="font-medium text-emerald-700">Madrasah: Rumah Ilmu, Cahaya Iman, dan Akhlak Mulia.</p>
      </div>
    </div>
  )
}
