'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function NavMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: 'Crypto Taxes', href: '/crypto-taxes' },
    { label: 'Free Tools', href: '/free-tools' },
    { label: 'Resource Center', href: '/resource-center' }
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2026863%20(1)-Kd2b6vuwNjKZEOWeSvgXDBGBtTcDdV.png"
                alt="KoinX Logo" 
                className="h-10"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base text-gray-700 hover:text-gray-900"
              >
                {item.label}
              </Link>
            ))}
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden rounded-md p-2 text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

