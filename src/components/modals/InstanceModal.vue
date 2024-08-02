<template>
  <FwbModal  @close="closeModal" size="5xl" class="h-auto">
    <template #header>
      <div class="flex items-center text-lg font-semibold">
        Создать подключение
      </div>
    </template>
    <template #body>
    <div class="p-2">
      <div class="bg-green-100 text-gray-800 p-6 mb-6 flex items-center rounded-lg">
        <i class="text-green-500 text-xl mr-3"><Lucide icon="Info" stroke-width="2"/></i>
        <span>Рекомендуем не добавлять личный аккаунт WhatsApp, чтобы ваша частная переписка не стала публичной.</span>
      </div>
      <div class="flex items-center justify-between gap-6">
        <div class="mb-6">
          <ul class="flex flex-col gap-4">
            <li><span class="font-bold">1. </span> Откройте WhatsApp на телефоне</li>
            <li><span class="font-bold">2. </span> Нажмите меню « ⁝ » или «Настройки»<Lucide icon="ArrowRight" class="inline w-6 h-6"/> «Связанные устройства» <Lucide icon="ArrowRight" class="inline w-6 h-6"/> «Привязка устройства»</li>
            <li><span class="font-bold">3. </span> Наведите телефон на экран, чтобы считать код</li>
          </ul>
        </div>
        <div>
          <QRCode :message="data.message"/>
          <p class="text-green-500 text-center cursor-pointer pr-2">
            Скопировать ссылку на QR-код
          </p>
        </div>
      </div>
    </div>
    </template>
    <template #footer>
      <div class="flex justify-between">
        <FwbButton @click="closeModal" color="alternative">
          Отмена
        </FwbButton>
        <fwb-button @click="accept" class="bg-[#76cf85] hover:bg-[#76cf85]">
          Success
        </fwb-button>
      </div>
    </template>
  </FwbModal>
</template>
<script setup>
import { FwbButton, FwbModal } from 'flowbite-vue'
import Lucide from "@/lib/Lucide.vue";
import {reactive} from "vue";
import QRCode from "@/components/QRCode.vue";

const emit=defineEmits(['close'])
const data = reactive({
  type: "qrCode",
  message: "iVBORw0KGgoAAAANSUhEUgAAARQAAAEUCAYAAADqcMl5AAAAAklEQVR4AewaftIAABJ1SURBVO3BQY4YybLgQDJR978yR0tfBZDIKKnfHzezP1hrrQse1lrrkoe11rrkYa21LnlYa61LHtZa65KHtda65GGttS55WGutSx7WWuuSh7XWuuRhrbUueVhrrUse1lrrkoe11rrkYa21LvnhI5W/qWJSOamYVKaKSWWqmFROKr5QmSomlS8q3lCZKiaVqWJSeaNiUpkqJpWpYlL5TRVvqJxUTCp/U8UXD2utdcnDWmtd8rDWWpf8cFnFTSpfqEwVX1S8ofJGxaQyVUwqU8WkcqJyUjGpnKicVJyonKhMFV9UnKhMFZPKScVNFTep3PSw1lqXPKy11iUPa611yQ+/TOWNii8qJpVJ5QuVNypuUpkqJpWp4qRiUplUpoqbVN6oOFF5Q2WqOFGZKiaVSeU3qbxR8Zse1lrrkoe11rrkYa21Lvnhf1zFFxWTyqQyVZyoTCpvVEwVX6i8UTGpnKicVEwqN6n8pooTlTcqJpX/Sx7WWuuSh7XWuuRhrbUu+eF/nMpUMVVMKpPKScWkMlW8UfGFylQxVbyhMqmcqHxRcaJyonJTxRsqU8WJyqQyVfxf8rDWWpc8rLXWJQ9rrXXJD7+s4jdVfFExqUwqU8VJxaTyhsoXKicVJxVvqHyhMlX8JpVJZap4Q2WqOKm4qeK/5GGttS55WGutSx7WWuuSHy5T+ZtUpopJZaqYVKaKSeVEZap4Q2WqmFSmikllqphUvlCZKk4qJpWp4g2V",
});

function closeModal () {
  emit('close')
}

function accept(){
  emit('accept')
  closeModal()
}

</script>