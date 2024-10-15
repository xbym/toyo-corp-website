import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Footer from '@/components/Footer'
import LiveClassesSidebar from '@/components/LiveClassesSidebar'
import ConsultationSidebar from '@/components/ConsultationSidebar'
import { Navbar } from '@/components/Navbar'

export default function SGUStudyPage() {
  const sguFeatures = [
    {
      title: "国际化教育",
      description: "SGU项目提供全英文授课，吸引来自世界各地的学生，创造多元文化的学习环境。学生可以在国际化的氛围中学习，提高跨文化交流能力。",
      image: "international-education.jpg"
    },
    {
      title: "优质学术资源",
      description: "SGU大学拥有一流的教学设施和研究资源，学生可以参与前沿研究项目，接触最新的学术成果。许多SGU大学还与全球知名企业和研究机构有合作关系。",
      image: "academic-resources.jpg"
    },
    {
      title: "就业优势",
      description: "SGU毕业生在就业市场上具有显著优势。许多SGU大学与日本和国际企业有密切合作，提供丰富的实习和就业机会。SGU的国际化教育也使毕业生更容易在全球就业市场中脱颖而出。",
      image: "career-advantages.jpg"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col md:flex-row flex-grow pt-16">
        <LiveClassesSidebar />
        <main className="flex-1 p-4 overflow-y-auto">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">SGU留学优势</h1>
            
            <div className="mb-8">
              <p className="text-lg mb-4">
                SGU（Super Global University）项目是日本政府为了提高日本高等教育的国际竞争力而推出的计划。选择SGU留学不仅能够享受到日本顶尖大学的优质教育资源，还能在国际化的环境中学习和成长，为未来的全球化职业生涯打下坚实基础。
              </p>
              <div className="relative w-full h-[300px]">
                <Image
                  src="/images/sgu-advantages.jpg"
                  alt="SGU留学优势"
                  fill
                  style={{objectFit: "cover"}}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">SGU特征</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {sguFeatures.map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{feature.description}</p>
                    <div className="relative w-full h-[200px]">
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

            <h2 className="text-2xl font-bold mb-4">SGU学校价格</h2>
            <div className="mb-8">
              <div className="relative w-full h-[400px]">
                <Image
                  src="/images/sgu-price-table.jpg"
                  alt="SGU学校价格表"
                  fill
                  style={{objectFit: "contain"}}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">SGU学校介绍</h2>
            <div className="mb-8">
              <p className="text-lg mb-4">
                SGU项目包括日本多所顶尖大学，如东京大学、京都大学、大阪大学等。这些大学在各自的领域都有卓越的成就和国际声誉。选择SGU学校意味着你将有机会在日本最好的教育机构学习，接触世界一流的教授和研究资源。每所SGU学校都有其特色专业和研究领域，学生可以根据自己的兴趣和职业规划选择最适合的学校。
              </p>
              <div className="relative w-full h-[300px]">
                <Image
                  src="/images/sgu-schools-introduction.jpg"
                  alt="SGU学校介绍"
                  fill
                  style={{objectFit: "cover"}}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </main>
        <ConsultationSidebar />
      </div>
      <Footer />
    </div>
  )
}