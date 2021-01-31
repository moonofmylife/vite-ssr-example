<template>
  <div>
      <h1>Hello, {{ name }}</h1>
      <router-link :to="{ name: 'profile', params: { id: 1 } }">Visit profile 1</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'Home',
    setup() {
        const name = ref('Guest');

        return { name };
    }
})
</script>
