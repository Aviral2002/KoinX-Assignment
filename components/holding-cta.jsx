export function HoldingCTA() {
  return (
    <div className="grid md:grid-cols-2 gap-4 my-6">
      <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-lg p-4">
        <div className="flex gap-6">
          <div className="flex-1">
            <h3 className="text-white text-xl font-bold mb-2">Calculate your Profits</h3>
            <button className="mt-4 bg-white text-black px-4 py-2 rounded-lg font-medium">
              Check Now →
            </button>
          </div>
          <img
            src="/placeholder.svg?height=120&width=120"
            alt="Calculate Profits"
            className="w-28 h-28 object-contain"
          />
        </div>
      </div>

      <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-lg p-4">
        <div className="flex gap-6">
          <div className="flex-1">
            <h3 className="text-white text-xl font-bold mb-2">Calculate your tax liability</h3>
            <button className="mt-4 bg-white text-black px-4 py-2 rounded-lg font-medium">
              Check Now →
            </button>
          </div>
          <img
            src="/placeholder.svg?height=120&width=120"
            alt="Calculate Tax"
            className="w-28 h-28 object-contain"
          />
        </div>
      </div>
    </div>
  )
}

