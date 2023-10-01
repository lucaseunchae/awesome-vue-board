export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/posts/:id',
    name: 'posts/detail',
    component: () => import('@/features/Post/views/PostDetailView.vue')
  }
]
