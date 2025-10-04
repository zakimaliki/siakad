import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DollarSign, PiggyBank, AlertCircle } from "lucide-react"
import Link from "next/link"

export function FinancialSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Ringkasan Keuangan</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Unpaid SPP */}
        <div className="p-4 rounded-lg border-2 border-red-200 bg-red-50">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div className="flex-1 space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-foreground">SPP November 2025</p>
                  <p className="text-sm text-muted-foreground">Belum Lunas</p>
                </div>
                <Badge variant="destructive">Belum</Badge>
              </div>
              <p className="text-2xl font-bold text-red-600">Rp 450.000</p>
            </div>
          </div>
        </div>

        {/* Savings */}
        <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
          <div className="flex items-start gap-3">
            <PiggyBank className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div className="flex-1 space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-foreground">Saldo Tabungan</p>
                  <p className="text-sm text-muted-foreground">Per November 2025</p>
                </div>
                <Badge className="bg-green-100 text-green-700 border-0">Aktif</Badge>
              </div>
              <p className="text-2xl font-bold text-primary">Rp 250.000</p>
            </div>
          </div>
        </div>

        {/* Payment Button */}
        <Button className="w-full bg-primary hover:bg-primary-hover" asChild>
          <Link href="/spp">
            <DollarSign className="w-4 h-4 mr-2" />
            Bayar SPP
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
