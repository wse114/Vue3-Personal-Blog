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
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
</script>

<style>
:root {
  --primary-color: rgb(251, 146, 60);
  --background-light: rgb(249, 250, 251);
  --text-dark: #1f2937;
  --text-light: #f9fafb;
}

:root.dark {
  --background-light: rgba(31, 41, 55, 0.95);
  --primary-color: rgb(251, 146, 60);
  --text-dark: var(--text-light);
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
  overflow-x: hidden;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  overflow-y: auto;
  scroll-behavior: smooth;
}
</style>
