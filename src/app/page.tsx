'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Footer from '@/components/Footer'
import LiveClassesSidebar from '@/components/LiveClassesSidebar'
import ConsultationSidebar from '@/components/ConsultationSidebar'

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

interface HomepageSection {
  id: string;
  title: string;
  content?: string;
  items?: Array<{ title: string; description: string }>;
  imageUrl?: string;
}

export default function HomePage() {
  const [homepageData, setHomepageData] = useState<HomepageSection[]>([])
  const [imageUrls, setImageUrls] = useState<Record<string, string>>({})

  useEffect(() => {
    fetch('/api/getHomepage')
      .then(response => response.json())
      .then(data => {
        setHomepageData(data)
        const urls: Record<string, string> = {}
        data.forEach((section: HomepageSection) => {
          if (section.imageUrl) {
            urls[section.id] = section.imageUrl
          }
        })
        setImageUrls(urls)
      })
      .catch(error => console.error('Error fetching homepage data:', error))
  }, [])

  if (homepageData.length === 0) {
    return <div>Loading...</div>
  }

  const adsSection = homepageData.find(section => section.id === 'ads')
  const categoriesSection = homepageData.find(section => section.id === 'categories')
  const aboutSection = homepageData.find(section => section.id === 'about')
  const servicesSection = homepageData.find(section => section.id === 'services')

  return (
    <div className="flex flex-col min-h-screen">
      {/* 滚动广告横幅 */}
      <section className="w-full h-40 relative overflow-hidden">
        <div className="flex absolute left-0 animate-carousel">
          {adsSection && adsSection.items && adsSection.items.map((ad, index) => (
            <div
              key={index}
              className="w-[1200px] h-[160px] flex items-center justify-center text-white text-2xl font-bold"
              style={{ backgroundColor: getRandomColor() }}
            >
              {ad.title}
            </div>
          ))}
        </div>
      </section>

      {/* 主要分类 */}
      <section className="w-full py-4 bg-blue-600">
        <div className="container mx-auto px-4 flex justify-between">
          {categoriesSection && categoriesSection.items && categoriesSection.items.map((category, index) => (
            <Link key={index} href={`/category/${category.title}`} className="text-white hover:underline">
              {category.title}
            </Link>
          ))}
        </div>
      </section>

      {/* 在线模考和全部分类 */}
      <section className="w-full py-4 bg-gray-100">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/online-exam" className="flex-shrink-0">
            <div
              className="w-[200px] h-[50px] flex items-center justify-center text-white font-bold"
              style={{ backgroundColor: getRandomColor() }}
            >
              在线模考
            </div>
          </Link>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="全部分类" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="category1">留学申请</SelectItem>
              <SelectItem value="category2">语言学习</SelectItem>
              <SelectItem value="category3">考试准备</SelectItem>
              <SelectItem value="category4">生活指南</SelectItem>
              <SelectItem value="category5">就业支持</SelectItem>
              <SelectItem value="category6">文化体验</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>

      {/* 主要内容区域 */}
      <div className="flex flex-col md:flex-row">
        {/* 左侧边栏 - 直播课展示 */}
        <LiveClassesSidebar />

        {/* 中间主要内容 */}
        <main className="flex-1 p-4">
          {/* 新闻展示 */}
          <h2 className="text-2xl font-bold mb-4">最新资讯</h2>
          {[1, 2, 3].map((row) => (
            <div key={row} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[1, 2].map((col) => (
                <Card key={`${row}-${col}`}>
                  <div
                    className="w-full h-[150px] flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: getRandomColor() }}
                  >
                    {`新闻${row}-${col}`}
                  </div>
                  <CardContent>
                    <h3 className="font-bold mb-2">新闻标题 {row}-{col}</h3>
                    <p className="text-sm text-gray-600 mb-2">这里是新闻摘要，简要介绍新闻内容...</p>
                    <Link href={`/news/${row}-${col}`} className="text-blue-600 hover:underline text-sm">
                      阅读更多
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ))}
        </main>

        {/* 右侧边栏 - 咨询展示 */}
        <ConsultationSidebar />
      </div>

      {/* 窄广告条 */}
      {[1, 2].map((num) => (
        <section key={num} className="w-full py-2">
          <div className="container mx-auto px-4">
            <Link href={`/ad/${num}`}>
              <div
                className="w-full h-[60px] flex items-center justify-center text-white font-bold"
                style={{ backgroundColor: getRandomColor() }}
              >
                {`广告条${num}`}
              </div>
            </Link>
          </div>
        </section>
      ))}

      {/* 额外卡片展示 */}
      <section className="w-full py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">热门话题</h2>
          {[1, 2, 3].map((row) => (
            <div key={row} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[1, 2, 3, 4].map((col) => (
                <Card key={`${row}-${col}`}>
                  <div
                    className="w-full h-[150px] flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: getRandomColor() }}
                  >
                    {`话题${row}-${col}`}
                  </div>
                  <CardContent>
                    <h3 className="font-bold mb-2">话题标题 {row}-{col}</h3>
                    <p className="text-sm text-gray-600 mb-2">这里是话题简介，概述主要内容...</p>
                    <Link href={`/topic/${row}-${col}`} className="text-blue-600 hover:underline text-sm">
                      了解更多
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* 公司背景介绍横幅 */}
      <section className="w-full py-16 bg-gray-800 text-white relative">
        {imageUrls['about'] ? (
          <Image
            src={imageUrls['about']}
            alt="公司背景"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold"
            style={{ backgroundColor: getRandomColor() }}
          >
            公司背景
          </div>
        )}
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-4">关于東陽株式会社</h2>
          <p className="max-w-2xl">
            {aboutSection && aboutSection.content}
          </p>
        </div>
      </section>

      {/* 公司功能模块 */}
      <section className="w-full py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">我们的服务</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesSection && servicesSection.items && servicesSection.items.map((service, index) => (
              <div key={index} className="text-center">
                <div
                  className="w-[100px] h-[100px] mx-auto mb-4 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: getRandomColor() }}
                >
                  图标{index + 1}
                </div>
                <h3 className="font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <Footer />
    </div>
  )
}