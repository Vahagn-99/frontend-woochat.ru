import { createRouter, createWebHistory } from 'vue-router'
import TopMenu from "@/components/menu/TopMenu.vue";
import Tariffs from "@/views/Tariffs.vue";
import Instances from "@/views/Instances.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'menu',
      component: TopMenu,
      children: [
        {
          path: '',
          redirect: '/instances',
        },
        {
          path: 'instances',
          name: 'instances',
          component: Instances
        },
        {
          path: 'tariffs',
          name: 'tariffs',
          component: Tariffs
        },
      ],
    },
  ]
})

export default router
