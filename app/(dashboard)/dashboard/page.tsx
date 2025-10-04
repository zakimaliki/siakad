import { DashboardGreeting } from "@/components/dashboard/greeting"
import { QuickStatsCards } from "@/components/dashboard/quick-stats"
import { LatestGrades } from "@/components/dashboard/latest-grades"
import { RecentActivities } from "@/components/dashboard/recent-activities"
import { PrayerTimes } from "@/components/dashboard/prayer-times"
import { FinancialSummary } from "@/components/dashboard/financial-summary"
import { NewsAnnouncements } from "@/components/dashboard/news-announcements"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Greeting Section */}
      <DashboardGreeting />

      {/* Quick Stats */}
      <QuickStatsCards />

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <LatestGrades />
          <RecentActivities />
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          <PrayerTimes />
          <FinancialSummary />
          <NewsAnnouncements />
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-6 border-t border-border text-center space-y-2">
        <p className="text-sm text-muted-foreground italic">"Ilmu yang bermanfaat akan menjadi amal jariyah."</p>
        <p className="text-xs text-muted-foreground">© 2025 SIAKAD MA Nurul Huda</p>
      </footer>
    </div>
  )
}
