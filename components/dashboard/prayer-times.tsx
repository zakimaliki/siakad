import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MSquare as Mosque } from "lucide-react"

const prayerTimes = [
  { name: "Subuh", time: "04:45" },
  { name: "Dzuhur", time: "12:15" },
  { name: "Ashar", time: "15:30" },
  { name: "Maghrib", time: "18:10" },
  { name: "Isya", time: "19:25" },
]

export function PrayerTimes() {
  return (
    <Card className="border-primary/20">
      <CardHeader className="bg-primary/5">
        <div className="flex items-center gap-2">
          <Mosque className="w-5 h-5 text-primary" />
          <CardTitle className="text-lg">Jadwal Shalat</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-3">
          {prayerTimes.map((prayer) => (
            <div key={prayer.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <span className="font-medium text-foreground">{prayer.name}</span>
              <span className="text-lg font-bold text-primary">{prayer.time}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
