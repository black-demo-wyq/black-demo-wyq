<script setup lang="ts">
import { userStore } from './store/user'
import mysalary from '@/components/Mysalary'
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref
} from 'vue'
import Mysalaryinfo from './components/MysalaryInfo.vue'
import { storeToRefs } from 'pinia'
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

// 生命周期函数，钩子 start
// 执行顺序和声明顺序没关系
console.log('setup')

onBeforeMount(() => {
  console.log('挂载之前')
})

onMounted(() => {
  console.log('挂载完毕')
})

onBeforeUpdate(() => {
  console.log('更新之前')
})

onUpdated(() => {
  console.log('更新完毕')
})

onBeforeUnmount(() => {
  console.log('卸载之前')
})

onUnmounted(() => {
  console.log('卸载完毕')
})
// 生命周期函数，钩子 end

const user = userStore()
user.username = 'tong'
// 方法1:修改用户信息用$patch
// user.$patch({
//   username: 'wangyq',
//   userage: 30
// })

// 方法2:修改用户信息
user.changeUserName('666', 35)
console.log(user.username)
console.log(user.getUserName)
console.log(user.userage)

const userInf = storeToRefs(user)
console.log(userInf.getUserName.value)
</script>

<template>
  <div>
    姓名：<input v-model="userName" /> {{ userName }}<br />
    金额：<input type="number" v-model="salary" /> {{ salary }}<br />
    <!--另一种表现（reactive）-->
    姓名2：<input v-model="userInfoDetail.userName2" placeholder="hello word" />
    {{ userInfoDetail.userName2 }}<br />
    金额2：<input type="number" v-model="userInfoDetail.salary2" /> {{ userInfoDetail.salary2
    }}<br />
    <button @click="addSalary">提交1</button>
    <!--另一种表现（reactive）-->
    <button @click="addSalary2">提交2</button>
  </div>
  <!--另一种表现（ref）-->
  <div class="userInfo">
    姓名：<input ref="name" abc="testabcd" placeholder="请输入姓名" />
    <button @click="showRes">提交3</button>
  </div>

  <!--下一个例子（关联文件MysalaryInfo.vue）-->
  <div>
    <Mysalaryinfo ref="mysalaryinfo"></Mysalaryinfo>
    <button @click="showRes2">查看金额信息</button>
  </div>

  <div id="app">
    <h1>Hello App!</h1>
    <p>
      <!--路由链接-->
      <router-link to="home">首页</router-link
      ><!--字符串跳转-->
      <router-link to="about">关于</router-link
      ><!--字符串跳转-->
      <router-link to="news">新闻</router-link
      ><!--字符串跳转-->
    </p>
    <div class="content">
      <router-view />
      <!--路由出口-->
    </div>
  </div>
</template>

<!-- scoped意思是该样式只在当前类中有效， 不影响别人-->
<style scoped>
.userInfo {
  background-color: green;
  widows: 80%;
}
.userInfo span {
  background-color: yellow;
  margin-left: 10px;
  border: 1px;
  border-radius: 5px;
}
a {
  margin: 10px;
}
.content {
  background-color: yellowgreen;
  windows: 10%;
  height: 400px;
  border: 1cap;
  border-radius: 10px;
}
</style>

<!--第二部分-->
