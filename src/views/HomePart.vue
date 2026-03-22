<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const cardContainer = ref(null)
const mainCard = ref(null)
const currentName = ref('wse')
const isFading = ref(false)
let nameInterval = null

// 切换名字的函数
const toggleName = () => {
  // 开始动画
  isFading.value = true

  // 延迟切换名字（等待动画完成）
  setTimeout(() => {
    currentName.value = currentName.value === 'wse' ? '望十二' : 'wse'
    // 结束动画
    isFading.value = false
  }, 300) // 动画持续时间
}

// 鼠标移动时旋转卡牌
const handleMouseMove = (event) => {
  if (!cardContainer.value || !mainCard.value) return

  const container = cardContainer.value.getBoundingClientRect()
  const centerX = container.left + container.width / 2
  const centerY = container.top + container.height / 2

  const mouseX = event.clientX
  const mouseY = event.clientY

  // 计算旋转角度（范围：-5deg 到 5deg）
  const rotateX = ((mouseY - centerY) / (container.height / 2)) * 5
  const rotateY = ((centerX - mouseX) / (container.width / 2)) * 5

  // 应用旋转效果
  mainCard.value.style.transform = `translate(-50%, -50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
}

// 鼠标离开时重置旋转
const handleMouseLeave = () => {
  if (mainCard.value) {
    mainCard.value.style.transform = 'translate(-50%, -50%) rotateX(0deg) rotateY(0deg)'
  }
}

onMounted(() => {
  // 启动名字切换定时器
  nameInterval = setInterval(toggleName, 2000)

  if (cardContainer.value) {
    cardContainer.value.addEventListener('mousemove', handleMouseMove)
    cardContainer.value.addEventListener('mouseleave', handleMouseLeave)
  }
})

onUnmounted(() => {
  // 清除定时器
  if (nameInterval) {
    clearInterval(nameInterval)
  }
})
</script>

<template>
  <div class="home-container">
    <!-- 核心卡牌 -->
    <div class="card-container" ref="cardContainer">
      <!-- 圆形轨道和图片 -->
      <div class="orbit orbit-1">
        <div class="orbit-image">
          <img src="@/assets/images/1.jpg" alt="图片1">
        </div>
      </div>
      <div class="orbit orbit-2">
        <div class="orbit-image">
          <img src="@/assets/images/2.jpg" alt="图片2">
        </div>
      </div>
      <div class="orbit orbit-3">
        <div class="orbit-image">
          <img src="@/assets/images/3.jpg" alt="图片3">
        </div>
      </div>

      <!-- 中心卡牌 -->
      <div class="glass-card main-card" ref="mainCard">
        <!-- 左上角的标签 -->
        <div class="name-label">My name is:</div>

        <!-- 名字展示区域 -->
        <!-- 名字展示区域 -->
        <div class="name-display">
          <div class="name-wrapper">
            <h1 class="name" :class="{ 'name-fade': isFading }">{{ currentName }}</h1>
          </div>
          <div class="name-line"></div>
        </div>

        <div class="role-section">
          <span class="label">I'm a:</span>
          <div class="role-tags">
            <span class="role-tag">Web Developer</span>
            <span class="role-tag">Runner</span>
            <span class="role-tag">Tech Enthusiast</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-container {
  min-height: 100vh;
  background: var(--background-light);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12rem 2rem 2rem 2rem;
}

.card-container {
  position: relative;
  width: 400px;
  height: 500px;
  perspective: 1000px;
}

/* 圆形轨道 */
/* CSS部分 */
.orbit {
  position: absolute;
  border: 1px solid rgba(31, 41, 55, 0.2);
  border-radius: 50%;
  animation: rotate 20s linear infinite;

  &-1 {
    width: 500px;
    height: 500px;
    top: -50px;
    left: -50px;
    animation-duration: 12s;
  }

  &-2 {
    width: 600px;
    height: 600px;
    top: -100px;
    left: -100px;
    animation-duration: 10s;
    animation-direction: reverse;
  }

  &-3 {
    width: 700px;
    height: 700px;
    top: -150px;
    left: -150px;
    animation-duration: 8s;
  }
}

/* 轨道上的图片 */
.orbit-image {
  position: absolute;
  border-radius: 50%;
  overflow: hidden;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

/* 第一个轨道的图片大小 */
.orbit-1 .orbit-image {
  width: 100px;
  height: 100px;
}

/* 第二个轨道的图片大小 */
.orbit-2 .orbit-image {
  width: 120px;
  height: 120px;
}

/* 第三个轨道的图片大小 */
.orbit-3 .orbit-image {
  width: 70px;
  height: 70px;
}

/* 深色主题下的轨道边框 */
:root.dark .orbit {
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* 轨道上的图片 */
.orbit-image {
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

/* 中心卡牌 */
.main-card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 400px;
  background: rgba(249, 250, 251, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 1.5rem;
  border: 1px solid rgba(31, 41, 55, 0.5);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  transition: transform 0.1s ease-out;
  transform-style: preserve-3d;
  position: relative;
}

/* 深色主题下的卡牌样式 */
:root.dark .main-card {
  background: rgba(31, 41, 55, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

/* 左上角的标签 */
.name-label {
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: var(--text-dark);
  font-size: 1rem;
  opacity: 0.8;
}

/* 名字展示区域 */
.name-display {
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
  width: 100%;

  .name-wrapper {
    width: 200px; /* 固定宽度，确保能容纳最长的名字 */
    height: 80px; /* 固定高度，防止名字变化影响垂直布局 */
    margin: 0 auto;
    text-align: center;
    position: relative;

    .name {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 2.5rem; /* 缩小字体大小 */
      font-weight: bold;
      color: var(--primary-color);
      margin: 0;
      transition: opacity 0.3s ease, transform 0.3s ease;
      white-space: nowrap;

      &.name-fade {
        opacity: 0;
        transform: translate(-50%, -50%) translateY(10px);
      }
    }
  }

  .name-line {
    width: 100px;
    height: 2px;
    background-color: var(--primary-color);
    margin: 0 auto;
  }
}
.role-section {
  text-align: center;

  .label {
    display: block;
    color: var(--text-dark);
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .role-tags {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    .role-tag {
      background: rgba(31, 41, 55, 0.1);
      border-radius: 2rem;
      padding: 0.75rem 1.5rem;
      color: var(--text-dark);
      font-size: 1.1rem;
      transition: all 0.3s ease;

      &:hover {
        background: rgba(251, 146, 60, 0.3);
        transform: scale(1.05);
      }
    }
  }
}

/* 深色主题下的角色标签 */
:root.dark .role-section .role-tag {
  background: rgba(255, 255, 255, 0.1);
}

/* 旋转动画 */
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
