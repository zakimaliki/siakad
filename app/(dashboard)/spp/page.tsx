import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, CreditCard, AlertCircle, CheckCircle, Clock, DollarSign } from "lucide-react"

const sppPayments = [
  { month: "November 2025", amount: 450000, status: "Belum Lunas", dueDate: "10 Nov 2025" },
  { month: "Oktober 2025", amount: 450000, status: "Lunas", paidDate: "08 Okt 2025", paymentMethod: "Transfer Bank" },
  { month: "September 2025", amount: 450000, status: "Lunas", paidDate: "05 Sep 2025", paymentMethod: "Transfer Bank" },
  { month: "Agustus 2025", amount: 450000, status: "Lunas", paidDate: "07 Agu 2025", paymentMethod: "Tunai" },
  { month: "Juli 2025", amount: 450000, status: "Lunas", paidDate: "10 Jul 2025", paymentMethod: "Transfer Bank" },
]

const paymentMethods = [
  {
    name: "Transfer Bank",
    bank: "Bank Syariah Indonesia (BSI)",
    accountNumber: "1234567890",
    accountName: "MA Nurul Huda",
  },
  {
    name: "Transfer Bank",
    bank: "Bank Mandiri",
    accountNumber: "0987654321",
    accountName: "MA Nurul Huda",
  },
]

export default function SPPPage() {
  const totalPaid = sppPayments.filter((p) => p.status === "Lunas").length
  const totalUnpaid = sppPayments.filter((p) => p.status === "Belum Lunas").length
  const unpaidAmount = sppPayments.filter((p) => p.status === "Belum Lunas").reduce((sum, p) => sum + p.amount, 0)

  return (
    <div className="space-y-6 px-2 md:px-0">
      {/* Header */}
      <div className="mb-2">
        <h1 className="text-xl md:text-3xl font-bold text-primary">Pembayaran SPP</h1>
        <p className="text-sm md:text-base text-muted-foreground mt-1">Riwayat dan status pembayaran SPP siswa</p>
      </div>
      {/* Filter: tahun ajaran */}
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
              <p className="text-sm text-muted-foreground">SPP per Bulan</p>
              <p className="font-semibold text-lg text-primary">Rp 450.000</p>
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
                <p className="text-sm text-muted-foreground">Total Lunas</p>
                <p className="text-3xl font-bold text-green-600">{totalPaid} Bulan</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-red-200 bg-red-50/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Belum Lunas</p>
                <p className="text-3xl font-bold text-red-600">{totalUnpaid} Bulan</p>
              </div>
              <div className="bg-red-100 p-3 rounded-lg">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Total Tunggakan</p>
                <p className="text-2xl font-bold text-primary">Rp {unpaidAmount.toLocaleString("id-ID")}</p>
              </div>
              <div className="bg-primary/10 p-3 rounded-lg">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Unpaid Alert */}
      {totalUnpaid > 0 && (
        <Card className="border-red-200 bg-red-50/50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-2">Pembayaran Tertunda</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Anda memiliki {totalUnpaid} bulan SPP yang belum dibayar. Mohon segera melakukan pembayaran untuk
                  menghindari denda keterlambatan.
                </p>
                <Button className="bg-red-600 hover:bg-red-700 w-full md:w-auto">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Bayar Sekarang
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Payment History */}
      <Card>
        <CardHeader>
          <CardTitle>Riwayat Pembayaran SPP</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-sm">Bulan</th>
                  <th className="text-right py-3 px-4 font-semibold text-sm">Nominal</th>
                  <th className="text-center py-3 px-4 font-semibold text-sm">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">Tanggal</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">Metode</th>
                  <th className="text-center py-3 px-4 font-semibold text-sm">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {sppPayments.map((payment, index) => (
                  <tr key={index} className="border-b border-border hover:bg-muted/50">
                    <td className="py-4 px-4 font-medium">{payment.month}</td>
                    <td className="py-4 px-4 text-right font-semibold">Rp {payment.amount.toLocaleString("id-ID")}</td>
                    <td className="py-4 px-4 text-center">
                      {payment.status === "Lunas" ? (
                        <Badge className="bg-green-100 text-green-700 border-0">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Lunas
                        </Badge>
                      ) : (
                        <Badge className="bg-red-100 text-red-700 border-0">
                          <Clock className="w-3 h-3 mr-1" />
                          Belum Lunas
                        </Badge>
                      )}
                    </td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">
                      {payment.status === "Lunas" ? payment.paidDate : `Jatuh tempo: ${payment.dueDate}`}
                    </td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">
                      {payment.status === "Lunas" ? payment.paymentMethod : "-"}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {payment.status === "Lunas" ? (
                        <Button variant="outline" size="sm" className="w-full md:w-auto">
                          <Download className="w-3 h-3 mr-1" />
                          Bukti
                        </Button>
                      ) : (
                        <Button size="sm" className="bg-primary hover:bg-primary-hover w-full md:w-auto">
                          <CreditCard className="w-3 h-3 mr-1" />
                          Bayar
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Payment Methods */}
      <Card>
        <CardHeader>
          <CardTitle>Metode Pembayaran</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {paymentMethods.map((method, index) => (
              <div key={index} className="p-4 rounded-lg border border-border bg-muted/30">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">{method.bank}</h4>
                    <div className="space-y-1 text-sm">
                      <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">No. Rekening:</span> {method.accountNumber}
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">Atas Nama:</span> {method.accountName}
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-blue-100 text-blue-700 border-0">{method.name}</Badge>
                </div>
              </div>
            ))}

            <div className="p-4 rounded-lg border border-border bg-muted/30">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Pembayaran Tunai</h4>
                  <p className="text-sm text-muted-foreground">
                    Dapat dilakukan di Kantor Tata Usaha MA Nurul Huda pada jam kerja (08:00 - 15:00 WIB)
                  </p>
                </div>
                <Badge className="bg-green-100 text-green-700 border-0">Tunai</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex flex-col md:flex-row gap-2 md:gap-4">
        <Button className="w-full md:w-auto bg-primary hover:bg-primary-hover">
          <Download className="w-4 h-4 mr-2" />
          Unduh Bukti Pembayaran
        </Button>
      </div>

      {/* Info Note */}
      <Card className="bg-accent-light border-primary/20">
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Catatan:</span> Untuk pembayaran via transfer, mohon
            konfirmasi ke bagian keuangan dengan mengirimkan bukti transfer melalui WhatsApp ke +62 812-3456-7890.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
