import { ArrowRight } from 'lucide-react'

export function PriceSection({ data }) {
  const formatCurrency = (value, currency) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      maximumFractionDigits: 2,
    }).format(value)
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center gap-4 mb-6">
        <span ><img src="https://s3-symbol-logo.tradingview.com/crypto/XTVCBTC.svg"/></span>
        <h1 className="text-2xl font-bold">Bitcoin</h1>
        <span className="text-gray-500 uppercase">BTC</span>
        <span className="bg-gray-500 text-white px-3 py-1 rounded-md text-sm">Rank #1</span>
      </div>
      <div className="flex items-center gap-8 mb-6">
        <div>
          <span className="text-3xl font-bold">{formatCurrency(data.usd, 'USD')}</span>
          <span
            className={`ml-4 px-2 py-1 rounded text-sm ${
              data.usd_24h_change >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}
          >
            {data.usd_24h_change >= 0 ? '▲' : '▼'} {Math.abs(data.usd_24h_change).toFixed(2)}%
          </span>
        </div>
        <span className="text-gray-500">(24H)</span>
      </div>
      <div className="text-gray-600 mb-6">
        ₹ {formatCurrency(data.inr, 'INR').replace('₹', '')}
      </div>
      <div className="flex items-center text-blue-600">
        <span className="font-medium">Bitcoin Price Chart (USD)</span>
        <ArrowRight className="ml-2 h-4 w-4" />
      </div>
    </div>
  )
}

