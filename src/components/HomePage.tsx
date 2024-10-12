import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  东阳株式会社
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  专业的日本语言学习和留学服务提供商，十年行业经验，助您实现留学梦想。
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="/services">了解更多</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">联系我们</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">我们的服务</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>语言学校申请</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>提供全面的日本语言学校申请服务，包括学校选择、申请材料准备等。[^1]</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>留学顾问服务</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>专业的留学顾问团队，为您提供个性化的留学规划和指导。[^1]</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>学生寮服务</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>安全、便利的学生寮服务，让您在日本的生活无忧无虑。[^1]</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">成功案例</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>小林同学 - 成功进入东京大学</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>"感谢东阳株式会社的帮助，我成功进入了梦想中的东京大学。他们的专业指导让我的留学之路变得轻松许多。"</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>王同学 - 顺利获得日本工作签证</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>"东阳株式会社不仅帮助我完成了语言学习，还为我提供了就业指导，让我顺利在日本找到了理想的工作。"</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}