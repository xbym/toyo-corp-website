import Image from 'next/image'
import { Navbar } from '@/components/Navbar'
import Footer from '@/components/Footer'
import LiveClassesSidebar from '@/components/LiveClassesSidebar'
import ConsultationSidebar from '@/components/ConsultationSidebar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
/*import dynamic from 'next/dynamic'*/

export default function ServicesPage() {
  const services = [
    {
      title: "日本语言学校介绍",
      description: "提供全面的日本语言学校列表，包括学校名称、学费、特色和入学时间。我们详细解释如何帮助学生适应日本的生活环境，提升日语能力，以及支持签证申请。",
      advantages: [
        "系统化的日语学习和升学就业辅导，帮助学生打下扎实的日语基础。",
        "提供文化活动和生活指导，快速融入日本社会。"
      ],
      images: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400"
      ]
    },
    {
      title: "留学服务",
      description: "解释SGU留学项目，包括项目优势、教育质量和申请流程。我们介绍如何协助学生通过SGU项目直接进入日本的大学学习。",
      advantages: [
        "全英语授课，免去日语学习的压力，为学生提供更多的学习和生活便利。",
        "提供全程申请支持，从材料准备到面试指导。"
      ],
      images: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400"
      ]
    },
    {
      title: "学生寮介绍",
      description: "提供各类学生寮的详细信息，包括寮的位置、费用、设施等。我们强调学生寮的安全性、便利性以及如何帮助学生节省成本。",
      advantages: [
        "提供一站式服务，从入住到日常管理，确保学生的舒适与安全。",
        "位置优越，接近教育机构，节省通勤时间。"
      ],
      images: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400"
      ]
    },
    {
      title: "投资咨询与支持",
      description: "详细介绍如何在日本投资房产，包括税费、法律和市场分析。我们提供专业的投资建议，帮助投资者识别和评估投资机会。",
      advantages: [
        "专业的市场分析，提供最新的投资趋势和数据支持。",
        "协助处理所有投资相关的法律和税务问题，确保投资的安全性和收益性。"
      ],
      images: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400"
      ]
    },
    {
      title: "文化旅游定制服务",
      description: "提供定制的文化旅游服务，让学生和访客深入了解日本的历史和文化。根据个人兴趣和需求定制旅游行程，包括但不限于历史名胜、现代景点、艺术展览和特色活动。",
      advantages: [
        "提供多语言导游支持，确保游客能够无障碍地体验和了解日本文化。",
        "根据客户的时间和预算进行个性化行程规划，包括VIP专享服务选项。"
      ],
      images: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400"
      ]
    },
    {
      title: "签证支持服务",
      description: "提供全面的签证申请支持，包括学生签证、工作签证、旅游签证等。我们协助客户准备必要的申请文件，提供最新的签证政策咨询和专业指导。",
      advantages: [
        "高成功率的签证申请支持，由经验丰富的专业团队处理复杂的申请过程。",
        "提供签证申请后的跟踪服务，包括续签和状态变更等。"
      ],
      images: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400"
      ]
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex">
        <LiveClassesSidebar />
        <main className="flex-grow p-6">
          <h1 className="text-3xl font-bold mb-6">我们的服务</h1>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{service.description}</p>
                  <h4 className="font-semibold mb-2">优势：</h4>
                  <ul className="list-disc pl-5 mb-4">
                    {service.advantages.map((advantage, i) => (
                      <li key={i}>{advantage}</li>
                    ))}
                  </ul>
                  <div className="grid grid-cols-2 gap-4">
                    {service.images.map((src, i) => (
                      <Image
                        key={i}
                        src={src}
                        alt={`${service.title} 图片 ${i + 1}`}
                        width={400}
                        height={300}
                        className="rounded-lg"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
        <ConsultationSidebar />
      </div>
      <Footer />
    </div>
  )
}