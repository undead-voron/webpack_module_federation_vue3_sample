<template>
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <v-header />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import VHeader from './Header.vue'
</script>
