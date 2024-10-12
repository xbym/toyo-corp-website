import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8">
              我们的服务
            </h1>
            <div className="space-y-12">
              <Card>
                <CardHeader>
                  <CardTitle>语言学校申请服务</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">我们提供全面的日本语言学校申请服务，包括学校选择、申请材料准备等。以下是部分合作语言学校的信息：[^1]</p>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>学校名称</TableHead>
                        <TableHead>学费/年（日元）</TableHead>
                        <TableHead>特点</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>东京国际日本语学院</TableCell>
                        <TableCell>78万</TableCell>
                        <TableCell>中国留学生比例高，升学率出众</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>大阪国际教育学院</TableCell>
                        <TableCell>79万</TableCell>
                        <TableCell>设有护士课程及专门课程，提供就业指导</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>京进语言学院京都校</TableCell>
                        <TableCell>72.6万</TableCell>
                        <TableCell>小班教学，定期举行模拟考试</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>签证支持服务</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>我们提供全面的签证申请和延长服务，包括：[^1]</p>
                  <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>留学签证申请指导</li>
                    <li>签证延长支持</li>
                    <li>工作签证申请协助</li>
                    <li>签证相关文件准备</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>学生寮服务</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">我们的学生寮服务具有以下优势：[^1]</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>安全至上：定期房管巡视，保障学生安全</li>
                    <li>费用透明：所有费用清晰明确，避免隐藏收费</li>
                    <li>一站式服务：拎包入住，所有设施准备齐全</li>
                    <li>费用更低：同区域内价格更具优势</li>
                    <li>管理完善：全方位支持，提供如同家的温暖与便利</li>
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