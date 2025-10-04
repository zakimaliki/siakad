import { LoginForm } from "@/components/login-form"
import { MSquare as Mosque, BookOpen } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen islamic-pattern flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Illustration */}
        <div className="hidden lg:flex flex-col items-center justify-center text-center space-y-6 p-8">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl" />
            <Mosque className="w-32 h-32 text-primary relative z-10" strokeWidth={1.5} />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-primary">Ilmu tanpa amal adalah sia-sia</h2>
            <p className="text-lg text-muted-foreground max-w-md">Belajar dengan disiplin, berprestasi dengan iman</p>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <BookOpen className="w-6 h-6" />
            <span className="text-sm">Madrasah Aliyah Al-Hikmah</span>
          </div>
        </div>

        {/* Right side - Login Form */}
        <LoginForm />
      </div>
    </div>
  )
}
