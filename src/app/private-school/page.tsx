import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Footer from '@/components/Footer'
import LiveClassesSidebar from '@/components/LiveClassesSidebar'
import ConsultationSidebar from '@/components/ConsultationSidebar'

export default function PrivateSchoolPage() {
  const features = [
    {
      title: "名师坐镇",
      description: "我们的教师团队由业内顶尖院校的博士生组成，担任学术指挥官与学术研发。师资选拔标准严格，均毕业于顶尖高校与美院。教研老师教龄均在5年以上，熟知学校特征和选择取舍。",
      image: "expert-teachers.jpg"
    },
    {
      title: "因材施教",
      description: "我们提供入学相谈服务，帮助学生合理规划，寻找最匹配的课程规划、学校规划和职业规划。我们的团队包括前日本上市公司设计部设计师，对国内外就业情况有深度研究，能洞察人才需求趋势。",
      image: "personalized-education.jpg"
    },
    {
      title: "心理指导",
      description: "我们定期安排心理医生讲座和指导，帮助学生稳定考试的最佳状态。我们不仅关心学习状态，更关心学生的心理健康，为留学生提供全方位的支持。",
      image: "psychological-guidance.jpg"
    },
    {
      title: "就业指导",
      description: "我们的就职辅导团队由前上市公司设计部设计师和HR领头，在日本各个行业的大小公司拥有丰富的实战经验和广泛的人脉，能为学生提供最实用的就业指导。",
      image: "career-guidance.jpg"
    },
  ]

  const courses = [
    { title: "学部文理科类", image: "undergraduate-science-arts.jpg" },
    { title: "大学院文理科类", image: "graduate-science-arts.jpg" },
    { title: "学部艺术类", image: "undergraduate-fine-arts.jpg" },
    { title: "大学院艺术类", image: "graduate-fine-arts.jpg" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col md:flex-row flex-grow">
        {/* 左侧边栏 - 直播课展示 */}
        <LiveClassesSidebar />

        {/* 主要内容 */}
        <main className="flex-1 p-4 overflow-y-auto">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">私塾特色</h1>
          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{feature.description}</p>
                    <div className="mt-4 relative w-full h-[200px]">
                      <Image
                        src={`/images/${feature.image}`}
                        alt={feature.title}
                        fill
                        style={{objectFit: "cover"}}
                        className="rounded-lg shadow-md"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-4 text-center">课程套餐及价目表</h2>
            <div className="space-y-6">
              {courses.map((course, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative h-[400px]">
                    <Image
                      src={`/images/${course.image}`}
                      alt={`${course.title}价目表`}
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