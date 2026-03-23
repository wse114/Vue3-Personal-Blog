<script setup>
// import { ref } from 'vue'
</script>

<template>
  <div class="goals-container">
    <div class="glass-card goals-card">
      <h1 class="page-title">目标</h1>
      <div class="goals-list">
        <div class="goal-item">
          <h3 class="goal-title">短期目标</h3>
          <ul class="goal-items">
            <li class="goal-item-text">
              <span class="goal-checkbox">✓</span>
              掌握html、css、js和Vue 3
            </li>
            <li class="goal-item-text">
              <span class="goal-checkbox">○</span>
              掌握React和TypeScript以及其他前端技术
            </li>
            <li class="goal-item-text">
              <span class="goal-checkbox">○</span>
              掌握后端与ai全栈技术
            </li>
          </ul>
        </div>
        <div class="goal-item">
          <h3 class="goal-title">中期目标</h3>
          <ul class="goal-items">
            <li class="goal-item-text">
              <span class="goal-checkbox">○</span>
              掌握各种产品开发全流程，能vibe coding快速独立完成项目
            </li>
            <li class="goal-item-text">
              <span class="goal-checkbox">○</span>
              进入大厂的前端/全栈开发岗位
            </li>
            <li class="goal-item-text">
              <span class="goal-checkbox">○</span>
              具备工程化思维、性能优化与架构设计能力
            </li>
            <li class="goal-item-text">
              <span class="goal-checkbox">○</span>
              参与开源项目
            </li>
          </ul>
        </div>
        <div class="goal-item">
          <h3 class="goal-title">长期目标</h3>
          <ul class="goal-items">
            <li class="goal-item-text">
              <span class="goal-checkbox">○</span>
              创业或加入创业团队
            </li>
            <li class="goal-item-text">
              <span class="goal-checkbox">○</span>
              成为技术专家
            </li>
            <li class="goal-item-text">
              <span class="goal-checkbox">○</span>
              建立个人技术影响力，影响更多人学习技术
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.goals-container {
  min-height: 100vh;
  background: var(--background-light);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.goals-card {
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

.goals-list {
  display: grid;
  gap: 2rem;
}

.goal-item {
  text-align: center;
}

.goal-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.goal-items {
  list-style: none;
  padding: 0;
  margin: 0;
}

.goal-item-text {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: var(--text-dark);
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
}

.goal-checkbox {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-size: 0.8rem;
  font-weight: bold;

  &[data-checked="true"],
  &:contains('✓') {
    background: var(--primary-color);
    color: white;
  }

  &[data-checked="false"],
  &:contains('○') {
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
  }
}

/* 深色主题样式 */
:root.dark .goals-card {
  background: rgba(31, 41, 55, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

:root.dark .goal-checkbox[data-checked="false"],
:root.dark .goal-checkbox:contains('○') {
  border-color: var(--primary-color);
  color: var(--primary-color);
}
</style>
