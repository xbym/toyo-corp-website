import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Footer from '@/components/Footer'
import LiveClassesSidebar from '@/components/LiveClassesSidebar'
import ConsultationSidebar from '@/components/ConsultationSidebar'

export default function LanguageSchoolsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col md:flex-row flex-grow">
        {/* 左侧边栏 - 直播课展示 */}
        <LiveClassesSidebar />

        {/* 主要内容 */}
        <main className="flex-1 p-4 overflow-y-auto">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">日本语言学校对留学生的重要性</h1>
          
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>帮助留学生适应日本环境</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>语言学校不仅是学习日语的地方，更是留学生融入日本社会的起
点。初次来到日本的留学生往往面临文化冲击和生活适应问题，
语言学校通过提供丰富的文化课程和生活指导，帮助学生逐步适
应日本的生活习惯和社会规范。</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>文化适应锻炼语言能力，为升学或就业打好基础</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>语言学校的首要任务就是帮助学生提高日语能力。对于刚到日本
的留学生，日语学习不仅是生活的基础，更是未来升学或就业的
重要工具。语言学校的课程内容根据不同的日语能力级别划分，
从基础日语到高级日语都有对应课程，并且会结合JLPT（日本语
能力测试）等考试需求进行辅导。</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>协助办理签证申请及延长</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>留学签证是留学生能在日本顺利学习和生活的基础，而语言学校
在申请签证和办理签证延长方面扮演着非常重要的角色。大多数
语言学校都会为新生提供详细的签证申请指导，确保学生能够顺
利获得日本的留学签证，并提供后续签证延长的支持服务。
</p>
                </CardContent>
              </Card>
            </div>

            <div className="mb-8 relative w-full h-[300px]">
              <Image
                src="/images/language-school-environment.jpg"
                alt="Language School Environment"
                fill
                style={{objectFit: "cover"}}
                className="rounded-lg shadow-md"
              />
            </div>

            <h2 className="text-2xl font-bold mb-4">各地区日本语言学校</h2>
            <div className="space-y-6">
              {[
                { title: "东京", image: "tokyo-price-table.jpg" },
                { title: "东京周边", image: "tokyo-surroundings-price-table.jpg" },
                { title: "京都及名古屋", image: "kyoto-nagoya-price-table.jpg" },
                { title: "北海道", image: "hokkaido-price-table.jpg" },
                { title: "大阪", image: "osaka-price-table.jpg" }
              ].map((region, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{region.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative h-[400px]">
                    <Image
                      src={`/images/${region.image}`}
                      alt={`${region.title}语言学校价目表`}
                      fill
                      style={{objectFit: "contain"}}
                      className="rounded-lg shadow-sm"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>

        {/* 右侧边栏 - 咨询展示 */}
        <ConsultationSidebar />
      </div>

      <Footer />
    </div>
  )
}