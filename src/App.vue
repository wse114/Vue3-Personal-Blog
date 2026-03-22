<template>
  <div class="app">
    <NavBar />
    <main class="main-content">
      <router-view />
    </main>
    <FooterBar />
  </div>
</template>

<script setup>
// 导入组件
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
</script>

<style>
/* 全局样式 */
:root {
  --primary-color: rgb(251, 146, 60);
  --background-light: rgb(249, 250, 251);
  --text-dark: #1f2937;     /* 浅色主题的文字颜色 */
  --text-light: #f9fafb;    /* 深色主题的文字颜色 */
}

:root.dark {
  --background-light: rgba(31, 41, 55, 0.95);
  --primary-color: rgb(251, 146, 60);
  --text-dark: var(--text-light);
  /* 注意：这里不需要重复定义--text-dark和--text-light，除非需要覆盖 */
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
}

.app {
  min-height: 150vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}
</style>
