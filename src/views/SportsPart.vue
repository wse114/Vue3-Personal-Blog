<script setup>
import { ref, onMounted } from 'vue'

import s1 from '@/assets/sportsimage/s1.jpg'
import s2 from '@/assets/sportsimage/s2.jpg'
import s3 from '@/assets/sportsimage/s3.jpg'
import s4 from '@/assets/sportsimage/s4.jpg'

// 半马PB时间动画
const pbTime = ref('00:00:00')
const targetTime = '1:53:56'
const isAnimating = ref(false)
const pbDisplayRef = ref(null)

// 图片轮播
const images = [s1, s2, s3, s4]
const currentImageIndex = ref(0)

// 数字跳动动画函数
const animatePBTime = () => {
  if (isAnimating.value) return
  isAnimating.value = true

  // 将目标时间转换为秒
  const [targetHours, targetMinutes, targetSeconds] = targetTime.split(':').map(Number)
  const targetTotalSeconds = targetHours * 3600 + targetMinutes * 60 + targetSeconds

  let currentSeconds = 0
  const duration = 2000 // 动画持续时间（毫秒）
  const startTime = performance.now()

  const animate = (timestamp) => {
    const elapsed = timestamp - startTime
    const progress = Math.min(elapsed / duration, 1)

    // 使用缓动函数让动画更自然
    const easedProgress = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2

    currentSeconds = Math.floor(targetTotalSeconds * easedProgress)

    // 将秒转换回时:分:秒格式
    const hours = Math.floor(currentSeconds / 3600)
    const minutes = Math.floor((currentSeconds % 3600) / 60)
    const seconds = currentSeconds % 60

    pbTime.value = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`

    if (progress < 1) {
      requestAnimationFrame(animate)
    } else {
      pbTime.value = targetTime
      isAnimating.value = false
    }
  }

  requestAnimationFrame(animate)
}

// 图片轮播函数
const startImageCarousel = () => {
  setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length
  }, 3000) // 每3秒切换一张图片
}

// 使用Intersection Observer检测元素是否进入视口
const setupIntersectionObserver = () => {
  if (!pbDisplayRef.value) return

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animatePBTime()
        observer.disconnect() // 只执行一次
      }
    })
  }, {
    threshold: 0.5 // 当元素50%进入视口时触发
  })

  observer.observe(pbDisplayRef.value)
}

onMounted(() => {
  setupIntersectionObserver()
  startImageCarousel()
})
</script>

<template><div class="sports-container">
  <div class="glass-card sports-card">
    <h1 class="page-title">运动</h1>
    <div class="sports-content">
      <div class="sport-item">
        <h3 class="sport-name">跑步</h3>
        <p class="sport-description">我热爱跑步，这是我保持身体健康和精神状态的重要方式。无论是晨跑还是夜跑，都能让我放松心情，缓解压力。</p>
        <div class="sport-stats">
          <div class="stat-item">
          <span class="stat-value">1000+</span>
          <span class="stat-label">公里</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">2</span>
          <span class="stat-label">次半程马拉松</span>
        </div>
      </div>
      <!-- 半马PB时间动画 -->
      <div class="pb-display" ref="pbDisplayRef">
        <span class="pb-label">半马PB</span>
        <span class="pb-time">{{ pbTime }}</span>
      </div>
    </div>
    <div class="sport-item">
      <h3 class="sport-name">健身</h3>
      <p class="sport-description">定期健身帮助我保持良好的体态和力量，我喜欢进行力量训练和有氧运动的结合。</p>
      <div class="sport-stats">
        <div class="stat-item">
          <span class="stat-value">3</span>
          <span class="stat-label">次/周</span>
        </div>
        <div class="stat-item"><span class="stat-value">1小时</span>
          <span class="stat-label">/次</span>
        </div>
      </div>
    </div>
  </div>
  <!-- 图片轮播 -->
      <div class="image-carousel">
        <img :src="images[currentImageIndex]" alt="运动照片" class="carousel-image" loading="lazy"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sports-container {
  min-height: 100vh;
  background: var(--background-light);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.sports-card {
  width: 100%;
  max-width: 700px;
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

.sports-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.sport-item {
  text-align: center;
}

.sport-name {
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.sport-description {
  color: var(--text-dark);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.sport-stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;
}

.stat-item {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 2rem;
  font-weight: bold;
  color: var(--primary-color);
}

.stat-label {
  display: block;
  color: var(--text-dark);
  opacity: 0.8;
  font-size: 0.9rem;
}

/* 半马PB时间显示 */
.pb-display {
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(251, 146, 60, 0.1);
  border-radius: 1rem;
  border: 1px solid rgba(251, 146, 60, 0.3);
}

.pb-label {
  display: block;
  color: var(--text-dark);
  font-size: 0.9rem;
  opacity: 0.8;
  margin-bottom: 0.5rem;
}

.pb-time {
  display: block;
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--primary-color);
  font-family: 'Courier New', monospace;
}

/* 图片轮播 */
.image-carousel {
  margin-top: 2rem;
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid rgba(31, 41, 55, 0.2);
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
}

/* 深色主题样式 */
:root.dark .sports-card {
  background: rgba(31, 41, 55, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

:root.dark .pb-display {
  background: rgba(251, 146, 60, 0.15);
  border-color: rgba(251, 146, 60, 0.4);
}
</style>
