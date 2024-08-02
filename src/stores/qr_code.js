import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useQrCodeStore = defineStore('qr_code', () => {
  const count = ref({})
  const doubleCount = computed(() => count.value * 2)
  async function getQR(id) {
    // try {
    //   await apiClient.post(`clients/accounts/` + id);
    //   await getClient(id);
    //   document.getElementById('save-notification').classList.remove('hidden')
    //   document.getElementById('client-account-text').classList.remove('hidden')
    //   document.getElementById('save-notification').classList.add('dct-animation');
    //
    //   setTimeout(() => {
    //     document.getElementById('save-notification').classList.add('hidden')
    //     document.getElementById('client-account-text').classList.add('hidden')
    //     document.getElementById('save-notification').classList.remove('dct-animation');
    //   }, 3000)
    // } catch (e) {
    //   errors.value = e.response.data.errors;
    //   document.getElementById('failed-notification').classList.remove('hidden')
    //   document.getElementById('save-notification').classList.add('dct-animation');
    //   setTimeout(() => {
    //     document.getElementById('failed-notification').classList.add('hidden')
    //     document.getElementById('save-notification').classList.remove('dct-animation');
    //   }, 3000)
    // }
  }

  return { count, doubleCount, increment }
})
