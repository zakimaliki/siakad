"use client"

import { Bell, Search, User, LogOut, Settings, MenuIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"

const getUserData = (role: string) => {
  switch (role) {
    case "siswa":
      return {
        name: "Ahmad Fauzi",
        subtitle: "XI IPA 2",
        id: "NIS: 2021456",
        avatar: "/muslim-student.jpg",
        initials: "AF",
      }
    case "guru":
      return {
        name: "Ustadz Abdul Karim",
        subtitle: "Guru Fiqih",
        id: "NIP: 198505152010011003",
        avatar: "/indonesian-teacher.jpg",
        initials: "AK",
      }
    case "admin":
      return {
        name: "Administrator",
        subtitle: "Admin Sistem",
        id: "ID: ADM001",
        avatar: "/admin-avatar.jpg",
        initials: "AD",
      }
    case "wali":
      return {
        name: "Ahmad Rozak",
        subtitle: "Wali Murid",
        id: "ID: WALI001",
        avatar: "/indonesian-man-formal.jpg",
        initials: "AR",
      }
    default:
      return {
        name: "Ahmad Fauzi",
        subtitle: "XI IPA 2",
        id: "NIS: 2021456",
        avatar: "/muslim-student.jpg",
        initials: "AF",
      }
  }
}

export function AppHeader({ onMenuClick }: { onMenuClick?: () => void } = {}) {
  const [userData, setUserData] = useState(getUserData("siswa"))

  useEffect(() => {
    const role = localStorage.getItem("userRole") || "siswa"
    setUserData(getUserData(role))
  }, [])

  return (
    <header className="sticky top-0 z-30 h-16 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="flex h-full items-center justify-between px-4 md:px-6">
        {/* Hamburger for mobile */}
        {onMenuClick && (
          <Button variant="ghost" size="icon" className="md:hidden mr-2" onClick={onMenuClick}>
            <MenuIcon className="h-6 w-6" />
          </Button>
        )}
        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Cari menu, nilai, atau informasi..." className="pl-10 bg-muted/50" />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-danger text-white text-xs">
                  3
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifikasi</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-96 overflow-y-auto">
                <div className="p-3 hover:bg-muted/50 cursor-pointer border-b">
                  <p className="text-sm font-medium">Nilai Semester tersedia</p>
                  <p className="text-xs text-muted-foreground mt-1">2 jam yang lalu</p>
                </div>
                <div className="p-3 hover:bg-muted/50 cursor-pointer border-b">
                  <p className="text-sm font-medium">Tagihan SPP bulan Maret</p>
                  <p className="text-xs text-muted-foreground mt-1">1 hari yang lalu</p>
                </div>
                <div className="p-3 hover:bg-muted/50 cursor-pointer">
                  <p className="text-sm font-medium">Pengumuman Libur Isra Mi'raj</p>
                  <p className="text-xs text-muted-foreground mt-1">3 hari yang lalu</p>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={userData.avatar || "/placeholder.svg"} />
                  <AvatarFallback className="bg-primary text-white">{userData.initials}</AvatarFallback>
                </Avatar>
                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium">{userData.name}</p>
                  <p className="text-xs text-muted-foreground">{userData.subtitle}</p>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div>
                  <p className="font-medium">{userData.name}</p>
                  <p className="text-xs text-muted-foreground">{userData.id}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profil Saya
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Pengaturan
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-danger">
                <LogOut className="mr-2 h-4 w-4" />
                Keluar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
