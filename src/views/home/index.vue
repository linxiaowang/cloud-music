<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active" @change="handleTabbarChange">
      <van-tabbar-item
        v-for="item in tabbar"
        :key="item.path"
        :icon="item.icon"
        :name="item.path"
        >{{ item.title }}</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const active = $ref(0);
const tabbar: Tabbar[] = [
  {
    icon: "home-o",
    title: "发现",
    path: "/discover",
  },
  {
    icon: "search",
    title: "我的",
    path: "/my",
  },
];
const router = useRouter()
const handleTabbarChange = (path)=>{
  router.push(path)
}
</script>

<style scoped>
</style>
