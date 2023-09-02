<script setup lang="ts">
import {useMessageStore} from "~/stores";
import {EnvelopeIcon, LinkIcon} from '@heroicons/vue/24/outline'

const room = useMessageStore()
</script>
<template>
  <div class="bg-white dark:bg-gray-900 rounded-xl overflow-hidden col-span-2">
    <template v-if="room.IS_ROOM_SELECTED">
      <MessageHeader/>
      <div class="px-6">
        <MessageWrite/>

        <div class="dark:text-gray-500">
          <EnvelopeIcon class="w-5 h-5 inline-flex"/>
          <a :href="`mailto:${room.USER.email}`" class="ml-2 text-sm font-semibold">
            {{ room.USER.email }}
          </a>
        </div>
        <MessageSocialHandles/>
        <div class="py-6">
          <p class="text-sm font-medium text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
            <LinkIcon class="w-4 h-4 inline-block mr-2"/>
            <a target="_blank" :href="`https://${room.USER.website}`">{{ room.USER.website }}</a>
          </p>
        </div>
      </div>
      <MessageList/>
    </template>
    <div class="flex items-center h-full justify-center dark:text-gray-600 p-10" v-else>
      <div class="border border-dashed rounded-md p-10 border-gray-400 text-gray-500 dark:border-gray-600 text-sm font-medium">
        Select a customer from the list
      </div>
    </div>

  </div>
</template>
