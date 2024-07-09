<script setup>
import BgHeader from '../assets/header.png'
import Profile from '../assets/profile.png';
</script>
<template>
    <header>
        <div class="relative mb-16">
            <img :src="BgHeader" alt="header" class="w-full">
            <div class="bg-white shadow-md rounded-xl p-10 w-1/2 absolute -bottom-14 left-10">
                <span class="bg-green-500 text-white text-sm rounded-md px-2 py-1.5">Technology</span>
                <h1 class="text-4xl font-semibold leading-10 py-4">The Impact of Technology on the Workplace: How
                    Technology is Changing</h1>
                <div class="flex items-center space-x-3">
                    <img :src="Profile" alt="profile" class="size-8">
                    <p class="text-gray-500">Jason Francisco</p>
                    <p class="text-gray-500">August 20, 2022</p>
                </div>
            </div>
        </div>
    </header>
</template>