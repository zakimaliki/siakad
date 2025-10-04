import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const grades = [
  {
    subject: "Fiqih",
    teacher: "Ustadz H. Abdul Karim",
    score: 85,
    grade: "B",
    color: "bg-blue-100 text-blue-700",
  },
  {
    subject: "Bahasa Arab",
    teacher: "Ustadzah Nur Aini",
    score: 90,
    grade: "A-",
    color: "bg-green-100 text-green-700",
  },
  {
    subject: "Matematika",
    teacher: "Ustadz Fadhlan",
    score: 78,
    grade: "B-",
    color: "bg-yellow-100 text-yellow-700",
  },
]

export function LatestGrades() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl">Nilai Semester Terbaru</CardTitle>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/nilai">
            Lihat Semua
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {grades.map((grade) => (
            <div
              key={grade.subject}
              className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
            >
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">{grade.subject}</h4>
                <p className="text-sm text-muted-foreground">{grade.teacher}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-2xl font-bold">{grade.score}</p>
                  <p className="text-xs text-muted-foreground">Nilai</p>
                </div>
                <Badge className={`${grade.color} border-0`}>{grade.grade}</Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
