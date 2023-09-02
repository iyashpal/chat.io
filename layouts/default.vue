<script setup lang="ts">
import { useLayoutStore } from '@/stores'
const layout = useLayoutStore()
</script>
<template>
    <Html :class="layout.theme">
        <Body class="bg-gray-100 dark:bg-gray-600 font-sans">
            <div class="w-full min-h-screen p-10 flex gap-10">
                <Sidebar />

                <Content>
                    <slot />
                </Content>
            </div>
        </Body>
    </Html>
</template>
