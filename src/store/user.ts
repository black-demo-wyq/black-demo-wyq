import { defineStore } from 'pinia'

export const userStore = defineStore('userStore', {
  actions: {
    changeUserName(value: string, age: number) {
      if (value && value.length < 10) {
        this.username += value
        this.userage = age
      }
    }
  },
  getters: {
    getUserName(): string {
      return this.username.toUpperCase()
    }
  },
  state() {
    return {
      // 【--】表示默认值
      username: '----',
      userage: 1
    }
  }
})
