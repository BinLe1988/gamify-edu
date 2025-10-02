import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Play, Zap, Star, Code2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-200">
                <Zap className="w-3 h-3 mr-1" />
                全新游戏化学习体验
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl leading-tight">
                让编程学习
                <span className="block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  充满乐趣
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                通过游戏化的互动课程、实时挑战和社区竞赛，让每个人都能轻松掌握编程技能。从零基础到专家级别，一步步成为编程大师。
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500">50K+</div>
                <div className="text-sm text-muted-foreground">活跃学员</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-500">1000+</div>
                <div className="text-sm text-muted-foreground">互动课程</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-500">95%</div>
                <div className="text-sm text-muted-foreground">完成率</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                <Play className="w-5 h-5 mr-2" />
                免费开始学习
              </Button>
              <Button size="lg" variant="outline">
                <Star className="w-5 h-5 mr-2" />
                查看课程
              </Button>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBlZHVjYXRpb24lMjBwcm9ncmFtbWluZ3xlbnwxfHx8fDE3NTk0MjMwNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="编程教育"
                className="w-full h-[400px] object-cover"
              />
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm">在线学习中</span>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">Python 基础</span>
                  <Badge variant="secondary" className="text-xs">95% 完成</Badge>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}