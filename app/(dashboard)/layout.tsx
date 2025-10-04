"use client"

import type React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { AppHeader } from "@/components/app-header"
import { useState } from "react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // State for mobile sidebar
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar for desktop */}
      <div className="hidden md:block">
        <AppSidebar />
      </div>
      {/* Sidebar as drawer for mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 md:hidden" onClick={() => setSidebarOpen(false)}>
          <div className="absolute left-0 top-0 h-full w-64 bg-card shadow-lg" onClick={e => e.stopPropagation()}>
            <AppSidebar onClose={() => setSidebarOpen(false)} />
          </div>
        </div>
      )}
      <div className="flex-1 w-0 md:pl-64 flex flex-col">
        {/* Header with hamburger for mobile */}
        <div className="md:pl-0">
          <AppHeader onMenuClick={() => setSidebarOpen(true)} />
        </div>
        <main className="p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
