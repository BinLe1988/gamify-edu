import { Code2, Github, Twitter, Mail, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Gamify Edu</span>
            </div>
            <p className="text-gray-400 text-sm">
              让编程学习变得有趣和高效。通过游戏化的方式掌握编程技能，成为优秀的开发者。
            </p>
            <div className="flex gap-4">
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                <Github className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h3 className="font-semibold">课程</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Python 基础</a></li>
              <li><a href="#" className="hover:text-white transition-colors">JavaScript 进阶</a></li>
              <li><a href="#" className="hover:text-white transition-colors">数据结构与算法</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Web 开发</a></li>
              <li><a href="#" className="hover:text-white transition-colors">机器学习</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold">支持</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">帮助中心</a></li>
              <li><a href="#" className="hover:text-white transition-colors">社区论坛</a></li>
              <li><a href="#" className="hover:text-white transition-colors">联系我们</a></li>
              <li><a href="#" className="hover:text-white transition-colors">反馈建议</a></li>
              <li><a href="#" className="hover:text-white transition-colors">状态页面</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold">订阅更新</h3>
            <p className="text-sm text-gray-400">
              获取最新的课程更新和编程技巧
            </p>
            <div className="space-y-2">
              <Input 
                placeholder="输入你的邮箱"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600">
                订阅
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2024 Gamify Edu. 保留所有权利。
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-400">
              Made with <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> for learners
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">隐私政策</a>
              <a href="#" className="hover:text-white transition-colors">服务条款</a>
              <a href="#" className="hover:text-white transition-colors">Cookie 政策</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}