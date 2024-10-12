import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8">
              关于东阳株式会社
            </h1>
            <div className="space-y-12">
              <Card>
                <CardHeader>
                  <CardTitle>公司背景</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>东阳株式会社成立于2010年，是一家专业的日本语言学习和留学服务提供商。我们的创始团队由具有丰富留学经验和教育背景的专业人士组成，致力于为中国学生提供高质量的日本留学服务。[^1]</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>我们的教育理念</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>我们坚信教育是改变人生的力量。我们的教育理念基于以下几点：[^1]</p>
                  <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>个性化教育：每个学生都是独特的，我们提供量身定制的留学方案。</li>
                    <li>全人教育：我们不仅关注学生的学术成就，还注重培养他们的综合能力和国际视野。</li>
                    <li>实践导向：我们鼓励学生通过实践来学习和成长，为未来的职业发展做好准备。</li>
                    <li>文化融合：我们帮助学生更好地理解和适应日本文化，促进中日文化交流。</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>长期目标</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>作为一家致力于教育事业的公司，我们的长期目标包括：[^1]</p>
                  <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>成为中日教育交流的桥梁，促进两国教育合作和文化交流。</li>
                    <li>不断提升我们的服务质量，为更多学生提供优质的留学服务。</li>
                    <li>拓展我们的业务范围，包括开发在线教育平台，为不能亲赴日本的学生提供远程学习机会。</li>
                    <li>建立更广泛的学校和企业合作网络，为学生提供更多的学习和就业机会。</li>
                    <li>培养具有国际视野和跨文化沟通能力的人才，为中日两国的发展做出贡献。</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}