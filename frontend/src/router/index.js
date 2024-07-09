import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Blogs from '@/views/Blogs.vue'
import Blog from '@/views/Blog.vue'
import AddBlog from '@/views/AddBlog.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: Blogs
    },
    {
      path: '/blogs/:id',
      name: 'blog',
      component: Blog
    },
    {
      path: '/blog/add',
      name: 'add-blog',
      component: AddBlog
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFound
    },
  ]
})

export default router
