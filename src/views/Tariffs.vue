<template>
  <div class="p-6 flex flex-col items-center space-y-4 max-w-[1080px]" style="margin: 0 auto;">
    <div class="flex items-center justify-end w-full">
      <div class="flex items-center gap-2">
        <input @click="toggle" class="transition-all w-6 h-6 duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded dark:bg-darkmode-800 dark:border-transparent checked:bg-[#76cf85] " type="checkbox"  style="box-shadow: none !important;">
        <p>со скидкой за отзыв -25%</p>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-4">
      <div class="border rounded-lg px-6 py-8 shadow-lg relative" style="border:1px solid #76cf85!important">
        <div class="bg-[#76cf85] text-white w-fit h-8 px-4 py-1 rounded-lg">
          Самый выгодный
        </div>
        <button class=" absolute top-[6px] right-[6px] !border px-2 py-1 rounded-md bg-[#F2F7FF] text-[#76cf85]">-20%</button>
        <h3 class="text-[1.6rem] font-semibold mt-4 mb-2">1 год</h3>
        <p class="text-zinc-500">+ 2 мес. в подарок</p>
        <p class="text-[2.8rem] font-bold mt-4 border-t pt-4" style="border-top:1px solid #d4d4d8!important">
          <span id="dct-one-year">{{isWithDiscount?'1 500':'2 000'}}</span> ₽<span class="text-[1.1rem] font-medium"> / месяц</span>
        </p>
        <p class="line-through text-[1.1rem] text-zinc-500 py-2"><span id="dct-one-year-old">35 000</span> ₽</p>
        <p class="text-[1.1rem] font-medium"><span id="dct-one-year-now">{{isWithDiscount?'1 800':'24 000'}}</span> ₽ за 14 мес.</p>
        <div class="flex items-center justify-center">
          <a href="#" target="_blank" rel="noopener">
            <button class="bg-[#76cf85] text-white font-medium rounded-md px-4 py-2 mt-8 text-center">
              <p style="color:white!important">Попробовать бесплатно</p>
            </button>
          </a>
        </div>
      </div>
      <div class="border rounded-lg p-6 shadow-lg py-8 relative" style="border:1px solid #76cf85!important">
        <button class=" absolute top-[6px] right-[6px] !border px-2 py-1 rounded-md bg-[#F2F7FF] text-[#76cf85]">-10%</button>

        <h3 class="text-[1.6rem] font-semibold mt-12 mb-2">6 месяцев</h3>
        <p class="text-zinc-500">+ 1 мес. в подарок</p>
        <p class="text-[2.8rem] font-bold mt-4 border-t pt-4" style="border-top:1px solid #d4d4d8!important">
          <span id="dct-six-month">{{isWithDiscount?'1 687':'2 250'}}</span> ₽<span class="text-[1.1rem] font-medium"> / месяц</span>
        </p>
        <p class="line-through text-[1.1rem] text-zinc-500 py-2"><span id="dct-six-month-old">17 500</span> ₽</p>
        <p class="text-[1.1rem] font-medium"><span id="dct-six-month-now">{{isWithDiscount?'1 800':'10 122'}}</span> ₽ за 7 мес</p>
        <div class="flex items-center justify-center">
          <a href="#" target="_blank" rel="noopener">
            <button class="bg-[#F2F7FF] font-medium rounded-md !border px-4 py-2 mt-8 text-center hover:bg-[#76cf85] dct-button">
              <p class="dct-link">Попробовать бесплатно</p>
            </button>
          </a>
        </div>
      </div>
      <div class="border rounded-lg p-6 shadow-lg py-8 relative" style="border:1px solid #76cf85!important">
        <h3 class="text-[1.6rem] font-semibold mt-12 mb-2">3 месяца</h3>
        <p class="text-white">.</p>
        <p class="text-[3rem] font-bold mt-4 border-t pt-4" style="border-top:1px solid #d4d4d8!important">
          <span id="dct-three-month">{{isWithDiscount?'1 875':'2 500'}}</span>₽<span class="text-[1.1rem] font-medium"> / месяц</span>
        </p>
        <p v-if="isWithDiscount" class="line-through text-[1.1rem] text-zinc-500 py-2"><span id="dct-six-month-old">7 500</span> ₽</p>
        <p v-else class="text-white py-2">.</p>
        <p class="text-[1.1rem] font-medium"><span id="dct-three-month-now">{{isWithDiscount?'5 625':'7 500'}}</span> ₽ за 3 мес.</p>
        <div class="flex items-center justify-center">
          <a href="#" target="_blank" rel="noopener">
            <button class="bg-[#F2F7FF] font-medium rounded-md !border px-4 py-2 mt-8 text-center hover:bg-[#76cf85] dct-button">
              <p class="dct-link">Попробовать бесплатно</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {ref} from "vue";

const isWithDiscount=ref(false)
function toggle($event){
  isWithDiscount.value=$event.target.checked
  console.log($event.target.checked)
}
</script>