'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

export function TrendingCoins() {
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
        setTrendingCoins(data.coins.slice(0, 3))
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTrendingCoins()
  }, [])

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Trending Coins (24h)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                </div>
                <div className="h-4 bg-gray-200 rounded w-16"></div>
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
          <CardTitle>Trending Coins (24h)</CardTitle>
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
        <CardTitle>Trending Coins (24h)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {trendingCoins.map((coin) => (
            <div key={coin.item.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src={coin.item.small} alt={coin.item.name} className="w-6 h-6 rounded-full" />
                <span className="font-medium">{coin.item.symbol}</span>
              </div>
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
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

