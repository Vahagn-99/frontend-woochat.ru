<template>
  <div class="flex items-center justify-between bg-[#76cf85] px-6 mb-6 h-[60px]">
    <div class="flex items-center justify-between ">
      <div class="flex items-center justify-start gap-2 mr-[24px] ">
        <h2 class="text-[24px] text-white">
          <Logo/>
        </h2>
      </div>
    </div>
    <div class="flex cursor-pointer items-center justify-center py-2 gap-2 text-white px-4 border rounded-lg border-[#fff]">
      <Lucide icon="User" />
    </div>
  </div>
  <ul class="flex items-center gap-[18px] p-6">
    <template v-for="(item,key) in menu" :key="key">
      <li class="flex items-center justify-center py-2 gap-2  px-4"
          :class="{
                  'border-b-2 border-[#76cf85] !text-[#76cf85]':isActive(item.url),
                  'cursor-pointer':item.url,
                  'cursor-not-allowed pointer-events-none opacity-40':!item.url,
               }"
          @click="linkTo(item.url)">
        <Lucide :icon="item.icon" />
        <p class="text-[15px] font-bold">{{item.name}}</p>
      </li>
    </template>
  </ul>
  <RouterView />

</template>
<script setup>

import {linkTo} from "@/helper/function.js";
import {RouterView, useRoute} from "vue-router";
import Lucide from "@/lib/Lucide.vue";
import Logo from "@/components/Logo.vue";
const route=useRoute()

const menu={
  instances:{
    name:'Подключение',
    url:'instances',
    icon:'Workflow'
  },
  tariffs:{
    name:'Тарифы и оплата',
    url:'tariffs',
    icon:'AlignRight'
  },
}

const isActive = (routeName) => {
  return route.name === routeName
}
</script>