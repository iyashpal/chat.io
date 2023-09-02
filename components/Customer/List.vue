<script setup lang="ts">
import {useUserStore} from "~/stores";

const userStore = useUserStore()

onMounted(() => {
  userStore.syncUsers()
})

</script>
<template>
  <div class="bg-white dark:bg-gray-900 rounded-xl overflow-hidden py-3 px-5">
    <div class="pb-4 pt-1 flex items-center gap-3 text-gray-500 border-b dark:border-gray-800">
      <CustomCheckbox id="select-all"/>

      <label for="select-all" class="select-none text-base font-semibold">Name</label>
    </div>
    <div class="py-3 -ml-3">
      <ul>
        <CustomerCard as="li" :customer="user" :key="index" v-for="(user, index) in userStore.USERS_EXCEPT_ME"/>
      </ul>
    </div>
  </div>
</template>
