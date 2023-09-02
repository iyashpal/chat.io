<script setup lang="ts">
defineProps<{ hasItems?: boolean }>()
</script>
<template>
  <button class="text-gray-400 relative hover:text-gray-800 dark:hover:text-gray-200" :class="{'before:content-[\'\'] before:absolute before:h-2 before:w-2 before:bg-red-600 before:rounded-full before:top-0 before:right-0.5 before:animate-pulse': hasItems}">
    <slot/>
  </button>
</template>
