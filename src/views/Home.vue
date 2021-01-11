<template>
  <div class="home">
    <Dropdown msg="Vue 3 + Typescript" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dropdown from "@/components/Dropdown.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    Dropdown
  }
});
</script>
