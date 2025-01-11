import { Info } from 'lucide-react'

export function PerformanceSection() {
  const performanceData = {
    today: {
      low: 46930.22,
      high: 49343.83,
      current: 48637.83
    },
    '52w': {
      low: 16930.22,
      high: 49743.83,
      current: 48637.83
    }
  }

  const calculatePosition = (value, min, max) => {
    return ((value - min) / (max - min)) * 100
  }

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Performance</h2>
      
      <div className="space-y-8">
        {/* Today's Range */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-500">
            <span>Today's Low</span>
            <span>Today's High</span>
          </div>
          <div className="relative">
            <div className="h-1.5 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full" />
            <div 
              className="absolute top-1/2 -translate-y-1/2"
              style={{ 
                left: `${calculatePosition(
                  performanceData.today.current,
                  performanceData.today.low,
                  performanceData.today.high
                )}%` 
              }}
            >
              <div className="relative -mt-8">
                <div className="absolute left-1/2 -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                  ${performanceData.today.current.toLocaleString()}
                </div>
                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-gray-900 mx-auto" />
              </div>
              <div className="w-4 h-4 bg-gray-900 rounded-full -mt-[7px] border-2 border-white" />
            </div>
          </div>
          <div className="flex justify-between font-medium">
            <span>${performanceData.today.low.toLocaleString()}</span>
            <span>${performanceData.today.high.toLocaleString()}</span>
          </div>
        </div>

        {/* 52W Range */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-500">
            <span>52W Low</span>
            <span>52W High</span>
          </div>
          <div className="relative">
            <div className="h-1.5 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full" />
            <div 
              className="absolute top-1/2 -translate-y-1/2"
              style={{ 
                left: `${calculatePosition(
                  performanceData['52w'].current,
                  performanceData['52w'].low,
                  performanceData['52w'].high
                )}%` 
              }}
            >
              <div className="w-4 h-4 bg-gray-900 rounded-full -mt-[7px] border-2 border-white" />
            </div>
          </div>
          <div className="flex justify-between font-medium">
            <span>${performanceData['52w'].low.toLocaleString()}</span>
            <span>${performanceData['52w'].high.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

