import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, TrendingUp, User, Calendar } from "lucide-react"
import Image from "next/image"

export default function OpiniPage() {
  const categories = ["Semua", "Pendidikan", "Keislaman", "Sosial & Budaya", "Motivasi", "Inspirasi Alumni"]

  const featuredArticle = {
    title: "Peran Generasi Muda dalam Menyongsong Era Digital Islami",
    author: "Ustadzah Nur Aini",
    date: "15 Maret 2025",
    excerpt:
      "Generasi muda harus mampu memanfaatkan teknologi dengan akhlak Islami. Di era digital ini, tantangan dan peluang hadir bersamaan...",
    image: "/islamic-students-studying.jpg",
  }

  const articles = [
    {
      title: "Tips Belajar Efektif Menjelang Ujian Nasional",
      author: "Ahmad Fauzi",
      date: "10 Maret 2025",
      category: "Pendidikan",
      excerpt: "Persiapan yang matang adalah kunci sukses menghadapi ujian. Berikut tips-tips yang bisa diterapkan...",
      image: "/students-workshop-learning.jpg",
    },
    {
      title: "Makna Hijrah dalam Kehidupan Siswa",
      author: "Fatimah Zahra",
      date: "8 Maret 2025",
      category: "Keislaman",
      excerpt: "Hijrah bukan hanya perpindahan tempat, tetapi juga perubahan menuju yang lebih baik...",
      image: "/islamic-celebration-maulid.jpg",
    },
    {
      title: "Gotong Royong: Tradisi Islami dalam Kehidupan Sehari-hari",
      author: "Ustadz Fadhlan",
      date: "5 Maret 2025",
      category: "Sosial & Budaya",
      excerpt: "Nilai gotong royong sejalan dengan ajaran Islam tentang tolong-menolong dalam kebaikan...",
      image: "/students-activities.jpg",
    },
    {
      title: "Inspirasi Alumni: Menjadi Pengusaha Muslim Muda",
      author: "Alumni 2020",
      date: "2 Maret 2025",
      category: "Inspirasi Alumni",
      excerpt: "Perjalanan dari siswa madrasah hingga menjadi pengusaha sukses dengan prinsip syariah...",
      image: "/students-museum-visit.png",
    },
  ]

  const topWriters = [
    { name: "Ustadzah Nur Aini", articles: 12 },
    { name: "Ahmad Fauzi", articles: 8 },
    { name: "Ustadz Fadhlan", articles: 7 },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-emerald-800">Opini & Rubrik</h1>
        <p className="text-muted-foreground">Wadah inspirasi, pemikiran, dan gagasan Islami</p>
      </div>

      {/* Hero Banner */}
      <Card className="border-emerald-200 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
        <CardContent className="pt-6 pb-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Berbagi Ilmu, Menyebarkan Hikmah</h2>
            <p className="text-emerald-100">Tulisan dari siswa, guru, dan alumni untuk inspirasi bersama</p>
          </div>
        </CardContent>
      </Card>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Cari artikel..." className="pl-10" />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "Semua" ? "default" : "outline"}
              size="sm"
              className={category === "Semua" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Featured Article */}
      <Card className="border-amber-200 overflow-hidden">
        <div className="md:flex">
          <div className="md:w-2/5 relative h-64 md:h-auto">
            <Image
              src={featuredArticle.image || "/placeholder.svg"}
              alt={featuredArticle.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="md:w-3/5">
            <CardHeader>
              <Badge className="w-fit bg-amber-500">Artikel Unggulan</Badge>
              <CardTitle className="text-2xl text-emerald-800 mt-2">{featuredArticle.title}</CardTitle>
              <CardDescription className="flex items-center gap-4 mt-2">
                <span className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {featuredArticle.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {featuredArticle.date}
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{featuredArticle.excerpt}</p>
              <Button className="bg-emerald-600 hover:bg-emerald-700">Baca Selengkapnya</Button>
            </CardContent>
          </div>
        </div>
      </Card>

      {/* Articles Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        <div className="space-y-6">
          {articles.slice(0, 2).map((article, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <Badge className="w-fit bg-emerald-600">{article.category}</Badge>
                <CardTitle className="text-lg text-emerald-800 mt-2">{article.title}</CardTitle>
                <CardDescription className="flex items-center gap-4 text-xs">
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {article.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {article.date}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{article.excerpt}</p>
                <Button variant="outline" size="sm">
                  Selengkapnya
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          {articles.slice(2, 4).map((article, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <Badge className="w-fit bg-emerald-600">{article.category}</Badge>
                <CardTitle className="text-lg text-emerald-800 mt-2">{article.title}</CardTitle>
                <CardDescription className="flex items-center gap-4 text-xs">
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {article.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {article.date}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{article.excerpt}</p>
                <Button variant="outline" size="sm">
                  Selengkapnya
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Sidebar Content */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Top Writers */}
        <Card className="border-emerald-200">
          <CardHeader>
            <CardTitle className="text-emerald-800 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Penulis Terpopuler
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topWriters.map((writer, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-emerald-50">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold">
                      {writer.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{writer.name}</p>
                      <p className="text-xs text-muted-foreground">{writer.articles} artikel</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Submit Article */}
        <Card className="border-amber-200 bg-gradient-to-br from-amber-50 to-emerald-50">
          <CardHeader>
            <CardTitle className="text-emerald-800">Kirim Opini Anda</CardTitle>
            <CardDescription>Bagikan pemikiran dan inspirasi Anda</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Punya ide atau pemikiran yang ingin dibagikan? Kirimkan artikel Anda dan jadilah bagian dari komunitas
              penulis madrasah.
            </p>
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Kirim Opini</Button>
          </CardContent>
        </Card>
      </div>

      {/* Islamic Quote */}
      <Card className="border-amber-200 bg-gradient-to-r from-amber-50 to-emerald-50">
        <CardContent className="pt-6">
          <p className="text-center text-lg font-semibold text-emerald-800">
            "Sebaik-baik manusia adalah yang paling bermanfaat bagi orang lain."
          </p>
          <p className="text-center text-sm text-muted-foreground">(HR. Ahmad)</p>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-center text-sm text-muted-foreground">
        <p className="font-medium text-emerald-700">Setiap opini adalah cahaya ilmu yang menerangi hati.</p>
      </div>
    </div>
  )
}
