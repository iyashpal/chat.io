<script setup lang="ts">
import {useAuthStore} from "~/stores";
import {PlusIcon, ChatBubbleBottomCenterTextIcon, BellIcon, MagnifyingGlassIcon} from '@heroicons/vue/24/outline'

const auth = useAuthStore()
onMounted(() => {
  auth.authenticate()
})
</script>
<template>
  <div class="rounded-xl bg-white dark:bg-gray-900 p-4 flex items-center justify-between">
    <div class="px-3">
      <div class="relative flex items-center">
        <div class="absolute inset-y-0 left-0 flex py-1.5 pr-1.5">
          <span class="inline-flex items-center h-full px-2.5 text-gray-500">
            <MagnifyingGlassIcon class="h-5 w-5"/>
          </span>
        </div>
        <input type="text" placeholder="Search or type a command" class="block w-full rounded-xl py-3 pl-10 pr-14 bg-slate-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none text-sm leading-6">
        <div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
          <kbd class="bg-white dark:bg-gray-900 inline-flex items-center rounded-lg px-3 font-sans font-semibold text-sm text-gray-800 dark:text-gray-400">⌘ K</kbd>
        </div>
      </div>
    </div>
    <div class="flex items-center gap-5">

      <button class="inline-flex items-center gap-1 font-medium text-white px-5 py-2.5 bg-blue-600 rounded-xl hover:bg-blue-500">
        <PlusIcon class="h-5 w-5"/>
        Create
      </button>

      <NotifiableNavIcon :hasItems="true">
        <ChatBubbleBottomCenterTextIcon class="h-6 w-6"/>
      </NotifiableNavIcon>

      <NotifiableNavIcon :hasItems="true">
        <BellIcon class="h-6 w-6"/>
      </NotifiableNavIcon>

      <button>
        <img :src="auth.USER.avatar" class="h-10 w-10 rounded-full" :alt="auth.USER.name"/>
      </button>
    </div>
  </div>
</template>
