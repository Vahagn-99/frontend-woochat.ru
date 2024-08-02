<template>
  <div class="p-6">
    <div class="intro-y box">
      <table class="w-full ">
        <thead class="rounded-lg">
        <tr class="">
          <th class="font-bold text-start px-5 py-3 border-b-2 dark:border-darkmode-300 whitespace-nowrap !h-[45px] !max-h-[45px] !min-h-[45px]">Номер подключения</th>
          <th class="font-bold text-start px-5 py-3 border-b-2 dark:border-darkmode-300 whitespace-nowrap !h-[45px] !max-h-[45px] !min-h-[45px]">Телефон</th>
          <th class="font-bold text-start px-5 py-3 border-b-2 dark:border-darkmode-300 whitespace-nowrap !h-[45px] !max-h-[45px] !min-h-[45px]">Статус</th>
          <th class="font-bold text-start px-5 py-3 border-b-2 dark:border-darkmode-300 whitespace-nowrap !h-[45px] !max-h-[45px] !min-h-[45px]">Подписка до</th>
          <th class="font-bold text-start px-5 py-3 border-b-2 dark:border-darkmode-300 whitespace-nowrap !h-[45px] !max-h-[45px] !min-h-[45px]">Воронка</th>
          <th class="font-bold text-start px-5 py-3 border-b-2 dark:border-darkmode-300 whitespace-nowrap !h-[45px] !max-h-[45px] !min-h-[45px]">Этап</th>
          <th class="font-bold text-start px-5 py-3 border-b-2 dark:border-darkmode-300 whitespace-nowrap !h-[45px] !max-h-[45px] !min-h-[45px]"></th>
        </tr>
        </thead>
        <tbody>
        <tr v-if="false">
          <td colspan="7">
            <div class="h-[200px] flex items-center justify-center ">
              Пока нечего нет
            </div>
          </td>
        </tr>
        <tr v-for="(instance,key) in fake_instances">
          <td class="px-5 py-3 border-b dark:border-darkmode-300">{{ instance.connectionNumber }}</td>
          <td class="px-5 py-3 border-b dark:border-darkmode-300">{{ instance.phone }}</td>
          <td class="px-5 py-3 border-b  dark:border-darkmode-300">
            <span class="px-3 py-1.5 font-bold rounded-lg" :class="{
              'text-[#76cf85] bg-[#76cf852b]':instance.status==='Активен',
              'text-red-500 bg-red-100':instance.status==='Неактивен',
            }">
              {{ instance.status }}
            </span>
          </td>
          <td class="px-5 py-3 border-b dark:border-darkmode-300">{{ instance.subscriptionUntil }}</td>
          <td class="px-5 py-3 border-b dark:border-darkmode-300">{{ instance.funnel }}</td>
          <td class="px-5 py-3 border-b dark:border-darkmode-300">{{ instance.stage }}</td>
          <td class="px-5 py-3 border-b dark:border-darkmode-300">
            <div class="flex justify-end items-center gap-4">
              <div><button class="border rounded-lg px-6 py-2 text-[#76cf85] cursor-pointer flex gap-3" @click="openAddInstanceModal"><Lucide icon="QrCode" stroke-width="2"/> Отсканировать QR</button></div>
              <div><Lucide icon="Settings" stroke-width="2" class="cursor-pointer" @click="openSettingModal"/></div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <button class="px-6 py-3 mt-6 bg-[#76cf85] text-white rounded-lg" @click="openAddInstanceModal">
      <span class="flex items-center justify-start gap-1 font-bold">
        <Lucide icon="Plus" stroke-width="2"/>
        Создать подключение
      </span>
    </button>
  </div>
  <InstanceModal v-if="isOpenAddInstanceModal" @close="closeAddInstanceModal" @accept="makeInstance"/>
  <SuccessScanModal v-if="isOpenSuccessModal" @close="closeSuccessModal" @accept="openSettingModal"/>
  <div class="pt-[300px] min-w-full h-screen">
    <SettingModal v-if="isOpenSettingModal" @close="closeSettingModal" @accept="saveSetting"/>
  </div>
</template>
<script setup>

import Lucide from "@/lib/Lucide.vue";
import InstanceModal from "@/components/modals/InstanceModal.vue";
import {ref} from "vue";
import {fake_instances} from "@/helper/fake_data.js";
import SettingModal from "@/components/modals/SettingModal.vue";
import SuccessScanModal from "@/components/modals/SuccessScanModal.vue";
const isOpenAddInstanceModal=ref(false)
const isOpenSettingModal=ref(false)
const isOpenSuccessModal=ref(false)

function openSuccessModal(){
  isOpenSuccessModal.value=true
}

function closeSuccessModal(){
  isOpenSuccessModal.value=false
}

function openSettingModal(){
  isOpenSettingModal.value=true
}

function closeSettingModal(){
  isOpenSettingModal.value=false
}
function openAddInstanceModal(){
  isOpenAddInstanceModal.value=true
}

function closeAddInstanceModal(){
  isOpenAddInstanceModal.value=false
}

function makeInstance(){
  closeAddInstanceModal()
  openSuccessModal()
}

function saveSetting(){

}
</script>