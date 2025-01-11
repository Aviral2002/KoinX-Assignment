export function Fundamentals() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <h3 className="text-lg font-semibold">Fundamentals</h3>
        <InfoIcon className="text-gray-400 h-4 w-4" />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {[
            { label: 'Bitcoin Price', value: '$46,953.04' },
            { label: '24h Low / 24h High', value: '$46,930.22 / $49,343.83' },
            { label: '7d Low / 7d High', value: '$46,930.22 / $49,743.83' },
            { label: 'Trading Volume', value: '$23,249,202,782' },
            { label: 'Market Cap Rank', value: '#1' },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-center justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600">{label}</span>
              <span className="font-medium">{value}</span>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {[
            { label: 'Market Cap', value: '$1,073,207,385,623' },
            { label: 'Market Cap Dominance', value: '38.343%' },
            { label: 'Volume / Market Cap', value: '0.0219' },
            { 
              label: 'All-Time High', 
              value: '$69,044.77 -32.10%',
              date: 'Nov 10, 2021 (about 1 year)'
            },
            { 
              label: 'All-Time Low', 
              value: '$67.81 69249.63%',
              date: 'Jul 06, 2013 (over 9 years)'
            },
          ].map(({ label, value, date }) => (
            <div key={label} className="flex items-center justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600">{label}</span>
              <div className="text-right">
                <div className="font-medium">{value}</div>
                {date && <div className="text-sm text-gray-500">{date}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

