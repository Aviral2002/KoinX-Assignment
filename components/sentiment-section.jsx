import { Info } from 'lucide-react'

const keyEvents = [
  {
    icon: '📰',
    title: 'Lorem ipsum dolor sit amet consectetur',
    description: 'Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.',
    color: 'blue'
  },
  {
    icon: '📈',
    title: 'Lorem ipsum dolor sit amet consectetur',
    description: 'Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.',
    color: 'green'
  }
]

export function SentimentSection() {
  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-2xl font-semibold">Sentiment</h2>
        <Info className="text-gray-400 h-5 w-5" />
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-lg font-semibold">Key Events</h3>
            <Info className="text-gray-400 h-4 w-4" />
          </div>

          <div className="overflow-x-auto">
            <div className="flex gap-4 min-w-max">
              {keyEvents.map((event, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg flex gap-4 max-w-[456px] ${
                    event.color === 'blue' ? 'bg-blue-50' : 'bg-green-50'
                  }`}
                >
                  <div className={`rounded-full p-4 h-12 w-12 flex items-center justify-center ${
                    event.color === 'blue' ? 'bg-blue-100' : 'bg-green-100'
                  }`}>
                    <span className="text-2xl">{event.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{event.title}</h4>
                    <p className="text-gray-600 text-sm">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-lg font-semibold">Analyst Estimates</h3>
            <Info className="text-gray-400 h-4 w-4" />
          </div>

          <div className="flex items-center gap-8">
            <div className="bg-green-50 rounded-full h-32 w-32 flex items-center justify-center">
              <span className="text-3xl font-bold text-green-600">76%</span>
            </div>

            <div className="flex-1 space-y-4">
              {[
                { label: 'Buy', value: 76, color: 'bg-green-500' },
                { label: 'Hold', value: 8, color: 'bg-gray-200' },
                { label: 'Sell', value: 16, color: 'bg-red-500' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <span className="text-gray-600 w-10">{item.label}</span>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full">
                    <div
                      className={`h-full rounded-full ${item.color}`}
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                  <span className="text-gray-600 w-10">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

