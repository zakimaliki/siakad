"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  GraduationCap,
  ClipboardCheck,
  DollarSign,
  Building2,
  UserPlus,
  Bell,
  User,
  MSquare as Mosque,
  ChevronLeft,
  ChevronRight,
  X as CloseIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Akademik",
    icon: GraduationCap,
    items: [
      { title: "Nilai Semester", href: "/nilai" },
      { title: "Absensi", href: "/absensi" },
      { title: "Jadwal Pelajaran", href: "/jadwal" },
      { title: "Kalender Akademik", href: "/kalender" },
    ],
  },
  {
    title: "Kesiswaan",
    icon: ClipboardCheck,
    items: [
      { title: "Data Siswa", href: "/data-siswa" },
      { title: "Catatan BK", href: "/catatan-bk" },
      { title: "Skor Pelanggaran & Prestasi", href: "/pelanggaran-prestasi" },
      { title: "Konseling", href: "/konseling" },
    ],
  },
  {
    title: "Keuangan",
    icon: DollarSign,
    items: [
      { title: "Pembayaran SPP", href: "/spp" },
      { title: "Tabungan Siswa", href: "/tabungan" },
    ],
  },
  {
    title: "Informasi",
    icon: Building2,
    items: [
      { title: "Profil Madrasah", href: "/profil-madrasah" },
      { title: "Visi & Misi", href: "/visi-misi" },
      { title: "Berita", href: "/berita" },
      { title: "Opini & Rubrik", href: "/opini" },
      { title: "Perpustakaan", href: "/perpustakaan" },
    ],
  },
  {
    title: "PPDB",
    icon: UserPlus,
    href: "/ppdb",
  },
  {
    title: "Notifikasi",
    icon: Bell,
    href: "/notifikasi",
  },
  {
    title: "Profil Saya",
    icon: User,
    href: "/profil",
  },
]

export function AppSidebar({ onClose }: { onClose?: () => void } = {}) {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  const [expandedItems, setExpandedItems] = useState<string[]>(["Akademik"])

  const toggleExpand = (title: string) => {
    setExpandedItems((prev) => (prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]))
  }

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen border-r border-border bg-card transition-all duration-300",
        collapsed ? "w-16" : "w-64",
      )}
    >
      {/* Header */}
      <div className="flex h-16 items-center justify-between border-b border-border px-4">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Mosque className="w-5 h-5 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-foreground">SIAKAD</span>
              <span className="text-xs text-muted-foreground">Madrasah</span>
            </div>
          </div>
        )}
        <div className="flex gap-1">
          {/* Close button for mobile drawer */}
          {onClose && (
            <Button variant="ghost" size="icon" className="h-8 w-8 md:hidden" onClick={onClose}>
              <CloseIcon className="h-5 w-5" />
            </Button>
          )}
          <Button variant="ghost" size="icon" onClick={() => setCollapsed(!collapsed)} className="h-8 w-8 hidden md:inline-flex">
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isExpanded = expandedItems.includes(item.title)
          const hasChildren = "items" in item && item.items

          if (hasChildren) {
            return (
              <div key={item.title}>
                <button
                  onClick={() => toggleExpand(item.title)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    "hover:bg-primary/10 hover:text-primary",
                    collapsed && "justify-center",
                  )}
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  {!collapsed && (
                    <>
                      <span className="flex-1 text-left">{item.title}</span>
                      <ChevronRight className={cn("w-4 h-4 transition-transform", isExpanded && "rotate-90")} />
                    </>
                  )}
                </button>
                {!collapsed && isExpanded && (
                  <div className="ml-8 mt-1 space-y-1">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className={cn(
                          "block px-3 py-2 rounded-lg text-sm transition-colors",
                          pathname === subItem.href
                            ? "bg-primary text-white"
                            : "text-muted-foreground hover:bg-primary/10 hover:text-primary",
                        )}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          }

          return (
            <Link
              key={item.href}
              href={item.href!}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                pathname === item.href
                  ? "bg-primary text-white"
                  : "text-muted-foreground hover:bg-primary/10 hover:text-primary",
                collapsed && "justify-center",
              )}
            >
              <Icon className="w-5 h-5 shrink-0" />
              {!collapsed && <span>{item.title}</span>}
            </Link>
          )
        })}
      </nav>

      {/* Footer Quote */}
      {!collapsed && (
        <div className="border-t border-border p-4">
          <div className="bg-accent-light rounded-lg p-3">
            <p className="text-xs text-center text-muted-foreground italic">
              "Ilmu yang bermanfaat akan menjadi amal jariyah"
            </p>
          </div>
        </div>
      )}
    </aside>
  )
}
