import { reactive, ref } from 'vue'

export default function () {
  const userName = ref('wang')
  const salary = ref(18000)
  const userInfoDetail = reactive({ userName2: '袁隆平', salary2: 300000 })
  function addSalary() {
    salary.value += 2000
    console.log(salary.value)
  }
  function addSalary2() {
    userInfoDetail.salary2 += 1000
    console.log(userInfoDetail.salary2)
  }
  return { userName, salary, userInfoDetail, addSalary, addSalary2 }
}
