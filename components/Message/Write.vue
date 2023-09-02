<script setup lang="ts">
import {useAuthStore, useMessageStore} from "~/stores";
import {InformationCircleIcon} from "@heroicons/vue/24/solid";

const privateNote = ref('')
const auth = useAuthStore()
const room = useMessageStore()
const error = ref(false)

watch(() => room.IS_WRITE_MESSAGE_ENABLED, (state) => {
  if (state) {
    error.value = false
    privateNote.value = ''
  }
})

function sendMessage() {
  // Reset the error state
  error.value = false

  if (Boolean(privateNote.value) && privateNote.value !== '<p></p>') {
    room.pushMessage(privateNote.value)
  } else {
    error.value = true
  }
}
</script>
<template>
  <div v-if="room.IS_WRITE_MESSAGE_ENABLED" class="space-y-2 mb-4">
    <label class="inline-flex items-center text-xs gap-1 font-medium dark:text-gray-300">
      <span>Write message</span>
      <InformationCircleIcon class="h-4 w-4 text-gray-400 dark:text-gray-700"/>
    </label>
    <MessageBox v-model:content="privateNote"/>
    <div class="flex gap-5 items-center justify-end">
      <div>
        <p v-if="error" class="text-sm text-red-500">Message shouldn't be empty.</p>
      </div>
      <button @click="sendMessage" class="p-2 px-5 rounded-lg border-2 border-blue-600 hover:bg-blue-100 dark:hover:bg-gray-800 text-blue-600 text-sm font-semibold">
        Send
      </button>
    </div>
  </div>
</template>