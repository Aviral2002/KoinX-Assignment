'use client'

import { useTab } from './tab-context'
import { PerformanceSection } from './performance-section'
import { FundamentalsSection } from './fundamentals-section'
import { SentimentSection } from './sentiment-section'
import { TeamSection } from './team-section'
import { TokenomicsSection } from './tokenomics-section'
import { NewsInsights } from './news-insights'
import { Technicals } from './technicals'

export function TabContent({ bitcoinData }) {
  const { activeTab } = useTab()

  switch (activeTab) {
    case 'Overview':
      return (
        <div className="space-y-6">
          <PerformanceSection />
          <FundamentalsSection bitcoinData={bitcoinData} />
          <SentimentSection />
        </div>
      )
    case 'Fundamentals':
      return <FundamentalsSection bitcoinData={bitcoinData} />
    case 'News Insights':
      return <NewsInsights />
    case 'Sentiments':
      return <SentimentSection />
    case 'Team':
      return <TeamSection />
    case 'Technicals':
      return <Technicals />
    case 'Tokenomics':
      return <TokenomicsSection />
    default:
      return null
  }
}

