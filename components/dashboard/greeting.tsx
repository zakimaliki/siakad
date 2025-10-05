"use client"

import { Card } from "@/components/ui/card"
import { BookOpen, Calendar } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useState } from "react"

export function DashboardGreeting() {
  const [userRole, setUserRole] = useState<string>("siswa")

  useEffect(() => {
    const role = localStorage.getItem("userRole") || "siswa"
    setUserRole(role)
  }, [])

  const currentDate = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const greetingData = {
    siswa: {
      name: "Ahmad Fauzi",
      message: "Selamat datang di Sistem Informasi Akademik MA Nurul Huda",
      initials: "AF",
    },
    wali: {
      name: "Ahmad Rozak",
      message: "Pantau perkembangan akademik dan aktivitas putra/putri Anda",
      initials: "AR",
    },
    guru: {
      name: "Ustadz Abdul Karim",
      message: "Selamat datang di portal pengajar MA Nurul Huda",
      initials: "AK",
    },
    admin: {
      name: "Administrator",
      message: "Panel administrasi sistem MA Nurul Huda",
      initials: "AD",
    },
  }

  const currentUser = greetingData[userRole as keyof typeof greetingData] || greetingData.siswa

  return (
    <Card className="islamic-pattern border-primary/20">
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2 flex-1">
            <h1 className="text-3xl font-bold text-primary">Assalamu'alaikum, {currentUser.name}</h1>
            <p className="text-muted-foreground text-balance">{currentUser.message}</p>
          </div>
          <Avatar className="h-16 w-16 border-2 border-primary/20">
            <AvatarImage src="/placeholder.svg?key=1a2b3c" />
            <AvatarFallback className="bg-primary text-white text-xl">{currentUser.initials}</AvatarFallback>
          </Avatar>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span>{currentDate}</span>
        </div>

        <div className="bg-accent-light border-l-4 border-primary rounded-lg p-4">
          <div className="flex items-start gap-3">
            <BookOpen className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-foreground">"Sesungguhnya Allah bersama orang-orang yang sabar"</p>
              <p className="text-xs text-muted-foreground mt-1">(QS. Al-Baqarah: 153)</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
