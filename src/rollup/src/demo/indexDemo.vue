<template>
  <div class="demo">
    <span>双向绑定：{{ data }}</span>
    <input type="text" v-model="data" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const data = ref('')
</script>

<style lang="scss" scoped>
.demo {
  background-color: red;
  span {
    color: green;
  }
}
</style>
