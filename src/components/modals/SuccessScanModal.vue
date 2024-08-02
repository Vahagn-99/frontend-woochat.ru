<template>
  <FwbModal  @close="closeModal" size="2xl">
    <template #body>
      <div class="flex flex-col items-center mb-6">
        <Lucide icon="CircleCheck" class="text-[#76cf85] w-[48px] h-[48px]"/>
        <p class="font-bold text-[20px] mt-2">QR-код успешно отсканирован</p>
        <p class="my-2">Теперь вы можете выполнить настройки для этого номера.</p>
        <div class="flex  gap-2 mt-4">
          <FwbButton @click="closeModal" color="alternative">
            Позже
          </FwbButton>
          <FwbButton @click="accept"  class="bg-[#76cf85] hover:bg-[#76cf85]">
            Настроить
          </FwbButton>
        </div>
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