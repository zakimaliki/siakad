import { Card, CardContent } from "@/components/ui/card"
import { Users, GraduationCap, AlertCircle, CheckCircle } from "lucide-react"

const stats = [
  {
    title: "Total Siswa",
    value: "342",
    icon: Users,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Guru Aktif",
    value: "28",
    icon: GraduationCap,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "SPP Belum Lunas",
    value: "15",
    icon: AlertCircle,
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    title: "Kehadiran Hari Ini",
    value: "95%",
    icon: CheckCircle,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
]

export function QuickStatsCards() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.title} className="border-primary/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
                <div className={`${stat.bgColor} p-3 rounded-lg`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
