<script setup lang="ts">
import {User} from "~/types";
import {useMessageStore} from "~/stores";
import {ChevronRightIcon} from "@heroicons/vue/24/outline";

const room = useMessageStore()
defineProps<{ as: string, customer: User }>()
</script>
<template>
  <Component :is="as" class="py-3 px-3 select-none hover:bg-gray-200 dark:hover:bg-gray-800 hover:rounded-xl first:border-t-0" :class="{'bg-gray-100 dark:bg-gray-800 rounded-xl shadow-sm':customer.id === room.USER.id, ' border-t dark:border-gray-800': customer.id !== room.USER.id}">
    <div class="flex items-start gap-4">
      <CustomCheckbox/>
      <div @click="room.roomFor(customer)" class="flex-auto inline-flex items-center justify-between">
        <div class="flex items-center gap-2 cursor-pointer">
          <img :src="customer.avatar" alt="VC" class="w-10 h-10 rounded-full"/>
          <div class="">
            <h3 class="font-semibold text-gray-800" :class="[customer.id === room.USER.id ? 'dark:text-gray-200' : 'dark:text-gray-500']">
              {{ customer.name }}
            </h3>
            <p class="text-gray-400 text-sm" :class="[customer.id === room.USER.id ? 'dark:text-gray-600' : 'dark:text-gray-700']">@{{ customer.username }}</p>
          </div>
        </div>
        <div>
          <ChevronRightIcon class="h-5 w-5 dark:text-gray-200" v-if="customer.id === room.USER.id"/>
        </div>
      </div>
    </div>
  </Component>
</template>