<template>
  <ul>
    <li><RouterLink to="/news/1">新闻1</RouterLink></li>
    <li><RouterLink to="/news/2">新闻2</RouterLink></li>
  </ul>
  <div class="news-content">
    <RouterView />
  </div>
</template>
<script lang="ts"></script>
<style scoped>
.news-content {
  background-color: yellow;
  height: 90%;
}
</style>
