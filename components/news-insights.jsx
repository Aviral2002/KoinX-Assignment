import { ArrowUpRight } from 'lucide-react'

const newsItems = [
  {
    title: "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
    source: "Lorem ipsum",
    time: "2 hours ago",
    image: "/placeholder.svg?height=80&width=120"
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum.",
    source: "Lorem ipsum",
    time: "3 hours ago",
    image: "/placeholder.svg?height=80&width=120"
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
    source: "Lorem ipsum",
    time: "4 hours ago",
    image: "/placeholder.svg?height=80&width=120"
  }
]

export function NewsInsights() {
  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">News Insights</h2>
      <div className="space-y-6">
        {newsItems.map((item, index) => (
          <div key={index} className="flex gap-4 border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
            <img src={item.image} alt={item.title} className="w-30 h-20 object-cover rounded-lg" />
            <div className="flex-1">
              <h3 className="font-semibold mb-2 line-clamp-2">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.source} • {item.time}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-6 text-blue-600 font-semibold flex items-center">
        See More <ArrowUpRight className="ml-2 h-4 w-4" />
      </button>
    </div>
  )
}

