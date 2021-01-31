<template>
  <div>
      <h1><strong>ID</strong>: {{ id }}</h1>
      <router-link :to="{ name: 'home' }">Home</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'Profile',
    props: {
        id: {
            type: String,
            required: true
        }
    },
    setup() {
        const name = ref('Test');

        return { name };
    }
})
</script>
