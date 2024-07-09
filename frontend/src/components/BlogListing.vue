<script setup>
defineProps({
    blog: Object
});
</script>
<template>
    <div class="border rounded-lg p-5">
        <img :src="blog.poster" alt="poster" class="rounded">
        <div class="py-5">
            <span class="bg-green-100/85 text-green-600 text-sm rounded-md px-2 py-1.5">{{ blog.type }}</span>
            <h2 class="text-3xl font-semibold py-4">{{ blog.title }}</h2>
            <div class="flex items-center space-x-3">
                <img :src="blog.profile" alt="profile" class="size-6">
                <p class="text-gray-500">{{ blog.name }}</p>
                <p class="text-gray-500">{{ blog.posteddate }}</p>
            </div>
        </div>
        <div class="mt-3 flex">
            <RouterLink :to="'/blogs/' + blog.id"
                class="bg-green-400 text-white hover:bg-green-500 text-center uppercase font-semibold transition-all duration-200 rounded-lg py-2.5 px-4 w-full">
                Read</RouterLink>
        </div>
    </div>
</template>