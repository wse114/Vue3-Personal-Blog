<script setup>
// 页脚组件逻辑
// import { Github } from '@icon-park/vue-next'
</script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-info">
        <p>© 2026 wse. All rights reserved.</p>
        <p>版本: v1.0</p>
        <p>建站时间: 2026.03.21</p>
      </div>
      <!-- <div class="footer-growth">
        <h3>博客成长记</h3>
        <ul>
          <li>2026-03-19: 项目初始化</li>
        </ul>
      </div>
      <div class="footer-social">
        <a href="https://github.com/wse114" target="_blank" rel="noopener noreferrer" class="social-link">
          <github theme="outline" size="24" fill="white" color="white"/>
        </a>
      </div> -->
    </div>
  </footer>
</template>
<style scoped lang="scss">
.footer {
  background: linear-gradient(to right bottom, #334155 20%, #1d2530 150%);
  color: white;
  padding: 2rem;
  margin-top: 2rem;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.footer-info {
  text-align: center; // 文字水平居中
  display: flex;      // 可选：让 p 标签垂直居中（如果有高度）
  flex-direction: column; // 垂直排列 p 标签
  justify-content: center; // 垂直居中（需父容器有高度，可选）
}

.footer-info p {
  margin: 0.5rem 0;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
}

.footer-growth h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  color: rgb(251, 146, 60);
}

.footer-growth ul {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin: 0.5rem 0;
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.8);
  }
}

.footer-social {
  display: flex;
  gap: 1rem;
  align-items: center;

  .social-link {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: rgb(251, 146, 60);
    }
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .footer-container {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
</style>
