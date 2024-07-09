<script setup>
import { RouterView } from 'vue-router';
import NavBar from '@/components/NavBar.vue';
import Footer from "@/components/Footer.vue";
</script>

<template>
  <NavBar />
  <main class="lg:max-w-7xl mx-auto py-8">
    <RouterView />
  </main>
  <Footer />
</template>
