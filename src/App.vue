<script lang="ts">
export default{
  data(){
    return {
      userName:'Tom',
      salary:12000
    }
  },
  methods:{
    addSalary(){
      this.salary += 1000
    }
  }
}
</script>

<template>
  <div>
姓名：<input v-model="userName"/> {{ userName }}<br />
薪水：<input type="number" v-model="salary"/> {{ salary }}<br />
<button @click="addSalary()">提交</button>
    </div>
</template>

<style>

</style>
