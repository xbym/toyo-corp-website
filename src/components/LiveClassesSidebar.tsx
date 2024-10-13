"use client"

import { useState } from 'react'
// ... 其余的导入保持不变
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react'

export default function LiveClassesSidebar() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <aside className={`bg-gray-50 p-4 transition-all duration-300 ease-in-out ${isOpen ? 'md:translate-x-0' : 'md:-translate-x-full'}`}>
      <div className="flex justify-between items-center mb-4">
        <CardTitle className="text-sm font-medium">直播课程</CardTitle>
        <Button
          variant="ghost"
          size="sm"
          className="w-9 p-0 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
          <span className="sr-only">Toggle live classes</span>
        </Button>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-full top-0 hidden md:flex border border-gray-200 shadow-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <ChevronLeft className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
        <span className="sr-only">Toggle live classes</span>
      </Button>
      {isOpen && (
        <div className="w-64">
          <Card>
            <CardContent>
              <ul className="space-y-2">
                {[1, 2, 3, 4, 5].map((index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-xs">课程{index}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">直播课程 {index}</p>
                      <p className="text-xs text-gray-500">讲师名称</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      )}
    </aside>
  )
}