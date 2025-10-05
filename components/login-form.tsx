"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { MSquare as Mosque, Eye, EyeOff, User, Lock } from "lucide-react"

export function LoginForm() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [role, setRole] = useState("siswa")
  const [loading, setLoading] = useState(false)
  const [username, setUsername] = useState("ahmad.fauzi")
  const [password, setPassword] = useState("password123")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Store role in localStorage for sidebar to use
    localStorage.setItem("userRole", role)

    // Simulate login
    setTimeout(() => {
      router.push("/dashboard")
    }, 1000)
  }

  const handleRoleChange = (newRole: string) => {
    setRole(newRole)

    // Pre-fill credentials based on role
    switch (newRole) {
      case "siswa":
        setUsername("ahmad.fauzi")
        setPassword("password123")
        break
      case "guru":
        setUsername("ustadz.karim")
        setPassword("guru123")
        break
      case "admin":
        setUsername("admin")
        setPassword("admin123")
        break
      case "wali":
        setUsername("ahmad.rozak")
        setPassword("wali123")
        break
      default:
        setUsername("")
        setPassword("")
    }
  }

  return (
    <Card className="w-full shadow-xl border-primary/10">
      <CardHeader className="space-y-4 text-center">
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Mosque className="w-8 h-8 text-primary" />
          </div>
        </div>
        <div>
          <CardTitle className="text-2xl font-bold text-primary">Selamat Datang</CardTitle>
          <CardDescription className="text-base mt-2">Sistem Informasi Akademik (SIAKAD) Madrasah</CardDescription>
          <p className="text-sm text-muted-foreground mt-1">
            Masuk untuk melanjutkan aktivitas belajar dan administrasi
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Role Selection */}
          <div className="space-y-2">
            <Label>Masuk Sebagai</Label>
            <div className="grid grid-cols-4 gap-2">
              {["siswa", "guru", "admin", "wali"].map((r) => (
                <Button
                  key={r}
                  type="button"
                  variant={role === r ? "default" : "outline"}
                  className={role === r ? "bg-primary hover:bg-primary-hover" : ""}
                  onClick={() => handleRoleChange(r)}
                >
                  {r.charAt(0).toUpperCase() + r.slice(1)}
                </Button>
              ))}
            </div>
          </div>

          {/* Username */}
          <div className="space-y-2">
            <Label htmlFor="username">Username / Email / NIS</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="username"
                placeholder="ahmad.zaki atau 2021456"
                className="pl-10"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="pl-10 pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <label htmlFor="remember" className="text-sm text-muted-foreground cursor-pointer">
                Ingat saya
              </label>
            </div>
            <Button type="button" variant="link" className="text-sm text-primary p-0 h-auto">
              Lupa password?
            </Button>
          </div>

          {/* Login Button */}
          <Button type="submit" className="w-full bg-primary hover:bg-primary-hover text-white" disabled={loading}>
            {loading ? "Memproses..." : "Masuk"}
          </Button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">atau</span>
            </div>
          </div>

          {/* Google Login */}
          <Button type="button" variant="outline" className="w-full bg-transparent">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Masuk dengan Google
          </Button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center space-y-2">
          <p className="text-xs text-muted-foreground">Versi 1.0 – 2025 © Madrasah Aliyah Al-Hikmah</p>
          <div className="flex items-center justify-center gap-4 text-xs">
            <Button variant="link" className="text-primary p-0 h-auto">
              Tentang
            </Button>
            <span className="text-muted-foreground">•</span>
            <Button variant="link" className="text-primary p-0 h-auto">
              Kontak Admin
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
