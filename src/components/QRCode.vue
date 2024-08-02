<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import QRCode from 'qrcode';

const props = defineProps({
  message: {
    type: String,
    required: true,
  },
});

const canvas = ref(null);

onMounted(() => {
  if (canvas.value) {
    QRCode.toCanvas(canvas.value, props.message, { width: 256, height: 256 }, (error) => {
      if (error) console.error(error);
    });
  }
});
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
