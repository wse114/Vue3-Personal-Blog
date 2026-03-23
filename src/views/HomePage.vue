<template>
  <div class="page-container" ref="pageContainer">
    <HomePart />
    <AboutPart />
    <TechStack />
    <Experience />
    <Sports />
    <Goals />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import HomePart from './HomePart.vue'
import AboutPart from './AboutPart.vue'
import TechStack from './TechStack.vue'
import Experience from './ExperiencePart.vue'
import Sports from './SportsPart.vue'
import Goals from './GoalsPart.vue'

const pageContainer = ref(null)
let isScrolling = false
const sectionHeight = window.innerHeight;

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

<style scoped>
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
