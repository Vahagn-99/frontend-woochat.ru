<template>
  <FwbModal  @close="closeModal" size="2xl">
    <template #header>
      <div class="flex items-center text-lg font-semibold">
        Настройка
      </div>
    </template>
    <template #body>
      <div class="flex flex-col gap-4 mb-6">
        <div>
          <label class="block">Воронка</label>
          <select class="!rounded-md  transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm py-2 px-3 pr-8 focus:ring-0 focus:ring-[#76cf85] focus:border-[#76cf85] focus:border-opacity-40  mt-3 !box sm:mt-0">
            <option></option>
          </select>
        </div>
        <div>
          <label class="block">Этап</label>
          <select class="!rounded-md  transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm py-2 px-3 pr-8 focus:ring-0 focus:ring-[#76cf85] focus:border-[#76cf85] focus:border-opacity-40  mt-3 !box sm:mt-0">
            <option></option>
          </select>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-between">
        <FwbButton @click="closeModal" color="alternative">
          Отмена
        </FwbButton>
        <fwb-button @click="accept" class="bg-[#76cf85] hover:bg-[#76cf85]">
          Сохранить
        </fwb-button>
      </div>
    </template>
  </FwbModal>
</template>

<script setup>
import { FwbButton, FwbModal } from 'flowbite-vue'
import Lucide from "@/lib/Lucide.vue";

const emit=defineEmits(['close'])

function closeModal () {
  emit('close')
}

function accept(){
  emit('accept')
  closeModal()
}

</script>