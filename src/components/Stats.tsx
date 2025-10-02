import { Card, CardContent } from "./ui/card";
import { Users, BookOpen, Trophy, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50,000+",
    label: "活跃学员",
    description: "来自全球的编程学习者",
    color: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: BookOpen,
    value: "1,000+",
    label: "互动课程",
    description: "涵盖多种编程语言",
    color: "text-green-500",
    bgColor: "bg-green-50"
  },
  {
    icon: Trophy,
    value: "10,000+",
    label: "完成挑战",
    description: "每日更新的编程题目",
    color: "text-yellow-500",
    bgColor: "bg-yellow-50"
  },
  {
    icon: Clock,
    value: "1M+",
    label: "学习时长",
    description: "累计编程学习小时数",
    color: "text-purple-500",
    bgColor: "bg-purple-50"
  }
];

export function Stats() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">用数据说话</h2>
          <p className="text-lg text-muted-foreground">
            加入我们不断成长的编程学习社区
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <div className={`w-16 h-16 mx-auto rounded-full ${stat.bgColor} flex items-center justify-center`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="font-semibold">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}