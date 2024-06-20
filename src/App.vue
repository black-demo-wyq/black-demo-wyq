<script lang="ts">

export default {
  data() {
    return {
      userName: 'Tom',
      salary: 12000,
      userInfo:{
        age: 1,
        sex: 1,
        department: 'dev',
        skills: ['java', 'python', 'golang','C++'],
      },
      newSkill:'',
      showUserInfo:false,
      buttonShowDate:0
    }
  },
  methods: {
    addSalary() {
      this.salary += 1000
    },
    addnewSkill() {
      if(this.newSkill){
        this.userInfo.skills.push(this.newSkill)
      }
    },
    changeShowUserInfo() {
      this.showUserInfo = !this.showUserInfo
    },
    buttonShow() {
      this.userInfo.age ++;
    }
  }
}
</script>

<template>
  <div>
    姓名：<input v-model="userName" /> {{ userName }}<br />
    薪水：<input type="number" v-model="salary" /> {{ salary }}<br />
    <button @click="addSalary">提交</button>
    <button @click="changeShowUserInfo">查看个人信息</button>
<hr />    


  <div class="userInfo" v-show="showUserInfo" >
    <h2>个人信息</h2>
    <p>年龄：<input type="number" v-model="userInfo.age"/></p>
    <span><input type="button" @click="buttonShow" value="年龄+1"/></span>
    <p>性别：<input type="radio" value="1" v-model="userInfo.sex">男</input><input type="radio" value="2" v-model="userInfo.sex">女</input></p>
    <p>岗位：<select v-model="userInfo.department">
      <option value="dev">开发</option>
      <option value="test">测试</option>
      <option value="maintain">运维</option>
      <option value="sale">销售</option>
    </select>
  </p>
  <p>技术：<span v-for="skill in userInfo.skills" v-bind:key="skill">{{skill}}</span></p>
  <p>新技术：<input v-model="newSkill"/><input type ="button" @click="addnewSkill" value="添加技术名"/></p>
  <p>个人信息汇总{{userInfo}}</p>
  
</div>
  </div>
</template>

<!-- scoped意思是该样式只在当前类中有效， 不影响别人-->
<style scoped>
.userInfo{
background-color: rgb(111, 255, 0);
widows: 80%;
}
.userInfo span{
  background-color: yellow;
  margin-left: 10px;
  border: 1px;
  border-radius: 5px;
}
</style>
