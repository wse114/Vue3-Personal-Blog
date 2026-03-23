<script setup>
import { ref } from 'vue'
// import { useThemeStore } from '../stores/theme'
import { ElMessage } from 'element-plus'

// const themeStore = useThemeStore()
// const isDark = computed(() => themeStore.isDark)

// 表单数据
const formData = ref({
  username: '',
  password: ''
})

// 表单验证
const validateForm = () => {
  if (!formData.value.username) {
    ElMessage.error('请输入用户名')
    return false
  }
  if (!formData.value.password) {
    ElMessage.error('请输入密码')
    return false
  }
  return true
}

// 登录函数
const handleLogin = () => {
  if (validateForm()) {
    // 这里可以添加登录逻辑
    ElMessage.success('登录成功！')
    // 登录成功后可以跳转到其他页面
    // router.push('/')
  }
}
</script>

<template>
  <div class="login-container">
    <div class="glass-card login-card">
      <h1 class="login-title">登录</h1>

      <div class="login-form">
        <div class="form-item">
          <label class="form-label">用户名</label>
          <input
            type="text"
            v-model="formData.username"
            class="form-input"
            placeholder="请输入用户名"
          />
        </div>

        <div class="form-item">
          <label class="form-label">密码</label>
          <input
            type="password"
            v-model="formData.password"
            class="form-input"
            placeholder="请输入密码"
          />
        </div>

        <button class="login-btn" @click="handleLogin">
          登录
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login-container {
  min-height: 100vh;
  background: var(--background-light);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.login-card {
  width: 100%;
  max-width: 400px;
  background: rgba(249, 250, 251, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 1.5rem;
  border: 1px solid rgba(31, 41, 55, 0.5);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  padding: 3rem;
}

.login-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--primary-color);
  text-align: center;
  margin-bottom: 2rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  font-weight: 600;
  color: var(--text-dark);
  font-size: 1rem;
}

.form-input {
  padding: 0.75rem 1rem;
  border: 1px solid rgba(31, 41, 55, 0.2);
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  color: var(--text-dark);
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(251, 146, 60, 0.1);
  }

  &::placeholder {
    color: var(--text-dark);
    opacity: 0.5;
  }
}

.login-btn {
  padding: 0.75rem 1rem;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgb(234, 120, 37);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(251, 146, 60, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
}

/* 深色主题样式 */
:root.dark .login-card {
  background: rgba(31, 41, 55, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

:root.dark .form-input {
  border-color: rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.05);

  &:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(251, 146, 60, 0.2);
  }
}
</style>
