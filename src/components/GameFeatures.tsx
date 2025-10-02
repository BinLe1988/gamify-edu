import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Gamepad2, Target, Users, Award, Zap, Code } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const features = [
  {
    icon: Gamepad2,
    title: "游戏化学习",
    description: "通过角色扮演、关卡挑战和成就系统让学习变得有趣",
    color: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: Target,
    title: "实时挑战",
    description: "参与每日编程挑战，与全球开发者比拼技能",
    color: "text-purple-500",
    bgColor: "bg-purple-50"
  },
  {
    icon: Users,
    title: "社区协作",
    description: "加入学习小组，与志同道合的伙伴一起成长",
    color: "text-green-500",
    bgColor: "bg-green-50"
  },
  {
    icon: Award,
    title: "成就系统",
    description: "解锁徽章和证书，展示你的编程成就",
    color: "text-yellow-500",
    bgColor: "bg-yellow-50"
  },
  {
    icon: Zap,
    title: "智能提示",
    description: "AI导师提供个性化指导和即时反馈",
    color: "text-orange-500",
    bgColor: "bg-orange-50"
  },
  {
    icon: Code,
    title: "实战项目",
    description: "通过真实项目积累实际开发经验",
    color: "text-indigo-500",
    bgColor: "bg-indigo-50"
  }
];

export function GameFeatures() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary">
                <Gamepad2 className="w-3 h-3 mr-1" />
                游戏化特性
              </Badge>
              <h2 className="text-4xl">
                让学习编程
                <span className="block text-blue-500">像玩游戏一样有趣</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                我们将游戏中最吸引人的元素融入到编程学习中，让每一次练习都充满挑战和乐趣。
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="space-y-3">
                  <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Game Interface Mockup */}
          <div className="relative">
            <Card className="overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Code className="w-5 h-5" />
                    </div>
                    <div>
                      <h3>Python 冒险者</h3>
                      <div className="flex items-center gap-2 text-sm opacity-90">
                        <span>等级 5</span>
                        <div className="w-20 h-1 bg-white/20 rounded-full">
                          <div className="w-3/4 h-full bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">1,250</div>
                    <div className="text-sm opacity-90">经验值</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold">15</div>
                    <div className="text-xs opacity-90">已完成挑战</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold">8</div>
                    <div className="text-xs opacity-90">获得徽章</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold">3</div>
                    <div className="text-xs opacity-90">连胜天数</div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <div className="space-y-3">
                  <h4>今日挑战</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">数组排序算法</span>
                      </div>
                      <Badge className="bg-green-500">已完成</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-sm">递归函数练习</span>
                      </div>
                      <Badge variant="outline">进行中</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <span className="text-sm">面向对象设计</span>
                      </div>
                      <Badge variant="secondary">未开始</Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4>最新成就</h4>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Award className="w-4 h-4 text-yellow-500" />
                    </div>
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Target className="w-4 h-4 text-blue-500" />
                    </div>
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <Zap className="w-4 h-4 text-purple-500" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80 blur-lg"></div>
            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-60 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}