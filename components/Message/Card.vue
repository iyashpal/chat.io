<script setup lang="ts">
import {DateTime} from 'luxon'
import {Message} from "~/types";
import {useAuthStore, useMessageStore} from "~/stores";

const props = defineProps<{ message: Message }>()

const auth = useAuthStore()
const room = useMessageStore()

/**
 * Get the message author
 */
const USER = computed(() => {
  if (props.message.user_id === auth.USER.id) {
    return auth.USER
  } else {
    return room.USER
  }
})
</script>
<template>
  <div class="flex items-center justify-between">
    <div class="whitespace-nowrap py-4 pl-4 pr-3 text-sm dark:text-white sm:pl-0">
      <div class="flex gap-2">
        <div>
          <img class="w-10 h-10 rounded-md" :src="USER.avatar" :alt="USER.name"/>
        </div>
        <div>
          <h3 class="font-semibold text-sm">{{ USER.name }}</h3>
          <p class="text-xs text-gray-500" v-html="message.message"></p>
        </div>
      </div>
    </div>
    <div class="whitespace-nowrap px-3 py-4 text-sm dark:text-gray-300">{{ DateTime.fromISO(message.created_at).toFormat('hh:mm a, dd LLL yyyy') }}</div>
  </div>
</template>