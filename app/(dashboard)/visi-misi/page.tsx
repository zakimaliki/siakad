import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Heart, Globe, BookMarked, Target, Lightbulb } from "lucide-react"

export default function VisiMisiPage() {
  const misiList = [
    {
      no: 1,
      text: "Menanamkan nilai-nilai Islam dalam seluruh aspek pembelajaran",
      icon: BookMarked,
    },
    {
      no: 2,
      text: "Menyelenggarakan pendidikan yang berorientasi pada ilmu pengetahuan dan teknologi",
      icon: Lightbulb,
    },
    {
      no: 3,
      text: "Mengembangkan potensi siswa di bidang akademik, seni, olahraga, dan keterampilan hidup",
      icon: Target,
    },
    {
      no: 4,
      text: "Membentuk karakter disiplin, jujur, bertanggung jawab, dan peduli sosial",
      icon: Heart,
    },
    {
      no: 5,
      text: "Mendorong prestasi siswa dalam kompetisi lokal, nasional, dan internasional",
      icon: Globe,
    },
    {
      no: 6,
      text: "Meningkatkan profesionalisme guru melalui pelatihan dan pengembangan berkelanjutan",
      icon: BookOpen,
    },
  ]

  const programUnggulan = [
    "Program Tahfidzul Qur'an (1 Juz per tahun)",
    "Ekstrakurikuler unggulan (Pramuka, MTQ, Olimpiade Sains)",
    "Kegiatan keagamaan rutin (Majelis Dzikir, Kajian Kitab Kuning)",
    "Pembiasaan Shalat Dhuha dan Tahajjud bersama",
  ]

  const roadmapItems = [
    { icon: BookMarked, label: "Ilmu", color: "bg-blue-500" },
    { icon: Heart, label: "Akhlak", color: "bg-emerald-600" },
    { icon: Globe, label: "Global Competence", color: "bg-amber-500" },
    { icon: BookOpen, label: "Iman", color: "bg-purple-500" },
  ]

  return (
    <div className="space-y-6">
      {/* Hero Banner */}
      <Card className="border-emerald-200 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)`,
            }}
          />
        </div>
        <CardContent className="pt-8 pb-10 relative z-10">
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-bold">Visi & Misi Madrasah</h1>
            <p className="text-xl text-emerald-100">Arah dan tujuan pendidikan madrasah kami</p>
            <p className="text-2xl font-semibold text-amber-200 mt-4">
              Mewujudkan Generasi Qur'ani, Cerdas, dan Berakhlak Mulia
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Visi Section */}
      <Card className="border-amber-200 border-2">
        <CardHeader className="bg-gradient-to-r from-emerald-50 to-amber-50">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full bg-emerald-600">
              <Lightbulb className="h-6 w-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl text-emerald-800">Visi</CardTitle>
              <CardDescription>Cita-cita dan tujuan utama madrasah</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="p-6 rounded-lg bg-gradient-to-br from-emerald-100 to-amber-100 border-l-4 border-emerald-600">
            <p className="text-xl font-semibold text-emerald-900 leading-relaxed text-center">
              Terwujudnya peserta didik yang beriman, bertakwa, berilmu, berakhlak mulia, dan mampu bersaing di era
              global.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Misi Section */}
      <Card>
        <CardHeader className="bg-gradient-to-r from-emerald-50 to-amber-50">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full bg-emerald-600">
              <Target className="h-6 w-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl text-emerald-800">Misi</CardTitle>
              <CardDescription>Langkah-langkah untuk mewujudkan visi madrasah</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid gap-4 md:grid-cols-2">
            {misiList.map((misi) => (
              <div
                key={misi.no}
                className="flex items-start gap-4 p-4 rounded-lg border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 transition-colors"
              >
                <div className="flex-shrink-0">
                  <Badge className="h-8 w-8 rounded-full flex items-center justify-center bg-emerald-600 text-white">
                    {misi.no}
                  </Badge>
                </div>
                <div className="flex-1">
                  <div className="flex items-start gap-2">
                    <misi.icon className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-emerald-900 leading-relaxed">{misi.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Program Unggulan */}
      <Card className="border-amber-200">
        <CardHeader className="bg-gradient-to-r from-amber-50 to-emerald-50">
          <CardTitle className="text-emerald-800">Strategi & Program Unggulan</CardTitle>
          <CardDescription>Program-program untuk mencapai visi dan misi</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid gap-3 md:grid-cols-2">
            {programUnggulan.map((program, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-amber-50 border border-amber-200">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-2 w-2 rounded-full bg-amber-500" />
                </div>
                <p className="text-sm text-muted-foreground">{program}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Roadmap Visualization */}
      <Card>
        <CardHeader>
          <CardTitle className="text-emerald-800">Pilar Pencapaian Visi</CardTitle>
          <CardDescription>Empat pilar utama dalam mewujudkan visi madrasah</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            {roadmapItems.map((item, index) => (
              <div key={index} className="text-center space-y-3">
                <div className={`mx-auto w-16 h-16 rounded-full ${item.color} flex items-center justify-center`}>
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <p className="font-semibold text-emerald-800">{item.label}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Islamic Quote */}
      <Card className="border-amber-200 bg-gradient-to-r from-amber-50 to-emerald-50">
        <CardContent className="pt-6">
          <p className="text-center text-lg font-semibold text-emerald-800">
            "Barangsiapa yang menempuh jalan untuk mencari ilmu, maka Allah akan memudahkan baginya jalan menuju surga."
          </p>
          <p className="text-center text-sm text-muted-foreground">(HR. Muslim)</p>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-center text-sm text-muted-foreground">
        <p className="font-medium text-emerald-700">Madrasah membentuk generasi berilmu dan berakhlak mulia.</p>
      </div>
    </div>
  )
}
