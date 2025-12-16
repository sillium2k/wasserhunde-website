import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface Tab {
  id: string
  label: string
  icon?: ReactNode
}

interface TabsProps {
  tabs: Tab[]
  activeTab: string
  onChange: (tabId: string) => void
  className?: string
}

export default function Tabs({ tabs, activeTab, onChange, className = '' }: TabsProps) {
  return (
    <div className={`border-b border-gray-200 ${className}`}>
      <nav className="flex space-x-8 overflow-x-auto scrollbar-hide" aria-label="Tabs">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`
                relative py-4 px-1 text-center whitespace-nowrap font-medium text-base transition-colors
                ${
                  isActive
                    ? 'text-petrol'
                    : 'text-gray-600 hover:text-gray-900'
                }
              `}
            >
              <span className="flex items-center gap-2">
                {tab.icon}
                {tab.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-petrol"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          )
        })}
      </nav>
    </div>
  )
}
