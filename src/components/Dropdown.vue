<template>
  <div class="hello flex items-center justify-center flex-col	">
    <h1 class="font-bold text-4xl mb-5 dark:text-green-500">{{ msg }}</h1>
    <div
      @click.stop="toggleDropdown"
      class="focus:focus:ring-2 ring-inset bg-gray-200 w-1/3 px-3 py-2 rounded cursor-pointer"
    >
      {{ resultDropdown ?? "Pick a badges" }}
    </div>
    <teleport to="#app">
      <div
        v-if="isOpenOption"
        class="absolute bg-white w-1/3 mx-auto left-0 right-0 rounded cursor-pointer text-black"
        :style="{ top: yMouse + 'px' }"
        v-click-outside="closeDropdown"
      >
        <div
          class="dropdown-item py-2"
          v-for="(option, index) in listOption"
          :key="index"
          @click="chooseOption(option)"
        >
          {{ option }}
        </div>
      </div>
    </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useLogicDropdown from "@/hook/useLogicDropdown";

// interface IEventMouse {
//   pageX: number;
//   pageY: number;
// }

export default defineComponent({
  name: "Dropdown",
  props: {
    msg: {
      type: String
    }
  },
  setup(props, context) {
    const {
      yMouse,
      isOpenOption,
      toggleDropdown,
      closeDropdown
    } = useLogicDropdown();
    return { yMouse, isOpenOption, toggleDropdown, closeDropdown };
  },
  data() {
    return {
      resultDropdown: null as string | null,
      listOption: ["Angular", "React", "Vue"] as string[]
      // yMouse: 0 as number,
      // isOpenOption: false as boolean
    };
  },
  methods: {
    // closeDropdown() {
    //   this.isOpenOption = false;
    // },
    // toggleDropdown(e: IEventMouse) {
    //   this.yMouse = e.pageY + 20;
    //   this.isOpenOption = !this.isOpenOption;
    // },
    chooseOption(val: string) {
      this.resultDropdown = val;
      this.closeDropdown();
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.dropdown {
  &-item {
  }
  &-item:hover {
    background: #2c3e50;
    color: white;
    border-radius: 0.25rem;
  }
}
.dark {
  .dropdown {
    &-item:hover {
      background: #10b981;
    }
  }
}
</style>
