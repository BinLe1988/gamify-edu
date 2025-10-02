import { Button } from "./ui/button";
import { Play, Users, Trophy, Code2 } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Gamify Edu</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#courses" className="hover:text-primary transition-colors">课程</a>
            <a href="#challenges" className="hover:text-primary transition-colors">挑战</a>
            <a href="#leaderboard" className="hover:text-primary transition-colors">排行榜</a>
            <a href="#community" className="hover:text-primary transition-colors">社区</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost">登录</Button>
            <Button>
              <Play className="w-4 h-4 mr-2" />
              开始学习
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}