<template>
  <div class="h-screen bg-green-500 dark:bg-gray-700">
    <div id="nav" class="">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <div class="absolute top-8 right-8 flex items-center">
        <div
          class="relative inline-block w-10 mr-2 align-middle select-none transition duration-400 ease-in"
        >
          <input
            type="checkbox"
            name="toggle"
            id="toggle"
            class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-gray-300"
            v-model="enabledDarkMode"
          />
          <label
            for="toggle"
            class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
          ></label>
        </div>
        <label
          for="toggle"
          class="text-xs text-gray-700 dark:text-green-700 font-bold text-md"
          >Dark mode</label
        >
      </div>
    </div>
    <router-view class="" />
  </div>
</template>
<script>
import "./assets/index.scss";
import useDarkMode from "@/hook/useDarkMode";

export default {
  setup() {
    const { enabledDarkMode, toggleSwitchDarkMode } = useDarkMode();
    return {
      enabledDarkMode
    };
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #ffffff;
    }
  }
}
.dark {
  #nav {
    a {
      font-weight: bold;
      color: #10b981;

      &.router-link-exact-active {
        color: #ffffff;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.toggle-checkbox:checked {
  right: 0;
  border-color: #10b981;
}
.toggle-checkbox:checked + .toggle-label {
  background-color: #10b981;
}
input {
  outline: none;
}
</style>
