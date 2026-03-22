<script setup>
import { computed,onMounted } from 'vue'
import { useThemeStore } from '../stores/theme'
import { Moon, Sunny } from '@element-plus/icons-vue'
import { Github } from '@icon-park/vue-next'
// 主题状态管理
// const isDark = ref(false)
const themeStore = useThemeStore()

// 切换主题的方法
// const toggleTheme = () => {
//   isDark.value = !isDark.value
//   // 这里可以添加主题切换的逻辑
// }
// 使用store中的isDark状态
const isDark = computed(() => themeStore.isDark)

// 使用store中的toggleTheme方法
const toggleTheme = () => {
  themeStore.toggleTheme()
}

// 在组件挂载时初始化主题
onMounted(() => {
  themeStore.initTheme()
})
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <!-- 左侧Logo -->
      <router-link to="/" class="navbar-logo">
        wse
      </router-link>

      <!-- 中间导航菜单 -->
      <div class="navbar-menu">
        <router-link to="/about" class="navbar-link">关于我</router-link>
        <router-link to="/tech-stack" class="navbar-link">技术栈</router-link>
        <router-link to="/experience" class="navbar-link">经历</router-link>
        <router-link to="/sports" class="navbar-link">运动</router-link>
        <router-link to="/goals" class="navbar-link">目标</router-link>
      </div>

      <!-- 右侧社交媒体和主题切换 -->
      <div class="navbar-right">
        <a href="https://github.com/wse114" target="_blank" rel="noopener noreferrer" class="social-link">
          <github theme="outline" size="24" :fill="isDark ? 'var(--text-light)' : 'var(--text-dark)'" />
        </a>
        <button class="theme-toggle" @click="toggleTheme">
          <el-icon>
            <Moon v-if="isDark" />
            <Sunny v-else />
          </el-icon>
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--background-light);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.navbar-logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: rgb(251, 146, 60);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: rgb(234, 120, 37);
  }
}


.navbar-menu {
  display: flex;
  gap: 2rem;

  .navbar-link {
    color: var(--text-dark);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: rgb(251, 146, 60);
    }

    &.router-link-active {
      color: rgb(251, 146, 60);
      border-bottom: 2px solid rgb(251, 146, 60);
    }
  }
}

:root.dark .navbar-link {
  --text-dark: var(--text-light);  /* 覆盖--text-dark的值 */
}

.navbar-right {
  display: flex;
  align-items: center;
  gap: 1rem;

  .social-link {
    color:var(--text-dark);
    font-size: 1.25rem;
    transition: color 0.3s ease;

    &:hover {
      color: rgb(251, 146, 60);
    }
  }

  .theme-toggle {
    background: none;
    border: none;
    font-size: 1.25rem;
    color: var(--text-dark);
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: rgb(251, 146, 60);
    }
  }
}
:root.dark .theme-toggle {
  color: var(--text-light);  /* 深色主题时使用浅色文字 */
}

/* 响应式设计 */
@media (max-width: 768px) {
  .navbar-container {
    padding: 1rem;
  }

  .navbar-menu {
    display: none;
    /* 这里可以添加汉堡菜单的逻辑 */
  }
}
</style>
