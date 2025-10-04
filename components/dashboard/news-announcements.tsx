import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Newspaper, ArrowRight } from "lucide-react"
import Link from "next/link"

const news = [
  {
    title: "Pesantren Kilat Ramadhan 1446 H dimulai 20 Nov 2024",
    date: "20 Nov 2024",
  },
  {
    title: "Juara 1 Lomba Kaligrafi Nasional – Aisyah Rahmawati",
    date: "18 Nov 2024",
  },
  {
    title: "Pendaftaran Ekstrakurikuler Semester Genap dibuka 15 Nov 2024",
    date: "15 Nov 2024",
  },
]

export function NewsAnnouncements() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Newspaper className="w-5 h-5 text-primary" />
          <CardTitle className="text-lg">Berita & Pengumuman</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {news.map((item, index) => (
          <div key={index} className="pb-4 border-b border-border last:border-0 last:pb-0 space-y-2">
            <h4 className="text-sm font-medium text-foreground leading-snug text-balance">{item.title}</h4>
            <p className="text-xs text-muted-foreground">{item.date}</p>
          </div>
        ))}
        <Button variant="outline" className="w-full bg-transparent" asChild>
          <Link href="/berita">
            Lihat Semua Berita
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
