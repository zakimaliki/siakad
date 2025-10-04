import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Calendar, Eye, Newspaper, Award, BookOpen, Users } from "lucide-react"
import Image from "next/image"

const newsArticles = [
  {
    id: 1,
    title: "Pesantren Kilat Ramadhan 1446 H Dimulai 20 November 2024",
    category: "Kegiatan",
    date: "20 Nov 2024",
    author: "Admin SIAKAD",
    views: 245,
    image: "/islamic-students-studying.jpg",
    excerpt:
      "MA Nurul Huda mengadakan Pesantren Kilat Ramadhan untuk mempersiapkan siswa menyambut bulan suci dengan penuh berkah.",
    featured: true,
  },
  {
    id: 2,
    title: "Aisyah Rahmawati Juara 1 Lomba Kaligrafi Nasional",
    category: "Prestasi",
    date: "18 Nov 2024",
    author: "Admin SIAKAD",
    views: 189,
    image: "/islamic-calligraphy-award.jpg",
    excerpt:
      "Siswi kelas XII IPA 1 berhasil meraih juara pertama dalam Lomba Kaligrafi Nasional tingkat SMA/MA se-Indonesia.",
    featured: true,
  },
  {
    id: 3,
    title: "Pendaftaran Ekstrakurikuler Semester Genap Dibuka",
    category: "Pengumuman",
    date: "15 Nov 2024",
    author: "Admin SIAKAD",
    views: 312,
    image: "/students-activities.jpg",
    excerpt: "Pendaftaran ekstrakurikuler semester genap 2024/2025 dibuka mulai 15 November hingga 30 November 2024.",
    featured: false,
  },
  {
    id: 4,
    title: "Kunjungan Industri ke Museum Nasional Jakarta",
    category: "Kegiatan",
    date: "10 Nov 2024",
    author: "Admin SIAKAD",
    views: 156,
    image: "/students-museum-visit.png",
    excerpt:
      "Siswa kelas XI mengikuti kunjungan industri ke Museum Nasional untuk memperluas wawasan sejarah dan budaya.",
    featured: false,
  },
  {
    id: 5,
    title: "Peringatan Maulid Nabi Muhammad SAW 1446 H",
    category: "Keagamaan",
    date: "05 Nov 2024",
    author: "Admin SIAKAD",
    views: 278,
    image: "/islamic-celebration-maulid.jpg",
    excerpt:
      "Seluruh warga MA Nurul Huda memperingati Maulid Nabi Muhammad SAW dengan berbagai kegiatan keagamaan dan sosial.",
    featured: false,
  },
  {
    id: 6,
    title: "Workshop Persiapan UTBK-SNBT 2025",
    category: "Akademik",
    date: "01 Nov 2024",
    author: "Admin SIAKAD",
    views: 421,
    image: "/students-workshop-learning.jpg",
    excerpt:
      "MA Nurul Huda mengadakan workshop intensif untuk mempersiapkan siswa kelas XII menghadapi UTBK-SNBT 2025.",
    featured: false,
  },
]

const categories = ["Semua", "Kegiatan", "Prestasi", "Pengumuman", "Keagamaan", "Akademik"]

export default function BeritaPage() {
  const featuredNews = newsArticles.filter((n) => n.featured)
  const regularNews = newsArticles.filter((n) => !n.featured)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Berita & Pengumuman</h1>
          <p className="text-muted-foreground mt-1">Informasi terkini seputar kegiatan dan prestasi madrasah</p>
        </div>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col gap-2 md:flex-row md:gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Cari berita..." className="pl-10" />
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <Select defaultValue="semua">
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat.toLowerCase()}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select defaultValue="terbaru">
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="terbaru">Terbaru</SelectItem>
                  <SelectItem value="terpopuler">Terpopuler</SelectItem>
                  <SelectItem value="terlama">Terlama</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Featured News */}
      <div>
        <h2 className="text-2xl font-bold text-primary mb-4">Berita Utama</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredNews.map((news) => (
            <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative h-48">
                <Image
                  src={news.image || "/placeholder.svg"}
                  alt={news.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-white border-0">{news.category}</Badge>
              </div>
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-foreground hover:text-primary transition-colors text-balance">
                  {news.title}
                </h3>
                <p className="text-sm text-muted-foreground text-balance">{news.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{news.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>{news.views}</span>
                    </div>
                  </div>
                  <Button variant="link" className="h-auto p-0 text-primary">
                    Baca Selengkapnya →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Regular News */}
      <div>
        <h2 className="text-2xl font-bold text-primary mb-4">Berita Lainnya</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {regularNews.map((news) => (
            <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative h-40">
                <Image
                  src={news.image || "/placeholder.svg"}
                  alt={news.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <Badge
                  className={`absolute top-3 left-3 border-0 ${news.category === "Prestasi"
                    ? "bg-yellow-500 text-white"
                    : news.category === "Pengumuman"
                      ? "bg-blue-500 text-white"
                      : news.category === "Keagamaan"
                        ? "bg-green-500 text-white"
                        : news.category === "Akademik"
                          ? "bg-purple-500 text-white"
                          : "bg-primary text-white"
                    }`}
                >
                  {news.category}
                </Badge>
              </div>
              <CardContent className="p-4 space-y-2">
                <h3 className="font-bold text-foreground hover:text-primary transition-colors line-clamp-2 text-balance">
                  {news.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2 text-balance">{news.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{news.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>{news.views}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Load More */}
      <div className="flex justify-center">
        <Button variant="outline" size="lg">
          Muat Lebih Banyak
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid sm:grid-cols-3 gap-4">
        <Card className="border-primary/20">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">15</p>
              <p className="text-sm text-muted-foreground">Prestasi Tahun Ini</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-primary/20">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-lg">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">42</p>
              <p className="text-sm text-muted-foreground">Kegiatan Terlaksana</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-primary/20">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">342</p>
              <p className="text-sm text-muted-foreground">Siswa Aktif</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quote */}
      <Card className="bg-accent-light border-primary/20">
        <CardContent className="p-4">
          <p className="text-sm text-center text-muted-foreground italic">
            "Barangsiapa yang menempuh jalan untuk mencari ilmu, Allah akan memudahkan baginya jalan menuju surga." (HR.
            Muslim)
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
