<script setup>
import { computed,onMounted } from 'vue'
import { useThemeStore } from '../stores/theme'
import { useRouter } from 'vue-router'
import { Moon, Sunny, User } from '@element-plus/icons-vue'
import { Github } from '@icon-park/vue-next'


// 主题状态管理
// const isDark = ref(false)
const themeStore = useThemeStore()
const router = useRouter()
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

const scrollToSection = (index) => {
  const sections = document.querySelectorAll('.page-container > *')
  if (sections[index]) {
    sections[index].scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

const goToLogin = () => {
  router.push('/login')
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
      <div class="navbar-logo" @click="scrollToSection(0)">
        wse
      </div>

      <!-- 中间导航菜单 -->
      <div class="navbar-menu">
        <div class="navbar-menu">
        <button class="navbar-link" @click="scrollToSection(1)">关于我</button>
        <button class="navbar-link" @click="scrollToSection(2)">技术栈</button>
        <button class="navbar-link" @click="scrollToSection(3)">经历</button>
        <button class="navbar-link" @click="scrollToSection(4)">运动</button>
        <button class="navbar-link" @click="scrollToSection(5)">目标</button>
      </div>

      </div>

      <!-- 右侧社交媒体和主题切换 -->
      <div class="navbar-right">
        <a href="https://github.com/wse114" target="_blank" rel="noopener noreferrer" class="social-link">
          <github theme="outline" size="30" :fill="isDark ? 'var(--text-light)' : 'var(--text-dark)'" />
        </a>

        <button class="theme-toggle" @click="toggleTheme">
          <el-icon>
            <Moon v-if="isDark" />
            <Sunny v-else />
          </el-icon>
        </button>
        <button class="social-link login-icon" @click="goToLogin">
          <el-icon>
            <User />
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
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  display: inline-block;

  &:hover {
    color: rgb(234, 120, 37);
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
    animation: logoPulse 0.3s ease-in-out;
  }
}

@keyframes logoPulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(251, 146, 60, 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(251, 146, 60, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(251, 146, 60, 0);
  }
}

.navbar-menu {
  display: flex;
  gap: 2rem;

  .navbar-link {
    color: var(--text-dark);
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(31, 41, 55, 0.2);
    border-radius: 2rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 1rem;
    backdrop-filter: blur(5px);

    &:hover {
      color: var(--primary-color);
      background: rgba(var(--primary-color), 0.1);
      border-color: rgba(var(--primary-color), 0.3);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(var(--primary-color), 0.15);
    }
  }
}

:root.dark .navbar-link {
  --text-dark: var(--text-light);
}

:root.dark .navbar-menu .navbar-link {
  background: rgba(var(--text-light), 0.05);
  border-color: rgba(var(--text-light), 0.2);

  &:hover {
    background: rgba(var(--primary-color), 0.15);
    border-color: rgba(var(--primary-color), 0.4);
  }
}

  .theme-toggle {
    background: none;
    border: none;
    font-size: 2rem;
    color: var(--text-dark);
    cursor: pointer;
    transition: color 0.3s ease;
    margin-left: 1rem;

    &:hover {
      color: rgb(251, 146, 60);
    }
  }

:root.dark .theme-toggle {
  color: var(--text-light);  /* 深色主题时使用浅色文字 */
}

.login-icon {
  font-size: 2rem;
  color: var(--text-dark);
  transition: color 0.3s ease;
  margin-left: 1rem;

  &:hover {
    color: rgb(251, 146, 60);
  }
}

:root.dark .login-icon {
  color: var(--text-light);
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
