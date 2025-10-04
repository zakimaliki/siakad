import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, PiggyBank, TrendingUp, TrendingDown, Plus, Minus, Calendar } from "lucide-react"
import { SavingsChart } from "@/components/savings/savings-chart"

const savingsTransactions = [
  { date: "01/11/2025", type: "Setoran", amount: 50000, balance: 250000, notes: "Setoran rutin" },
  { date: "15/10/2025", type: "Penarikan", amount: 30000, balance: 200000, notes: "Keperluan buku" },
  { date: "01/10/2025", type: "Setoran", amount: 50000, balance: 230000, notes: "Setoran rutin" },
  { date: "01/09/2025", type: "Setoran", amount: 50000, balance: 180000, notes: "Setoran rutin" },
  { date: "20/08/2025", type: "Penarikan", amount: 20000, balance: 130000, notes: "Keperluan sekolah" },
  { date: "01/08/2025", type: "Setoran", amount: 50000, balance: 150000, notes: "Setoran rutin" },
]

export default function TabunganPage() {
  const currentBalance = 250000
  const totalDeposits = savingsTransactions.filter((t) => t.type === "Setoran").reduce((sum, t) => sum + t.amount, 0)
  const totalWithdrawals = savingsTransactions
    .filter((t) => t.type === "Penarikan")
    .reduce((sum, t) => sum + t.amount, 0)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-2">
        <h1 className="text-xl md:text-3xl font-bold text-primary">Tabungan Siswa</h1>
        <p className="text-sm md:text-base text-muted-foreground mt-1">Kelola tabungan dan riwayat transaksi siswa</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto mb-2">
        <Select defaultValue="2024-2025">
          <SelectTrigger className="w-full sm:w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2024-2025">2024/2025</SelectItem>
            <SelectItem value="2023-2024">2023/2024</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Student Info */}
      <Card className="border-primary/20">
        <CardContent className="p-6">
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Nama Siswa</p>
              <p className="font-semibold text-lg">Ahmad Fauzi</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Kelas</p>
              <p className="font-semibold text-lg">XI IPA 2</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">NIS</p>
              <p className="font-semibold text-lg">2021456</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">No. Rekening Tabungan</p>
              <p className="font-semibold text-lg">TAB-2021456</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Balance Card */}
      <Card className="islamic-pattern border-primary/20">
        <CardContent className="p-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <PiggyBank className="w-6 h-6 text-primary" />
              <p className="text-lg text-muted-foreground">Saldo Tabungan Saat Ini</p>
            </div>
            <p className="text-5xl font-bold text-primary">Rp {currentBalance.toLocaleString("id-ID")}</p>
            <Badge className="bg-green-100 text-green-700 border-0">Aktif</Badge>
            <div className="mt-4 flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <Button className="w-full sm:w-auto bg-primary hover:bg-primary-hover">
                <Plus className="w-4 h-4 mr-2" />
                Setor
              </Button>
              <Button variant="outline" className="w-full sm:w-auto">
                <Minus className="w-4 h-4 mr-2" />
                Tarik
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="border-green-200 bg-green-50/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Total Setoran</p>
                <p className="text-2xl font-bold text-green-600">Rp {totalDeposits.toLocaleString("id-ID")}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-red-200 bg-red-50/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Total Penarikan</p>
                <p className="text-2xl font-bold text-red-600">Rp {totalWithdrawals.toLocaleString("id-ID")}</p>
              </div>
              <div className="bg-red-100 p-3 rounded-lg">
                <TrendingDown className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Transaksi Bulan Ini</p>
                <p className="text-2xl font-bold text-blue-600">2</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Savings Chart */}
      <SavingsChart transactions={savingsTransactions} />

      {/* Transaction History */}
      <Card>
        <CardHeader>
          <CardTitle>Riwayat Transaksi</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-sm">Tanggal</th>
                  <th className="text-center py-3 px-4 font-semibold text-sm">Jenis</th>
                  <th className="text-right py-3 px-4 font-semibold text-sm">Nominal</th>
                  <th className="text-right py-3 px-4 font-semibold text-sm">Saldo</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">Keterangan</th>
                </tr>
              </thead>
              <tbody>
                {savingsTransactions.map((transaction, index) => (
                  <tr key={index} className="border-b border-border hover:bg-muted/50">
                    <td className="py-4 px-4 font-medium">{transaction.date}</td>
                    <td className="py-4 px-4 text-center">
                      {transaction.type === "Setoran" ? (
                        <Badge className="bg-green-100 text-green-700 border-0">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Setoran
                        </Badge>
                      ) : (
                        <Badge className="bg-red-100 text-red-700 border-0">
                          <TrendingDown className="w-3 h-3 mr-1" />
                          Penarikan
                        </Badge>
                      )}
                    </td>
                    <td
                      className={`py-4 px-4 text-right font-semibold ${transaction.type === "Setoran" ? "text-green-600" : "text-red-600"}`}
                    >
                      {transaction.type === "Setoran" ? "+" : "-"}Rp {transaction.amount.toLocaleString("id-ID")}
                    </td>
                    <td className="py-4 px-4 text-right font-semibold">
                      Rp {transaction.balance.toLocaleString("id-ID")}
                    </td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">{transaction.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Quick Transaction Form */}
      <Card>
        <CardHeader>
          <CardTitle>Transaksi Cepat</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Jenis Transaksi</label>
              <Select defaultValue="setoran">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="setoran">Setoran</SelectItem>
                  <SelectItem value="penarikan">Penarikan</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Nominal</label>
              <Input type="number" placeholder="Masukkan nominal" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Keterangan</label>
            <Input placeholder="Keterangan transaksi (opsional)" />
          </div>
          <Button className="w-full bg-primary hover:bg-primary-hover">Proses Transaksi</Button>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex gap-4">
        <Button className="bg-primary hover:bg-primary-hover">
          <Download className="w-4 h-4 mr-2" />
          Unduh Buku Tabungan (PDF)
        </Button>
      </div>

      {/* Info Note */}
      <Card className="bg-accent-light border-primary/20">
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground text-center italic">
            "Menabung adalah kebiasaan baik yang mengajarkan disiplin dan perencanaan masa depan."
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
