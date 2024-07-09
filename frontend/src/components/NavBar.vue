<script setup>
import { useRoute } from 'vue-router';
import Logo from '../assets/logo.svg';

const isActiveLink = (routePath) => {
    const route = useRoute();
    return route.path === routePath;
}
</script>
<template>
    <nav>
        <div class="max-w-7xl mx-auto flex items-center justify-between py-6">
            <div class="flex items-center space-x-2">
                <img :src="Logo" alt="logo" class="w-10">
                <h1 class="text-2xl font-bold">Vue Blog</h1>
            </div>
            <div class="flex items-center gap-5">
                <RouterLink to="/"
                    :class="[isActiveLink('/') ? 'text-green-500' : 'hover:text-green-600', 'transition-all duration-200']">
                    Home
                </RouterLink>
                <RouterLink to="/blogs"
                    :class="[isActiveLink('/blogs') ? 'text-green-500' : 'hover:text-green-600', 'transition-all duration-200']">
                    Blog
                </RouterLink>
                <RouterLink to="/blog/add"
                    :class="[isActiveLink('/blog/add') ? 'text-green-500' : 'hover:text-green-600', 'transition-all duration-200']">
                    Add Blog
                </RouterLink>
            </div>
        </div>
    </nav>
</template>