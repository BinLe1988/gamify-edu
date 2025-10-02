import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FeaturedCourses } from "./components/FeaturedCourses";
import { GameFeatures } from "./components/GameFeatures";
import { Stats } from "./components/Stats";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedCourses />
        <GameFeatures />
        <Stats />
      </main>
      <Footer />
    </div>
  );
}