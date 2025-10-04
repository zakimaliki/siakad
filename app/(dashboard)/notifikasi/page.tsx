import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, DollarSign, AlertTriangle, Info, Search, CheckCheck, Trash2 } from "lucide-react"

export default function NotifikasiPage() {
  const notifications = [
    {
      id: 1,
      category: "akademik",
      icon: BookOpen,
      title: "Nilai Semester Genap sudah tersedia",
      description: "Nilai untuk semester genap tahun ajaran 2024/2025 telah diumumkan. Silakan cek di menu Nilai.",
      timestamp: "2 jam yang lalu",
      isNew: true,
    },
    {
      id: 2,
      category: "keuangan",
      icon: DollarSign,
      title: "Tagihan SPP bulan Maret belum dibayar",
      description: "SPP sebesar Rp 250.000 untuk bulan Maret 2025 belum dibayarkan. Harap segera melakukan pembayaran.",
      timestamp: "1 hari yang lalu",
      isNew: true,
    },
    {
      id: 3,
      category: "kedisiplinan",
      icon: AlertTriangle,
      title: "Catatan pelanggaran baru",
      description: "Siswa atas nama Ahmad mendapatkan skor pelanggaran +5 karena terlambat masuk kelas.",
      timestamp: "3 hari yang lalu",
      isNew: false,
    },
    {
      id: 4,
      category: "umum",
      icon: Info,
      title: "Pengumuman Libur Isra Mi'raj",
      description: "Madrasah akan libur pada tanggal 10 Maret 2025 dalam rangka memperingati Isra Mi'raj.",
      timestamp: "5 hari yang lalu",
      isNew: true,
    },
    {
      id: 5,
      category: "akademik",
      icon: BookOpen,
      title: "Jadwal Ujian Tengah Semester",
      description: "Ujian Tengah Semester akan dilaksanakan mulai tanggal 15 April 2025. Persiapkan diri dengan baik.",
      timestamp: "1 minggu yang lalu",
      isNew: false,
    },
    {
      id: 6,
      category: "keuangan",
      icon: DollarSign,
      title: "Pembayaran SPP Februari berhasil",
      description: "Pembayaran SPP bulan Februari 2025 sebesar Rp 250.000 telah diterima dan tercatat.",
      timestamp: "2 minggu yang lalu",
      isNew: false,
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "akademik":
        return "bg-blue-500"
      case "keuangan":
        return "bg-emerald-600"
      case "kedisiplinan":
        return "bg-red-500"
      case "umum":
        return "bg-amber-500"
      default:
        return "bg-gray-500"
    }
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "akademik":
        return "Akademik"
      case "keuangan":
        return "Keuangan"
      case "kedisiplinan":
        return "Kedisiplinan"
      case "umum":
        return "Informasi Umum"
      default:
        return category
    }
  }

  const filterNotifications = (category: string) => {
    if (category === "semua") return notifications
    return notifications.filter((n) => n.category === category)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-emerald-800">Notifikasi</h1>
        <p className="text-muted-foreground">
          Pusat informasi terbaru terkait akademik, keuangan, dan kegiatan madrasah.
        </p>
      </div>

      {/* Hero Banner */}
      <Card className="border-emerald-200 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
        <CardContent className="pt-6 pb-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold">Jangan lewatkan informasi penting hari ini</h2>
            <p className="text-emerald-100">Tetap update dengan semua aktivitas madrasah</p>
          </div>
        </CardContent>
      </Card>

      {/* Search and Actions */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Cari notifikasi..." className="pl-10" />
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <Button variant="outline" size="sm" className="w-full sm:w-auto">
            <CheckCheck className="mr-2 h-4 w-4" />
            Tandai Semua Sudah Dibaca
          </Button>
          <Button variant="outline" size="sm" className="w-full sm:w-auto">
            <Trash2 className="mr-2 h-4 w-4" />
            Hapus Semua
          </Button>
        </div>
      </div>

      {/* Notifications Tabs */}
      <Tabs defaultValue="semua" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="semua">Semua</TabsTrigger>
          <TabsTrigger value="akademik">Akademik</TabsTrigger>
          <TabsTrigger value="keuangan">Keuangan</TabsTrigger>
          <TabsTrigger value="kedisiplinan">Kedisiplinan</TabsTrigger>
          <TabsTrigger value="umum">Informasi Umum</TabsTrigger>
        </TabsList>

        {["semua", "akademik", "keuangan", "kedisiplinan", "umum"].map((category) => (
          <TabsContent key={category} value={category} className="space-y-4">
            {filterNotifications(category).map((notification) => (
              <Card
                key={notification.id}
                className={`hover:shadow-md transition-shadow ${notification.isNew ? "border-emerald-300 bg-emerald-50/50" : ""}`}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-full ${getCategoryColor(notification.category)}`}>
                      <notification.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-emerald-900">{notification.title}</h3>
                          {notification.isNew && <Badge className="bg-emerald-600 text-xs">Baru</Badge>}
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {getCategoryLabel(notification.category)}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{notification.description}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-muted-foreground">{notification.timestamp}</p>
                        <Button variant="ghost" size="sm">
                          Detail
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        ))}
      </Tabs>

      {/* Quick Links Sidebar */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-white">
          <CardHeader>
            <CardTitle className="text-blue-800 text-sm">Cek Jadwal Ujian</CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="outline" size="sm" className="w-full bg-transparent">
              Lihat Jadwal
            </Button>
          </CardContent>
        </Card>

        <Card className="border-emerald-200 bg-gradient-to-br from-emerald-50 to-white">
          <CardHeader>
            <CardTitle className="text-emerald-800 text-sm">Bayar SPP Online</CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="outline" size="sm" className="w-full bg-transparent">
              Bayar Sekarang
            </Button>
          </CardContent>
        </Card>

        <Card className="border-amber-200 bg-gradient-to-br from-amber-50 to-white">
          <CardHeader>
            <CardTitle className="text-amber-800 text-sm">Lihat Skor Disiplin</CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="outline" size="sm" className="w-full bg-transparent">
              Cek Skor
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Islamic Quote */}
      <Card className="border-amber-200 bg-gradient-to-r from-amber-50 to-emerald-50">
        <CardContent className="pt-6">
          <p className="text-center text-lg font-semibold text-emerald-800">
            "Barangsiapa beriman kepada Allah dan hari akhir, hendaklah berkata baik atau diam."
          </p>
          <p className="text-center text-sm text-muted-foreground">(HR. Bukhari & Muslim)</p>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-center text-sm text-muted-foreground">
        <p className="font-medium text-emerald-700">
          Informasi tepat waktu untuk membangun kedisiplinan dan kejujuran.
        </p>
      </div>
    </div>
  )
}
