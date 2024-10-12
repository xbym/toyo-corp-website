import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFF0F5]">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-24 md:py-32 lg:py-40 bg-[#FFF0F5]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-[#1E2A3B]">
                塑造您的日本梦想
              </h1>
              <p className="mx-auto max-w-[700px] text-[#4A5568] md:text-xl dark:text-[#A0AEC0]">
                东阳株式会社 - 您的房产投资与留学服务专家
              </p>
              <Button className="bg-[#FF6B6B] hover:bg-[#FF8787] text-white">
                探索我们的服务
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#1E2A3B]">我们的核心服务</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="bg-[#F8FAFC] border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-[#1E2A3B]">
                    <svg className="w-6 h-6 mr-2 text-[#FF6B6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                    房地产投资
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#4A5568]">在日本主要城市寻找高回报的房产投资机会，我们提供专业的市场分析和投资建议。[^1]</p>
                </CardContent>
              </Card>
              <Card className="bg-[#F8FAFC] border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-[#1E2A3B]">
                    <svg className="w-6 h-6 mr-2 text-[#FF6B6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
                    留学服务
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#4A5568]">从语言学校到大学申请，我们提供全面的留学咨询和申请服务，助您实现留学梦想。[^1]</p>
                </CardContent>
              </Card>
              <Card className="bg-[#F8FAFC] border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-[#1E2A3B]">
                    <svg className="w-6 h-6 mr-2 text-[#FF6B6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                    职业培训
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#4A5568]">提供专业的职业培训和就业指导，帮助您在日本职场获得成功。[^1]</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F8FAFC]">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#1E2A3B]">客户评价</h2>
            <div className="grid gap-6 lg:grid-cols-2">
            <Card className="bg-white border-none shadow-lg">
  <CardHeader>
    <CardTitle className="text-[#1E2A3B]">小林同学 - 成功进入东京大学</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-[#4A5568]">{"\"感谢东阳株式会社的帮助，我成功进入了梦想中的东京大学。他们的专业指导让我的留学之路变得轻松许多。\""}</p>
  </CardContent>
</Card>
<Card className="bg-white border-none shadow-lg">
  <CardHeader>
    <CardTitle className="text-[#1E2A3B]">王同学 - 顺利获得日本工作签证</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-[#4A5568]">{"\"东阳株式会社不仅帮助我完成了语言学习，还为我提供了就业指导，让我顺利在日本找到了理想的工作。\""}</p>
  </CardContent>
</Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#FFF0F5]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1E2A3B]">准备开始您的日本之旅?</h2>
              <p className="mx-auto max-w-[700px] text-[#4A5568] md:text-xl">
                无论您是寻找投资机会还是规划留学，我们都能为您提供专业的建议和支持。
              </p>
              <Button className="bg-[#FF6B6B] hover:bg-[#FF8787] text-white">
                立即联系我们
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-[#1E2A3B] text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">关于我们</h3>
              <p className="text-sm">东阳株式会社是您的房产投资与留学服务专家，致力于帮助您实现日本梦想。</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">联系方式</h3>
              <p className="text-sm">地址：东京都新宿区西新宿1-1-1</p>
              <p className="text-sm">电话：+81 3-1234-5678</p>
              <p className="text-sm">邮箱：info@toyo-corp.jp</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">快速链接</h3>
              <ul className="text-sm space-y-2">
                <li><Link href="/services" className="hover:text-[#FF6B6B]">服务项目</Link></li>
                <li><Link href="/about" className="hover:text-[#FF6B6B]">关于我们</Link></li>
                <li><Link href="/contact" className="hover:text-[#FF6B6B]">联系我们</Link></li>
                <li><Link href="/privacy" className="hover:text-[#FF6B6B]">隐私政策</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>© 2024 东阳株式会社. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}