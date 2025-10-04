"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const daysInMonth = 31
const startDay = 0 // Sunday

const attendanceMap: Record<number, string> = {
  3: "Izin",
  10: "Sakit",
  21: "Alpha",
}

export function AttendanceCalendar() {
  const days = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"]
  const calendarDays = []

  // Add empty cells for days before the 1st
  for (let i = 0; i < startDay; i++) {
    calendarDays.push(null)
  }

  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Kalender Kehadiran - Maret 2025</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Legend */}
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-green-500" />
              <span>Hadir</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-blue-500" />
              <span>Izin</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-yellow-500" />
              <span>Sakit</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-red-500" />
              <span>Alpha</span>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {/* Day headers */}
            {days.map((day) => (
              <div key={day} className="text-center font-semibold text-sm text-muted-foreground py-2">
                {day}
              </div>
            ))}

            {/* Calendar days */}
            {calendarDays.map((day, index) => {
              if (day === null) {
                return <div key={`empty-${index}`} />
              }

              const status = attendanceMap[day]
              const bgColor = status
                ? status === "Izin"
                  ? "bg-blue-500"
                  : status === "Sakit"
                    ? "bg-yellow-500"
                    : "bg-red-500"
                : "bg-green-500"

              return (
                <div
                  key={day}
                  className="aspect-square flex items-center justify-center rounded-lg border border-border hover:border-primary transition-colors cursor-pointer relative"
                >
                  <span className="text-sm font-medium">{day}</span>
                  <div className={`absolute bottom-1 w-2 h-2 rounded-full ${bgColor}`} />
                </div>
              )
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
