<script setup>
import Header from '@/components/Header.vue';
import BlogListings from '@/components/BlogListings.vue';
</script>
<template>
  <Header />
  <BlogListings :limit="3" :show-button="true" isHome />
</template>
