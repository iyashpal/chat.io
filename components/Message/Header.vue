<script setup lang="ts">
import {useMessageStore} from "~/stores";
import {PlusIcon} from "@heroicons/vue/24/outline";
import {ChatBubbleBottomCenterTextIcon, XMarkIcon} from "@heroicons/vue/24/solid";

const room = useMessageStore()
</script>
<template>
  <div class="p-6">
    <div class="flex items-center justify-between flex-nowrap">
      <div class="">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img class="h-14 w-14 rounded-full" :src="room.USER.avatar" alt="">
          </div>
          <div class="ml-4">
            <h2 class="text-lg font-semibold leading-6 text-gray-900 dark:text-gray-200">{{ room.USER.name }}</h2>
            <p class="text-sm text-gray-500">
              <a href="#">@{{ room.USER.username }}</a>
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-shrink-0 font-semibold">
        <button type="button" class="relative inline-flex items-center rounded-xl bg-white dark:bg-gray-900 px-5 py-3 text-sm text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50">
          <span>Follow</span>
          <PlusIcon class="h-5 w-5 ml-2"/>
        </button>
        <button @click="room.toggleMessageWrite" type="button" :class="{'ring-red-300 dark:ring-red-700 hover:bg-red-50 text-red-600 dark:text-red-600': room.IS_WRITE_MESSAGE_ENABLED, 'ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 text-gray-900 dark:text-gray-200': !room.IS_WRITE_MESSAGE_ENABLED}" class="relative ml-3 inline-flex items-center rounded-xl bg-white dark:bg-gray-900 px-5 py-3 text-sm shadow-sm ring-1 ring-inset ">
          <template v-if="room.IS_WRITE_MESSAGE_ENABLED">
            <span>Cancel</span>
            <XMarkIcon class="h-5 w-5 ml-2"/>
          </template>
          <template v-else>
            <span>Message</span>
            <ChatBubbleBottomCenterTextIcon class="h-5 w-5 ml-2"/>
          </template>
        </button>
      </div>
    </div>
  </div>
</template>
