import { Info } from 'lucide-react'

const technicalData = [
  { label: 'Accumulation/Distribution', value: '0.0732', status: 'Neutral' },
  { label: 'Relative Strength Index (14)', value: '63.0748', status: 'Neutral' },
  { label: 'Commodity Channel Index (20)', value: '66.1552', status: 'Neutral' },
  { label: 'Average Directional Index (14)', value: '35.8557', status: 'Neutral' },
  { label: 'Awesome Oscillator', value: '1,258.7900', status: 'Buy' },
  { label: 'Momentum (10)', value: '1,576.6000', status: 'Buy' },
  { label: 'MACD Level (12, 26)', value: '613.5520', status: 'Buy' },
  { label: 'Stochastic RSI Fast (3, 3, 14, 14)', value: '96.3746', status: 'Overbought' },
  { label: 'Williams Percent Range (14)', value: '-3.8730', status: 'Overbought' },
  { label: 'Bull Bear Power', value: '1,971.1840', status: 'Buy' },
]

export function Technicals() {
  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-2xl font-bold">Technicals</h2>
        <Info className="text-gray-400 h-5 w-5" />
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-500">
              <th className="pb-4 font-medium">Indicator</th>
              <th className="pb-4 font-medium">Value</th>
              <th className="pb-4 font-medium">Signal</th>
            </tr>
          </thead>
          <tbody>
            {technicalData.map((item, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="py-4">{item.label}</td>
                <td className="py-4">{item.value}</td>
                <td className="py-4">
                  <span className={`px-2 py-1 rounded text-sm ${
                    item.status === 'Buy' ? 'bg-green-100 text-green-800' :
                    item.status === 'Sell' ? 'bg-red-100 text-red-800' :
                    item.status === 'Neutral' ? 'bg-gray-100 text-gray-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

