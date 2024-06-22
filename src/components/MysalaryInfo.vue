<template>
  姓名3：<input v-model="userName3" /> {{ userName3 }}<br />
  薪水3：<input type="number" v-model="salary3" /> {{ salary3 }}<br />
</template>

<script lang="ts">
export default {
  name: 'SalaryInfo' // 暴露给外面的接口， 如果不写默认是类名
}
</script>

<script setup lang="ts">
import { ref } from 'vue'
let userName3 = ref('王一博')
let salary3 = ref(15000)
defineExpose({ userName3, salary3 }) // 暴露返回的数据
</script>

<style scoped></style>
