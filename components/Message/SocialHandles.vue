<script setup lang="ts">
import {useMessageStore} from "~/stores";

const room = useMessageStore()
</script>
<template>
  <div class="flex items-center gap-5 py-5 border-y dark:border-gray-800 mt-5 text-gray-400 dark:text-gray-500">
    <a class="hover:text-gray-900 dark:hover:text-gray-200" :href="room.USER.twitter_profile" target="_blank">
      <svg class="h-5 w-5" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83C21.94 5.674 23 3.01 23 3.01z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </a>
    <a class="hover:text-gray-900 dark:hover:text-gray-200" :href="room.USER.instagram_profile" target="_blank">
      <svg class="h-5 w-5" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 16a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M3 16V8a5 5 0 015-5h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5z" stroke="currentColor" stroke-width="1.5"></path>
        <path d="M17.5 6.51l.01-.011" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </a>
    <a class="hover:text-gray-900 dark:hover:text-gray-200" :href="room.USER.pinterest_profile" target="_blank">
      <svg class="h-5 w-5" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 14.5c-3-4.5 1.462-8 4.5-8 3.038 0 5.5 1.654 5.5 5.5 0 3.038-2 5-4 5s-3-2-2.5-5M12 10L9 21.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </a>
    <a class="hover:text-gray-900 dark:hover:text-gray-200" :href="room.USER.facebook_profile" target="_blank">
      <svg class="h-5 w-5" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 2h-3a5 5 0 00-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </a>
  </div>
</template>