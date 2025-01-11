import { Info } from 'lucide-react'

export function FundamentalsSection({ bitcoinData }) {
  const fundamentals = [
    {
      label: 'Bitcoin Price',
      value: `$${bitcoinData?.usd.toLocaleString() ?? '0'}`,
    },
    {
      label: '24h Low / 24h High',
      value: `$${bitcoinData?.low_24h?.toLocaleString() ?? '0'} / $${bitcoinData?.high_24h?.toLocaleString() ?? '0'}`,
    },
    {
      label: '7d Low / 7d High',
      value: `$${bitcoinData?.low_7d?.toLocaleString() ?? '0'} / $${bitcoinData?.high_7d?.toLocaleString() ?? '0'}`,
    },
    {
      label: 'Trading Volume',
      value: `$${bitcoinData?.total_volume?.toLocaleString() ?? '0'}`,
    },
    {
      label: 'Market Cap Rank',
      value: '#1',
    },
    {
      label: 'Market Cap',
      value: `$${bitcoinData?.market_cap?.toLocaleString() ?? '0'}`,
    },
    {
      label: 'Market Cap Dominance',
      value: '38.343%',
    },
    {
      label: 'Volume / Market Cap',
      value: `${((bitcoinData?.total_volume ?? 0) / (bitcoinData?.market_cap ?? 1)).toFixed(4)}`,
    },
  ]

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <h3 className="text-lg font-semibold">Fundamentals</h3>
        <Info className="text-gray-400 h-4 w-4" />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {fundamentals.slice(0, 5).map(({ label, value }) => (
            <div key={label} className="flex items-center justify-between py-3 border-b border-gray-200">
              <span className="text-gray-500">{label}</span>
              <span className="font-medium">{value}</span>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {fundamentals.slice(5).map(({ label, value }) => (
            <div key={label} className="flex items-center justify-between py-3 border-b border-gray-200">
              <span className="text-gray-500">{label}</span>
              <span className="font-medium">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

