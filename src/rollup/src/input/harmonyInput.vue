<template>
  <div class="container">
    <h3>{{ props.title }}：</h3>
    <input :type="props.type" v-model="data" @keydown="onkeydown">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const data = ref('')
const emit = defineEmits(['onkeydown'])
const props = defineProps({
  title: {
    type: String, // 指定类型为字符串
    default: '标题' // 设置默认值
  },
  type: {
    type: String, // 指定类型为字符串
    default: 'text' // 设置默认值
  },
})

const onkeydown = (e) => {
  if (e.key === 'Enter') {
    emit('onkeydown', data.value)
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 90vw;
  height: 10vh;
  background-color: #eee;
}
</style>
