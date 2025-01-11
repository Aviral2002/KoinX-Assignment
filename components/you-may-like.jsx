'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function YouMayLike() {
  const [trendingCoins, setTrendingCoins] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        setIsLoading(true)
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending')
        if (!response.ok) throw new Error('Failed to fetch trending coins')
        const data = await response.json()
        setTrendingCoins([...data.coins, ...data.coins]) // Duplicate for demo
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTrendingCoins()
  }, [])

  const scroll = (direction) => {
    const container = document.getElementById('coin-carousel')
    const scrollAmount = direction === 'left' ? -400 : 400
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>You May Also Like</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 overflow-x-hidden">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="min-w-[300px] p-4 bg-gray-50 rounded-lg animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-24 mb-4"></div>
                <div className="h-8 bg-gray-200 rounded w-32"></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>You May Also Like</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-red-500">Error: {error}</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>You May Also Like</CardTitle>
      </CardHeader>
      <CardContent className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <div
          id="coin-carousel"
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {trendingCoins.map((coin, index) => (
            <div
              key={`${coin.item.id}-${index}`}
              className="min-w-[300px] p-4 bg-gray-50 rounded-lg flex flex-col gap-2"
            >
              <div className="flex items-center gap-2">
                <img src={coin.item.thumb} alt={coin.item.name} className="w-6 h-6 rounded-full" />
                <span className="font-medium">{coin.item.symbol}</span>
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    coin.item.data.price_change_percentage_24h.usd >= 0
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {coin.item.data.price_change_percentage_24h.usd >= 0 ? '▲' : '▼'}{' '}
                  {Math.abs(coin.item.data.price_change_percentage_24h.usd).toFixed(2)}%
                </span>
              </div>
              <div className="font-bold">{coin.item.data.price}</div>
              <img
                src={coin.item.data.sparkline}
                alt="Price graph"
                className="w-full h-16 object-cover"
              />
            </div>
          ))}
        </div>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </CardContent>
    </Card>
  )
}

