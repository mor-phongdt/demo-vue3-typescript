import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vClickOutside from 'v-click-outside'


createApp(App)
  .use(store)
  .use(router)
  .directive('click-outside', {
    beforeMount(el, binding, vnode) {
      el.clickOutsideEvent = function(event: any) {
        if (!(el === event.target || el.contains(event.target))) {
          binding.value(event, el);
        }
      };
      document.body.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted(el) {
      document.body.removeEventListener('click', el.clickOutsideEvent);
    }
  })
  .mount("#app");
