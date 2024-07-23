import './assets/main.css'

import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'

import NewsPage from './views/NewsPage.vue'
import NewsDetail1 from './views/NewsDetail1.vue'
import NewsDetail2 from './views/NewsDetail2.vue'

import { createApp } from 'vue'

// 1.配置路由规则

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: HomePage },
  { path: '/about', component: AboutView },
  {
    path: '/news',
    component: NewsPage,
    name: 'news',
    children: [
      {
        path: '1', // /news/1
        component: NewsDetail1
      },
      {
        path: '2', // /news/2
        component: NewsDetail2
      }
    ]
  }
]
// 2.创建路由器
const router = createRouter({
  history: createWebHistory(), // 路由工作模式
  routes
})

// 3.加载路由器
const app = createApp(App)
app.use(router)

// 使用pinia插件
import { createPinia } from 'pinia'
const pinia = createPinia()
app.use(pinia)
app.mount('#app')
