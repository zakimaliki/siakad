import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, BookOpen, Calendar, Clock, CheckCircle, AlertCircle, Book } from "lucide-react"
import Image from "next/image"

const borrowedBooks = [
  {
    id: 1,
    title: "Tafsir Al-Misbah",
    author: "M. Quraish Shihab",
    category: "Agama Islam",
    borrowDate: "01/11/2025",
    dueDate: "15/11/2025",
    status: "Dipinjam",
    cover: "/islamic-book-tafsir.jpg",
  },
  {
    id: 2,
    title: "Matematika Peminatan Kelas XI",
    author: "Tim Penulis",
    category: "Pelajaran",
    borrowDate: "05/11/2025",
    dueDate: "19/11/2025",
    status: "Dipinjam",
    cover: "/mathematics-textbook.png",
  },
]

const availableBooks = [
  {
    id: 3,
    title: "Fiqih Sunnah",
    author: "Sayyid Sabiq",
    category: "Agama Islam",
    stock: 5,
    cover: "/islamic-fiqh-book.jpg",
  },
  {
    id: 4,
    title: "Biologi Kelas XI",
    author: "Tim Penulis",
    category: "Pelajaran",
    stock: 8,
    cover: "/biology-textbook.jpg",
  },
  {
    id: 5,
    title: "Sejarah Islam",
    author: "Dr. Ahmad Syalabi",
    category: "Sejarah",
    stock: 3,
    cover: "/islamic-history-book.jpg",
  },
  {
    id: 6,
    title: "Kimia Dasar",
    author: "Tim Penulis",
    category: "Pelajaran",
    stock: 6,
    cover: "/chemistry-textbook.png",
  },
  {
    id: 7,
    title: "Hadits Shahih Bukhari",
    author: "Imam Bukhari",
    category: "Agama Islam",
    stock: 4,
    cover: "/hadith-book-bukhari.jpg",
  },
  {
    id: 8,
    title: "Fisika Modern",
    author: "Tim Penulis",
    category: "Pelajaran",
    stock: 7,
    cover: "/physics-textbook.png",
  },
]

const categories = ["Semua", "Agama Islam", "Pelajaran", "Sejarah", "Sastra", "Umum"]

export default function PerpustakaanPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Perpustakaan Digital</h1>
          <p className="text-muted-foreground mt-1">Katalog buku dan riwayat peminjaman siswa</p>
        </div>
        <div className="flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-primary" />
        </div>
      </div>

      {/* Hero Banner */}
      <Card className="islamic-pattern border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Book className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary">Membaca adalah Jendela Dunia</h2>
              <p className="text-muted-foreground mt-1">
                Akses ribuan koleksi buku untuk menunjang pembelajaran dan pengembangan diri
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Student Info & Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="border-primary/20">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground mb-1">Nama Siswa</p>
            <p className="font-semibold text-lg">Ahmad Fauzi</p>
          </CardContent>
        </Card>
        <Card className="border-primary/20">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground mb-1">Buku Dipinjam</p>
            <p className="font-semibold text-lg text-primary">2 Buku</p>
          </CardContent>
        </Card>
        <Card className="border-primary/20">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground mb-1">Total Peminjaman</p>
            <p className="font-semibold text-lg">15 Buku</p>
          </CardContent>
        </Card>
        <Card className="border-primary/20">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground mb-1">Status</p>
            <Badge className="bg-green-100 text-green-700 border-0">Aktif</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Currently Borrowed Books */}
      <Card>
        <CardHeader>
          <CardTitle>Buku yang Sedang Dipinjam</CardTitle>
        </CardHeader>
        <CardContent>
          {borrowedBooks.length > 0 ? (
            <div className="space-y-4">
              {borrowedBooks.map((book) => (
                <div
                  key={book.id}
                  className="flex items-start gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                >
                  <div className="relative w-20 h-28 shrink-0">
                    <Image
                      src={book.cover || "/placeholder.svg"}
                      alt={book.title}
                      fill
                      className="object-cover rounded"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div>
                      <h4 className="font-bold text-foreground">{book.title}</h4>
                      <p className="text-sm text-muted-foreground">{book.author}</p>
                      <Badge className="mt-1 bg-blue-100 text-blue-700 border-0">{book.category}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>Dipinjam: {book.borrowDate}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>Jatuh tempo: {book.dueDate}</span>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 mt-2 w-full">
                      <Button variant="outline" size="sm" className="w-full md:w-auto">
                        Perpanjang
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <BookOpen className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>Tidak ada buku yang sedang dipinjam</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Search and Filter */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col gap-2 md:flex-row md:gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Cari judul buku, penulis, atau ISBN..." className="pl-10" />
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
            </div>
            <Button className="w-full sm:w-auto bg-primary hover:bg-primary-hover">
              <Search className="w-4 h-4 mr-2" />
              Cari
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Available Books */}
      <Card>
        <CardHeader>
          <CardTitle>Katalog Buku Tersedia</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {availableBooks.map((book) => (
              <div key={book.id} className="space-y-3">
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden border border-border">
                  <Image
                    src={book.cover || "/placeholder.svg"}
                    alt={book.title}
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                  {book.stock > 0 ? (
                    <Badge className="absolute top-2 right-2 bg-green-500 text-white border-0">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Tersedia
                    </Badge>
                  ) : (
                    <Badge className="absolute top-2 right-2 bg-red-500 text-white border-0">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      Habis
                    </Badge>
                  )}
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-foreground line-clamp-2 text-balance">{book.title}</h4>
                  <p className="text-xs text-muted-foreground">{book.author}</p>
                  <Badge className="bg-blue-100 text-blue-700 border-0 text-xs">{book.category}</Badge>
                  <p className="text-xs text-muted-foreground">Stok: {book.stock} buku</p>
                </div>
                <Button className="w-full bg-primary hover:bg-primary-hover" size="sm" disabled={book.stock === 0}>
                  {book.stock > 0 ? "Pinjam Buku" : "Tidak Tersedia"}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Library Rules */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg">Tata Tertib Perpustakaan</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>Maksimal peminjaman 3 buku per siswa</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>Durasi peminjaman 14 hari (dapat diperpanjang 1x)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>Denda keterlambatan Rp 1.000/hari per buku</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>Jaga kebersihan dan keutuhan buku</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>Buku yang hilang/rusak wajib diganti</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Quote */}
      <Card className="bg-accent-light border-primary/20">
        <CardContent className="p-4">
          <p className="text-sm text-center text-muted-foreground italic">
            "Bacalah dengan (menyebut) nama Tuhanmu yang menciptakan." (QS. Al-Alaq: 1)
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
