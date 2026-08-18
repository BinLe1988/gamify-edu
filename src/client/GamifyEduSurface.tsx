import { useState } from "react";
import css from "./GamifyEduSurface.module.css";

const courses = [
  { title: "Python 基础", level: "入门", progress: 95, color: "blue" },
  { title: "Web 全栈挑战", level: "进阶", progress: 68, color: "purple" },
  { title: "算法闯关赛", level: "挑战", progress: 42, color: "green" },
];

/** Self-contained browser surface used by both the launcher and standalone preview. */
export function GamifyEduSurface() {
  const [activeCourse, setActiveCourse] = useState<string | null>(null);

  return (
    <section className={css.surface} aria-label="Gamify Edu">
      <div className={css.hero}>
        <div>
          <span className={css.badge}>全新游戏化学习体验</span>
          <h1 className={css.title}>
            让编程学习
            <span>充满乐趣</span>
          </h1>
          <p className={css.description}>
            通过互动课程、实时挑战和社区竞赛，一步步成为编程大师。
          </p>
          <button className={css.primaryButton} type="button" onClick={() => setActiveCourse("Python 基础")}>
            开始学习
          </button>
        </div>
        <div className={css.heroCard}>
          <div className={css.codeHeader}><i /><i /><i /></div>
          <pre>{"function learn() {\n  return \"不断挑战，持续升级\";\n}"}</pre>
          <div className={css.level}>在线学习中 · Lv.12</div>
        </div>
      </div>

      <div className={css.stats}>
        <div><strong>50K+</strong><span>活跃学员</span></div>
        <div><strong>1000+</strong><span>互动课程</span></div>
        <div><strong>95%</strong><span>完成率</span></div>
      </div>

      <div className={css.sectionHeader}>
        <div><span className={css.eyebrow}>LEARNING PATH</span><h2>精选课程</h2></div>
        <span className={css.hint}>完成课程即可解锁新徽章</span>
      </div>
      <div className={css.courseGrid}>
        {courses.map((course) => (
          <button
            className={css.course}
            data-color={course.color}
            key={course.title}
            onClick={() => setActiveCourse(course.title)}
            type="button"
          >
            <span className={css.courseIcon}>✦</span>
            <span className={css.courseTitle}>{course.title}</span>
            <span className={css.courseLevel}>{course.level}</span>
            <span className={css.progress}><i style={{ width: `${course.progress}%` }} /></span>
            <span className={css.courseFooter}>{course.progress}% 完成 <b>→</b></span>
          </button>
        ))}
      </div>

      {activeCourse !== null && (
        <div className={css.toast} role="status">
          已选择「{activeCourse}」，准备开始挑战！
          <button type="button" onClick={() => setActiveCourse(null)} aria-label="关闭提示">×</button>
        </div>
      )}
    </section>
  );
}
