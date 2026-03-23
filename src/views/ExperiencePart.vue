<script setup>
// import { ref } from 'vue'
</script>

<template>
  <div class="experience-container">
    <div class="glass-card experience-card">
      <h1 class="page-title">经历</h1>
      <div class="timeline">
        <!-- 中国科学院计算机技术研究所 -->
        <div class="timeline-item">
          <div class="timeline-content">
            <h3 class="timeline-title">2026.02 - 至今</h3>
            <p class="timeline-position">中国科学院计算机技术研究所</p>
            <p class="timeline-company">前端实习生</p>
          </div>
        </div>

        <!-- 北京试玩互动科技有限公司 -->
        <div class="timeline-item">
          <div class="timeline-content">
            <h3 class="timeline-title">2025.12 - 2026.02</h3>
            <p class="timeline-position">北京试玩互动科技有限公司</p>
            <p class="timeline-company">AI产品实习生</p>
            <p class="timeline-description">
              • 负责公司AI产品竞品调研与分析，输出高质量竞品调研报告10余篇，为产品规划决策提供支持<br>
              • 负责公司AI产品点数体系与会员定价策略前期调研、方案设计及策略迭代，推进产品商业化落地<br>
              • 深度参与公司云业务管理系统版本迭代，参与需求评审、PRD文档撰写，完成2个版本的功能测试与上线验收
            </p>
          </div>
        </div>

        <!-- 北京化工大学信息学院 -->
        <div class="timeline-item">
          <div class="timeline-content">
            <h3 class="timeline-title">2025.03 - 至今</h3>
            <p class="timeline-position">北京化工大学信息学院</p>
            <p class="timeline-company">学生</p>
            <p class="timeline-description">
            • 数据2402心理委员<br>
            • 入党积极分子</p>
          </div>
        </div>

        <!-- 中国人民武装警察部队 -->
        <div class="timeline-item">
          <div class="timeline-content">
            <h3 class="timeline-title">2023.03 - 2025.03</h3>
            <p class="timeline-position">中国人民武装警察部队</p>
            <p class="timeline-company">战士、新闻报道员</p>
            <p class="timeline-description">
              • 履行战士职责：执行部队日常训练、执勤等各项任务，完成中央军委、总队、支队各层级军事考核十余次，参加旅团级比武两次并取得名次<br>
              • 负责新闻报道：挖掘部队训练、任务及官兵先进事迹，撰写新闻稿件（含消息、通讯等），在部队内部强军网、官方新媒体平台发表百余篇，及时传递部队动态，助力宣传工作开展
            </p>
          </div>
        </div>

        <!-- 北京化工大学化学学院 -->
        <div class="timeline-item">
          <div class="timeline-content">
            <h3 class="timeline-title">2022.09 - 2023.03</h3>
            <p class="timeline-position">北京化工大学化学学院</p>
            <p class="timeline-company">学生</p>
            <p class="timeline-description">
              • "晨曦杯"最佳辩手<br>
              • 材化A2223心理委员
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.experience-container {
  min-height: 100vh;
  background: var(--background-light);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.experience-card {
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

.timeline {
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--primary-color);
    transform: translateX(-50%);
  }
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
  width: 50%;

  &:nth-child(odd) {
    left: 0;
    padding-right: 2rem;
  }

  &:nth-child(even) {
    left: 50%;
    padding-left: 2rem;
  }

  &::before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--primary-color);
    border: 3px solid var(--background-light);
    top: 1rem;
    z-index: 1;
  }

  &:nth-child(odd)::before {
    right: -8px;
  }

  &:nth-child(even)::before {
    left: -8px;
  }
}

.timeline-content {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid rgba(31, 41, 55, 0.2);
}

.timeline-title {
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.timeline-position {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.25rem;
}

.timeline-company {
  color: var(--text-dark);
  opacity: 0.8;
  margin-bottom: 1rem;
}

.timeline-description {
  color: var(--text-dark);
  line-height: 1.6;
}

/* 深色主题样式 */
:root.dark .experience-card {
  background: rgba(31, 41, 55, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

:root.dark .timeline-content {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

:root.dark .timeline-item::before {
  border-color: rgba(31, 41, 55, 0.95);
}
</style>
