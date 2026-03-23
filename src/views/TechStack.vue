<script setup>
// import { ref } from 'vue'
</script>

<template>
  <div class="tech-container">
    <div class="glass-card tech-card">
      <h1 class="page-title">技术栈</h1>
      <div class="tech-grid">
        <div class="tech-item">
          <h3 class="tech-category">前端技术</h3>
          <div class="tech-tags">
            <span class="tech-tag">Vue 3</span>
            <span class="tech-tag">Nuxt.js</span>
            <span class="tech-tag tech-tag-unlearned">React</span>
            <span class="tech-tag tech-tag-unlearned">Next.js</span>
            <span class="tech-tag">JavaScript(ES6+)</span>
            <span class="tech-tag tech-tag-unlearned">TypeScript</span>
            <span class="tech-tag">HTML5</span>
            <span class="tech-tag">CSS3</span>
            <span class="tech-tag">SCSS</span>
            <span class="tech-tag">Element Plus</span>
            <!-- <span class="tech-tag">Vue Router</span>
            <span class="tech-tag">Pinia</span> -->
            <span class="tech-tag tech-tag-unlearned">uni-app</span>
          </div>
        </div>
        <div class="tech-item">
          <h3 class="tech-category">后端技术</h3>
          <div class="tech-tags">
            <span class="tech-tag tech-tag-unlearned">Node.js</span>
            <span class="tech-tag tech-tag-unlearned">Express</span>
            <span class="tech-tag tech-tag-unlearned">MongoDB</span>
            <span class="tech-tag tech-tag-unlearned">MySQL</span>
            <span class="tech-tag tech-tag-unlearned">RESTful API</span>
            <span class="tech-tag tech-tag-unlearned">Python/Go/Java及其框架</span>
            <span class="tech-tag tech-tag-unlearned">Redis</span>
          </div>
        </div>
        <div class="tech-item">
          <h3 class="tech-category">工具与其他</h3>
          <div class="tech-tags">
            <span class="tech-tag">Git</span>
            <span class="tech-tag">GitHub</span>
            <span class="tech-tag">VS Code</span>
            <span class="tech-tag tech-tag-unlearned">Webpack</span>
            <span class="tech-tag">Vite</span>
            <span class="tech-tag tech-tag-unlearned">Docker</span>
          </div>
        </div>
        <div class="tech-item">
          <h3 class="tech-category">ai全栈</h3>
          <div class="tech-tags">
            <span class="tech-tag tech-tag-unlearned">LangChain.js</span>
            <span class="tech-tag tech-tag-unlearned">LLM</span>
            <span class="tech-tag tech-tag-unlearned">RAG</span>
            <span class="tech-tag tech-tag-unlearned">Agent</span>
            <span class="tech-tag tech-tag-unlearned">向量数据库</span>
            <span class="tech-tag tech-tag-unlearned">……</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.tech-container {
  min-height: 100vh;
  background: var(--background-light);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.tech-card {
  width: 100%;
  max-width: 800px;
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

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.tech-item {
  text-align: center;
}

.tech-category {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1rem;
}

.tech-tag {
  background: rgba(251, 146, 60, 0.1);
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  color: var(--primary-color);
  font-weight: 500;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: rgba(251, 146, 60, 0.2);
    transform: translateY(-2px);
  }
}

/* 未掌握的技术标签样式 */
.tech-tag-unlearned {
  background: rgba(156, 163, 175, 0.1);
  color: #9ca3af;
  opacity: 0.7;

  &:hover {
    background: rgba(156, 163, 175, 0.2);
    color: #9ca3af;
    transform: translateY(-2px);
  }
}

/* 深色主题样式 */
:root.dark .tech-card {
  background: rgba(31, 41, 55, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

:root.dark .tech-tag {
  background: rgba(251, 146, 60, 0.2);
}

:root.dark .tech-tag:hover {
  background: rgba(251, 146, 60, 0.3);
}

/* 深色主题下未掌握的技术标签样式 */
:root.dark .tech-tag-unlearned {
  background: rgba(156, 163, 175, 0.2);
  color: #6b7280;
  opacity: 0.7;

  &:hover {
    background: rgba(156, 163, 175, 0.3);
    color: #6b7280;
  }
}
</style>
