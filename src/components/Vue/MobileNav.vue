<script setup lang="ts">
import { ref } from "vue";
type Item = { label: string; href: string };
defineProps<{ navItems: Item[] }>();
const open = ref(false);
</script>

<template>
  <div class="relative">
    <button
      class="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm"
      type="button"
      :aria-expanded="open ? 'true' : 'false'"
      aria-controls="mobile-menu"
      @click="open = !open"
    >
      Menú
    </button>

    <div
      v-show="open"
      id="mobile-menu"
      class="absolute right-0 mt-3 w-[min(320px,calc(100vw-2rem))] rounded-2xl border border-slate-200 bg-white p-2 shadow-xl"
      role="dialog"
      aria-label="Menú móvil"
    >
      <a
        v-for="item in navItems"
        :key="item.href"
        class="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-rose-950"
        :href="item.href"
        @click="open = false"
      >
        {{ item.label }}
      </a>

      <a
        class="mt-2 block rounded-xl bg-amber-600 px-3 py-2 text-center text-sm font-semibold text-slate-950 hover:bg-amber-500"
        href="#contacto"
        @click="open = false"
      >
        Agendar consulta
      </a>
    </div>
  </div>
</template>
