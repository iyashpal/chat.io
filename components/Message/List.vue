<script setup lang="ts">
import {useMessageStore} from "~/stores";

const room = useMessageStore()

onMounted(() => {
  room.syncMessages()
})

// Synchronize the room messages if room customer changes
watch(() => room.USER, () => {
  room.syncMessages()
})
</script>
<template>
  <div class="px-6">
    <div class="flex gap-4 items-center justify-between">
      <div class="py-3.5 text-left text-sm font-semibold text-gray-500 dark:text-white">
        Message
      </div>
      <div class="pr-5 py-3.5 text-left text-sm font-semibold text-gray-500 dark:text-white">
        Date
      </div>
    </div>
    <div class="h-40 overflow-y-auto">
      <MessageCard :message="message" v-for="(message, index) in room.MESSAGES.reverse()" :key="index"/>
      <div class="bg-yellow-100 p-4 rounded-xl text-yellow-600" v-if="room.MESSAGES.length === 0">
        No Messages available.
      </div>
    </div>
  </div>
</template>