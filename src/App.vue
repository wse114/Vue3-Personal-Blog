<template>
  <div class="app">
    <NavBar />
    <main class="main-content">
      <div class="page-container" ref="pageContainer">
        <HomePart />
        <AboutPart />
        <TechStack />
        <Experience />
        <Sports />
        <Goals />
      </div>
      <router-view />
    </main>
    <FooterBar />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
import HomePart from './views/HomePart.vue'
import AboutPart from './views/AboutPart.vue'
import TechStack from './views/TechStack.vue'
import Experience from './views/ExperiencePart.vue'
import Sports from './views/SportsPart.vue'
import Goals from './views/GoalsPart.vue'

const pageContainer = ref(null)
let isScrolling = false
// let animationFrameId = null
const sectionHeight = window.innerHeight;
// let startY = 0
// let targetY = 0
// let startTime = 0

// 平滑滚动到目标位置
// const smoothScroll = (targetPosition) => {
//   startTime = performance.now()
//   startY = window.scrollY
//   targetY = targetPosition

//   const animateScroll = (timestamp) => {
//     const elapsed = timestamp - startTime
//     const duration = 1000 // 延长动画持续时间到1秒

//     if (elapsed< duration) {
//       // 使用更平滑的缓动函数（easeInOutCubic）
//       const progress = elapsed / duration
//       const easedProgress = progress< 0.5
//         ? 4 * progress * progress * progress
//         : 1 - Math.pow(-2 * progress + 2, 3) / 2

//       const currentY = startY + (targetY - startY) * easedProgress
//       window.scrollTo(0, currentY)

//       animationFrameId = requestAnimationFrame(animateScroll)
//     } else {
//       window.scrollTo(0, targetY)
//       isScrolling = false
//       animationFrameId = null
//     }
//   }

//   animationFrameId = requestAnimationFrame(animateScroll)
// }

// 处理滚动事件
const handleWheel = (e) => {
  if (isScrolling) return;

  isScrolling = true;
  const direction = e.deltaY > 0 ? 1 : -1;
  const currentScroll = window.scrollY;
  const targetScroll = Math.round(currentScroll / sectionHeight) * sectionHeight + direction * sectionHeight;

  const startTime = performance.now();
  const startY = currentScroll;

  const animateScroll = (timestamp) => {
    const elapsed = timestamp - startTime;
    const duration = 1000;

    if (elapsed < duration) {
      const progress = elapsed / duration;
      const easedProgress = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      window.scrollTo(0, startY + (targetScroll - startY) * easedProgress);
      requestAnimationFrame(animateScroll);
    } else {
      window.scrollTo(0, targetScroll);
      isScrolling = false;
    }
  };

  requestAnimationFrame(animateScroll);
};

onMounted(() => {
  window.addEventListener('wheel', handleWheel, { passive: false });
});

onUnmounted(() => {
  window.removeEventListener('wheel', handleWheel);
});
</script>

<style>
:root {
  --primary-color: rgb(251, 146, 60);
  --background-light: rgb(249, 250, 251);
  --text-dark: #1f2937;
  --text-light: #f9fafb;
}

:root.dark {
  --background-light: rgba(31, 41, 55, 0.95);
  --primary-color: rgb(251, 146, 60);
  --text-dark: var(--text-light);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--background-light);
  color: var(--text-dark);
  overflow-x: hidden;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  overflow-y: auto;
  scroll-behavior: smooth;
}

.page-container {
  width: 100%;
  display: flex;
  flex-direction: column;
}

/* 确保每个页面占满视口高度 */
.page-container > * {
  min-height: 100vh;
}
</style>
