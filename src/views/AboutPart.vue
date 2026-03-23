<script setup>
// import { ref } from 'vue'
</script>

<template>
  <div class="about-container">
    <div class="glass-card about-card">
      <h1 class="page-title">关于我</h1>
      <div class="about-content">
        <p class="about-text">
          你好，我是wse，一名前端开发者，热爱编程、运动、音乐。
        </p>
        <p class="about-text">
          我拥有扎实的Web开发技能，熟悉前端技术栈，
          喜欢学习新技术并应用到实际项目中。
        </p>
        <p class="about-text">
          我相信技术可以改变世界，
          希望通过自己的努力创造有价值的产品。
        </p>
        <p class="about-text">
          除了编程，我也热爱运动，特别是跑步和健身，
          坚持跑步让我保持良好的身体状态和精神面貌。
        </p>

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about-container {
  min-height: 100vh;
  background: var(--background-light);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.about-card {
  width: 100%;
  max-width: 600px;
  background: rgba(249, 250, 251, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 1.5rem;
  border: 1px solid rgba(31, 41, 55, 0.5);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  padding: 3rem;
}

.page-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--primary-color);
  text-align: center;
  margin-bottom: 2rem;
}

.about-content {
  line-height: 1.8;
}

.about-text {
  color: var(--text-dark);
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

/* 深色主题样式 */
:root.dark .about-card {
  background: rgba(31, 41, 55, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
</style>
