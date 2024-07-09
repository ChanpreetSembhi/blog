<script setup>
import { reactive } from 'vue';
import BlogListing from '@/components/BlogListing.vue';
import blogs from "@/blogs.json";

defineProps({
    limit: Number,
    showButton: {
        type: Boolean,
        default: false
    },
    isHome: {
        type: Boolean,
        default: false
    }
});

const state = reactive({
    blogs: blogs,
})
</script>

<template>
    <div class="py-8">
        <h2 class="text-4xl font-bold text-green-500 mb-8 text-center">{{ isHome ? 'Recent Posts' : 'Browse Posts' }}
        </h2>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <BlogListing v-for="blog in state.blogs.slice(0, limit || state.blogs.length)" :blog="blog"
                :key="blog.id" />
        </div>
        <section v-if="showButton" class="my-10 text-center">
            <RouterLink to="/blogs"
                class="border px-4 py-2.5 rounded-lg hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-200">
                View All Posts
            </RouterLink>
        </section>
    </div>
</template>