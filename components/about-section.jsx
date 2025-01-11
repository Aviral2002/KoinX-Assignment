// import { HoldingCTA } from './holding-cta'

export function AboutSection() {
  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">About Bitcoin</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="font-bold mb-4">What is Bitcoin?</h3>
          <p className="text-gray-600">
            Bitcoin's price today is US$46,953.04, with a 24-hour trading volume of $53.15 B. BTC is +0.36% in the last 24 hours. It has a circulating supply of 19.24 M BTC coins and a max supply of 21 M.
          </p>
        </div>

        <div className="border-t pt-6">
          <h3 className="font-bold mb-4">Lorem ipsum dolor sit amet</h3>
          <div className="space-y-4 text-gray-600">
            <p>
              Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus 
              urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque 
              fermentum sapien morbi sodales odio sed rhoncus.
            </p>
            <p>
              Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. 
              Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus.
            </p>
          </div>
        </div>

        <div className="border-t pt-6">
          <h2 className="text-2xl font-bold mb-6">Already Holding Bitcoin?</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-lg text-white">
              <div className="flex gap-4">
                <img src="/placeholder.svg?height=160&width=160" alt="Calculate Profits" className="w-40" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Calculate your Profits</h3>
                  <button className="bg-white text-black px-4 py-2 rounded-lg mt-4">
                    Check Now →
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-red-500 to-orange-500 p-4 rounded-lg text-white">
              <div className="flex gap-4">
                <img src="/placeholder.svg?height=160&width=160" alt="Calculate Tax" className="w-40" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Calculate your tax liability</h3>
                  <button className="bg-white text-black px-4 py-2 rounded-lg mt-4">
                    Check Now →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        {/* <HoldingCTA /> */}
      </div>
    </div>
  )
}

