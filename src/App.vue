<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
const Home = defineAsyncComponent(() => import('./components/Home.vue'));
</script>