import { ref, Ref, watch } from "vue";

type ReturnStateDarkMode = {
  enabledDarkMode: Ref<boolean>;
  toggleSwitchDarkMode: () => void

};

export default (): ReturnStateDarkMode => {
  const enabledDarkMode = ref<boolean>(false);
  const layoutApp = document.querySelector('html')!
  //TODO: init
  if (localStorage.theme === 'dark') {
    layoutApp.classList.add('dark')
    enabledDarkMode.value = true
  } else {
    layoutApp.classList.remove('dark')
    enabledDarkMode.value = false
  }
  watch(enabledDarkMode, (enabledDarkMode,) => {
    if(enabledDarkMode) {
      layoutApp.classList.add('dark')
      localStorage.setItem("theme", "dark")
    } else {
      layoutApp.classList.remove('dark')
      localStorage.setItem("theme","light")
    }
  })
  const toggleSwitchDarkMode = () => {
    enabledDarkMode.value = !enabledDarkMode.value
  }

  return { enabledDarkMode, toggleSwitchDarkMode };
};
