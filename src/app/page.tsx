'use client'

/*import Image from 'next/image'*/
import Link from 'next/link'
/*import { Button } from '@/components/ui/button'*/
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

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 滚动广告横幅 */}
      <section className="w-full h-40 relative overflow-hidden">
        <div className="flex absolute left-0 animate-carousel">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="w-[1200px] h-[160px] flex items-center justify-center text-white text-2xl font-bold"
              style={{ backgroundColor: getRandomColor() }}
            >
              广告{num}
            </div>
          ))}
        </div>
      </section>

      {/* 主要分类 */}
      <section className="w-full py-4 bg-blue-600">
        <div className="container mx-auto px-4 flex justify-between">
          {['学部文科', '学部理科', '研究生', '语言学校', '专门学校', '高中'].map((category) => (
            <Link key={category} href={`/category/${category}`} className="text-white hover:underline">
              {category}
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
        <div
          className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold"
          style={{ backgroundColor: getRandomColor() }}
        >
          公司背景
        </div>
        <div className="container mx-auto px-4 relative  z-10">
          <h2 className="text-3xl font-bold mb-4">关于東陽株式会社</h2>
          <p className="max-w-2xl">
            東陽株式会社成立于20XX年，是一家专注于为留学生提供全方位服务的教育咨询公司。
            我们的使命是帮助每一位学生实现他们在日本的学习和职业目标，为他们的未来铺平道路。
            凭借丰富的经验和专业的团队，我们为学生提供从留学申请到就业支持的一站式服务。
          </p>
        </div>
      </section>

      {/* 公司功能模块 */}
      <section className="w-full py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">我们的服务</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "在线课堂", desc: "提供高质量的在线日语和专业课程" },
              { title: "学院系统", desc: "全面的学习管理和进度跟踪系统" },
              { title: "留学咨询", desc: "个性化的留学规划和申请支持" },
              { title: "就业指导", desc: "为在日就业提供全面的career支持" }
            ].map((service, index) => (
              <div key={index} className="text-center">
                <div
                  className="w-[100px] h-[100px] mx-auto mb-4 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: getRandomColor() }}
                >
                  图标{index + 1}
                </div>
                <h3 className="font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.desc}</p>
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