import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8">
              联系我们
            </h1>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>联系表单</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name">姓名</label>
                      <Input id="name" placeholder="请输入您的姓名" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email">电子邮件</label>
                      <Input id="email" placeholder="请输入您的电子邮件" required type="email" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message">留言</label>
                      <Textarea className="min-h-[100px]" id="message" placeholder="请输入您的留言" required />
                    </div>
                    <Button type="submit">发送</Button>
                  </form>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>联系信息</CardTitle>
                
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p>
                      <strong>地址：</strong> 东京都新宿区西新宿1-1-1
                    </p>
                    <p>
                      <strong>电话：</strong> +81 3-1234-5678
                    </p>
                    <p>
                      <strong>电子邮件：</strong> info@toyo-corp.jp
                    </p>
                    <div className="aspect-[16/9] overflow-hidden rounded-lg">
  <Image
    alt="Map"
    src="/placeholder.svg"
    width={600}
    height={400}
    layout="responsive"
    className="object-cover"
  />
</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}