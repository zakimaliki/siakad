"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const events: Record<number, { title: string; type: string }[]> = {
  3: [{ title: "Ujian Tengah Semester", type: "Akademik" }],
  10: [{ title: "Isra Mi'raj", type: "Keagamaan" }],
  18: [{ title: "Libur Nasional", type: "Libur" }],
  25: [{ title: "Pengumuman Nilai", type: "Akademik" }],
}

export function AcademicCalendar() {
  const [filters, setFilters] = useState({
    akademik: true,
    keagamaan: true,
    libur: true,
  })

  const days = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"]
  const daysInMonth = 31
  const startDay = 0

  const calendarDays = []
  for (let i = 0; i < startDay; i++) {
    calendarDays.push(null)
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day)
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Maret 2025</CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Filters */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="akademik"
              checked={filters.akademik}
              onCheckedChange={(checked) => setFilters({ ...filters, akademik: checked as boolean })}
            />
            <label htmlFor="akademik" className="text-sm cursor-pointer flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              Akademik
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="keagamaan"
              checked={filters.keagamaan}
              onCheckedChange={(checked) => setFilters({ ...filters, keagamaan: checked as boolean })}
            />
            <label htmlFor="keagamaan" className="text-sm cursor-pointer flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              Keagamaan
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="libur"
              checked={filters.libur}
              onCheckedChange={(checked) => setFilters({ ...filters, libur: checked as boolean })}
            />
            <label htmlFor="libur" className="text-sm cursor-pointer flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              Libur
            </label>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2 md:gap-4">
          {days.map((day) => (
            <div key={day} className="text-center font-semibold text-xs md:text-sm text-muted-foreground py-2">
              {day}
            </div>
          ))}

          {calendarDays.map((day, index) => {
            if (day === null) {
              return <div key={`empty-${index}`} />
            }

            const dayEvents = events[day] || []
            const hasEvent = dayEvents.length > 0

            return (
              <div
                key={day}
                className="min-h-14 md:min-h-20 p-1 md:p-2 rounded-lg border border-border hover:border-primary transition-colors cursor-pointer"
              >
                <div className="text-xs md:text-sm font-medium mb-1">{day}</div>
                {hasEvent && (
                  <div className="space-y-1">
                    {dayEvents.map((event, i) => {
                      const color =
                        event.type === "Akademik"
                          ? "bg-green-500"
                          : event.type === "Keagamaan"
                            ? "bg-blue-500"
                            : "bg-yellow-500"
                      return (
                        <div key={i} className={`${color} text-white text-xs p-1 rounded truncate`} title={event.title}>
                          {event.title}
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
