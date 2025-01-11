'use client'

import { useTab } from './tab-context'
import { cn } from '../lib/utils'

const tabs = [
  'Overview',
  'Fundamentals',
  'News Insights',
  'Sentiments',
  'Team',
  'Technicals',
  'Tokenomics',
]

export function OverviewTabs() {
  const { activeTab, setActiveTab } = useTab()

  return (
    <div className="border-b border-gray-200 mb-6">
      <div className="overflow-x-auto">
        <div className="flex min-w-max gap-8 px-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                'py-4 text-sm font-semibold relative whitespace-nowrap',
                activeTab === tab
                  ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

