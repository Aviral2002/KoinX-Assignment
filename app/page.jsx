'use client'

import { useEffect, useState } from 'react'
import { NavMenu } from '../components/nav-menu'
import { TrendingCoins } from '../components/trending-coins'
import { PriceSection } from '../components/price-section'
import { TradingViewChart } from '../components/trading-view-chart'
import { YouMayLike } from '../components/you-may-like'
import { OverviewTabs } from '../components/overview-tabs'
import { AboutSection } from '../components/about-section'
// import { HoldingCTA } from '../components/holding-cta'
import { getBitcoinPrice } from '../lib/api'
import { ErrorBoundary } from '../components/error-boundary'
import { TabProvider } from '../components/tab-context'
import { TabContent } from '../components/tab-content'

export default function Dashboard() {
  const [bitcoinData, setBitcoinData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      try {
        setIsLoading(true)
        const data = await getBitcoinPrice()
        setBitcoinData(data.bitcoin)
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchBitcoinPrice()
    const interval = setInterval(fetchBitcoinPrice, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <NavMenu />
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <span>Cryptocurrencies</span>
          <span className="mx-2">{'>'}</span>
          
          <span className="text-gray-900">Bitcoin</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <ErrorBoundary>
              {isLoading ? (
                <div className="bg-white rounded-lg shadow p-6 animate-pulse">
                  <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
                  <div className="h-12 bg-gray-200 rounded w-1/2"></div>
                </div>
              ) : error ? (
                <div className="bg-white rounded-lg shadow p-6">
                  <p className="text-red-500">Error: {error}</p>
                </div>
              ) : (
                bitcoinData && <PriceSection data={bitcoinData} />
              )}
            </ErrorBoundary>

            <div className="bg-white rounded-lg shadow">
              <ErrorBoundary>
                <TradingViewChart />
                <TabProvider>
                  <OverviewTabs />
                  <div className="px-6 pb-6">
                    <TabContent bitcoinData={bitcoinData} />
                  </div>
                </TabProvider>
              </ErrorBoundary>
            </div>

            <ErrorBoundary>
              <AboutSection />
            </ErrorBoundary>

          </div>

          <div className="space-y-6">
            <div className="bg-blue-600 text-white p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Get Started with KoinX for FREE</h2>
              <p className="mb-6">
                With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.
              </p>
              <img 
                src="/placeholder.svg?height=200&width=200" 
                alt="KoinX Features" 
                className="mx-auto mb-6"
              />
              <button className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-bold">
                Get Started for FREE →
              </button>
            </div>

            <ErrorBoundary>
              <TrendingCoins />
            </ErrorBoundary>
          </div>
        </div>

        <ErrorBoundary>
          <div className="mt-8">
            <YouMayLike />
          </div>
        </ErrorBoundary>
      </div>
    </div>
  )
}

