import {defineStore} from 'pinia'
import {ref} from 'vue'
export const useThemeStore = defineStore('theme',()=>{
  const isDark = ref(false)
  const toggleTheme = ()=>{
    isDark.value = !isDark.value
    localStorage.setItem('theme',isDark.value?'dark':'light')
    applyTheme()
  }
  const applyTheme = ()=>{
    if(isDark.value){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
  }
  const initTheme = ()=>{
    const savedTheme = localStorage.getItem('theme')
    if(savedTheme){
      isDark.value = savedTheme === 'dark'
    }
    applyTheme()
  }

  return {isDark,toggleTheme,applyTheme,initTheme}
}

)
