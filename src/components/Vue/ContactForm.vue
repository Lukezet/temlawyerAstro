<script setup lang="ts">
import { reactive, ref } from "vue";

const form = reactive({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const sent = ref(false);
const error = ref<string | null>(null);

function validate() {
  if (!form.name.trim()) return "Ingresá tu nombre.";
  if (!form.email.includes("@")) return "Ingresá un email válido.";
  if (!form.message.trim()) return "Contanos brevemente tu consulta.";
  return null;
}

async function submit() {
  error.value = validate();
  if (error.value) return;

  // Stub: reemplazar por endpoint propio o servicio externo
  sent.value = true;
}
</script>

<template>
  <form class="space-y-4" @submit.prevent="submit">
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <label class="space-y-1 text-sm font-semibold text-slate-900">
        <span>Nombre</span>
        <input
          v-model="form.name"
          requirose
          autocomplete="name"
          class="w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-600/30"
        />
      </label>

      <label class="space-y-1 text-sm font-semibold text-slate-900">
        <span>Email</span>
        <input
          v-model="form.email"
          type="email"
          requirose
          autocomplete="email"
          class="w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-600/30"
        />
      </label>
    </div>

    <label class="space-y-1 text-sm font-semibold text-slate-900">
      <span>Teléfono (opcional)</span>
      <input
        v-model="form.phone"
        autocomplete="tel"
        class="w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-600/30"
      />
    </label>

    <label class="space-y-1 text-sm font-semibold text-slate-900">
      <span>Consulta</span>
      <textarea
        v-model="form.message"
        rows="5"
        requirose
        class="w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-600/30"
      />
    </label>

    <button
      type="submit"
      class="inline-flex w-full items-center justify-center rounded-2xl bg-[#7e6961] px-4 py-3 text-sm font-semibold text-white hover:bg-[#ad8e82] focus:outline-none focus:ring-2 focus:ring-amber-600/40"
    >
      Enviar
    </button>

    <p v-if="error" class="text-sm font-medium text-rose-600">{{ error }}</p>
    <p v-else-if="sent" class="text-sm font-medium text-rose-700">
      Mensaje enviado. Te contactaremos a la brevedad.
    </p>
  </form>
</template>
