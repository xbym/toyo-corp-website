"use client"

import { useState } from 'react'
// ... 其余的导入保持不变
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react'

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function ConsultationSidebar() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <aside className={`bg-gray-50 p-4 transition-all duration-300 ease-in-out ${isOpen ? 'md:translate-x-0' : 'md:translate-x-full'}`}>
      <div className="flex justify-between items-center mb-4">
        <CardTitle className="text-sm font-medium">咨询服务</CardTitle>
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
          <span className="sr-only">Toggle consultation</span>
        </Button>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-full top-0 hidden md:flex border border-gray-200 shadow-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <ChevronRight className="h-4 w-4" />
        ) : (
          <ChevronLeft className="h-4 w-4" />
        )}
        <span className="sr-only">Toggle consultation</span>
      </Button>
      {isOpen && (
        <div className="w-64">
          <Card className="mb-4">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">咨询服务 1</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className="w-[200px] h-[200px] mx-auto mb-2 flex items-center justify-center text-white font-bold"
                style={{ backgroundColor: getRandomColor() }}
              >
                QR Code 1
              </div>
              <p className="text-center text-sm">扫描二维码获取更多信息</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">咨询服务 2</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className="w-[200px] h-[200px] mx-auto mb-2 flex items-center justify-center text-white font-bold"
                style={{ backgroundColor: getRandomColor() }}
              >
                QR Code 2
              </div>
              <p className="text-center text-sm">扫描二维码预约咨询</p>
            </CardContent>
          </Card>
        </div>
      )}
    </aside>
  )
}