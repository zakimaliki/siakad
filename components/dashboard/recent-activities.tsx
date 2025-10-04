import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, CheckCircle, Calendar, DollarSign } from "lucide-react"

const activities = [
  {
    title: "Tugas Fiqih telah dinilai",
    description: "Nilai 85 untuk tugas Thaharah",
    time: "2 jam yang lalu",
    icon: CheckCircle,
    iconColor: "text-green-600",
    iconBg: "bg-green-50",
  },
  {
    title: "Jadwal Ujian Tengah Semester",
    description: "Dimulai 15 April 2025",
    time: "1 hari yang lalu",
    icon: Calendar,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
  },
  {
    title: "Pembayaran SPP berhasil",
    description: "Maret 2025 telah dibayar",
    time: "3 hari yang lalu",
    icon: DollarSign,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
  },
]

export function RecentActivities() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Aktivitas Terbaru</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => {
            const Icon = activity.icon
            return (
              <div key={index} className="flex gap-4">
                <div className={`${activity.iconBg} p-2 rounded-lg h-fit`}>
                  <Icon className={`w-5 h-5 ${activity.iconColor}`} />
                </div>
                <div className="flex-1 space-y-1">
                  <h4 className="font-medium text-foreground">{activity.title}</h4>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>{activity.time}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
