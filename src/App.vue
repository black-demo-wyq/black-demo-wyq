<script setup lang="ts">
import mysalary from '@/components/Mysalary'
import { ref } from 'vue'
import Mysalaryinfo from './components/MysalaryInfo.vue'
let { userName, salary, userInfoDetail, addSalary, addSalary2 } = mysalary()

let name = ref()
let mysalaryinfo = ref()
function showRes() {
  console.log(name)
  console.log(name.value) // input dom元素
  console.log(name.value.value) // 入力框值
  console.log(name.value.getAttribute('abc'))
}

function showRes2() {
  console.log(mysalaryinfo) // ref 对象
  console.log(mysalaryinfo.value) // proxy对象
  console.log(mysalaryinfo.value.userName3)
  console.log(mysalaryinfo.value.salary3)
}
</script>

<template>
  <div>
    姓名：<input v-model="userName" /> {{ userName }}<br />
    薪水：<input type="number" v-model="salary" /> {{ salary }}<br />
    <!--另一种表现（reactive）-->
    姓名2：<input v-model="userInfoDetail.userName2" /> {{ userInfoDetail.userName2 }}<br />
    薪水2：<input type="number" v-model="userInfoDetail.salary2" /> {{ userInfoDetail.salary2
    }}<br />
    <button @click="addSalary">提交1</button>
    <!--另一种表现（reactive）-->
    <button @click="addSalary2">提交2</button>
  </div>
  <!--另一种表现（ref）-->
  <div class="userInfo">
    姓名：<input ref="name" abc="testabcd" />
    <button @click="showRes">提交3</button>
  </div>

  <!--下一个例子（关联文件MysalaryInfo.vue）-->
  <div>
    <Mysalaryinfo ref="mysalaryinfo"></Mysalaryinfo>
    <button @click="showRes2">查看薪水信息</button>
  </div>
</template>

<!-- scoped意思是该样式只在当前类中有效， 不影响别人-->
<style scoped>
.userInfo {
  background-color: rgb(111, 255, 0);
  widows: 80%;
}
.userInfo span {
  background-color: yellow;
  margin-left: 10px;
  border: 1px;
  border-radius: 5px;
}
</style>
