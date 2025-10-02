import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Clock, Users, Star, Trophy } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const courses = [
  {
    id: 1,
    title: "Python 游戏开发入门",
    description: "通过制作小游戏学习Python编程基础，包括变量、函数、循环等核心概念。",
    image: "https://images.unsplash.com/photo-1635438004811-54b5864e57eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGFic3RyYWN0JTIwY29kaW5nfGVufDF8fHx8MTc1OTQyMzA0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    level: "初级",
    duration: "6 周",
    students: 1234,
    rating: 4.8,
    progress: 0,
    tags: ["Python", "游戏开发", "初学者"],
    levelColor: "bg-green-100 text-green-800"
  },
  {
    id: 2,
    title: "JavaScript 互动网页",
    description: "学习如何使用JavaScript创建动态网页，包括DOM操作、事件处理和动画效果。",
    image: "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBlZHVjYXRpb24lMjBwcm9ncmFtbWluZ3xlbnwxfHx8fDE3NTk0MjMwNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    level: "中级",
    duration: "8 周",
    students: 892,
    rating: 4.9,
    progress: 35,
    tags: ["JavaScript", "前端", "网页开发"],
    levelColor: "bg-yellow-100 text-yellow-800"
  },
  {
    id: 3,
    title: "算法挑战大师",
    description: "通过游戏化的算法挑战提升编程思维，包括排序、搜索、动态规划等。",
    image: "https://images.unsplash.com/photo-1710438598615-f59b1c0c006b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxlYXJuaW5nJTIwY29tcHV0ZXJ8ZW58MXx8fHwxNzU5MzQ1NDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    level: "高级",
    duration: "12 周",
    students: 567,
    rating: 4.7,
    progress: 0,
    tags: ["算法", "数据结构", "竞赛编程"],
    levelColor: "bg-red-100 text-red-800"
  }
];

export function FeaturedCourses() {
  return (
    <section className="py-16 px-4 bg-gray-50/50">
      <div id="courses" className="container mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Trophy className="w-3 h-3 mr-1" />
            精选课程
          </Badge>
          <h2 className="text-4xl mb-4">开始你的编程冒险</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            从基础到进阶，通过游戏化的学习体验掌握各种编程技能
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden rounded-t-lg">
                <ImageWithFallback 
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={course.levelColor}>
                    {course.level}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="line-clamp-2">{course.title}</CardTitle>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    {course.rating}
                  </div>
                </div>
                <CardDescription className="line-clamp-3">
                  {course.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {course.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {course.students.toLocaleString()}
                  </div>
                </div>
                
                {course.progress > 0 && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>学习进度</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                )}
                
                <Button className="w-full">
                  {course.progress > 0 ? "继续学习" : "开始学习"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            查看全部课程
          </Button>
        </div>
      </div>
    </section>
  );
}