<script setup lang="ts">
import StarterKit from '@tiptap/starter-kit'
import LinkExtension from '@tiptap/extension-link'
import {Editor, EditorContent} from '@tiptap/vue-3'
import UnderlineExtension from '@tiptap/extension-underline'
import TextAlignExtension from '@tiptap/extension-text-align'

const props = defineProps<{ content: string }>()

const emits = defineEmits(['update:content'])

const editor = ref()

onMounted(() => {
  editor.value = new Editor({
    content: '',
    extensions: [
      StarterKit,
      LinkExtension,
      UnderlineExtension,
      TextAlignExtension
    ],
    onUpdate: () => {
      emits('update:content', editor.value.getHTML())
    }
  })
})

watch(() => props.content, (content) => {
  if (editor.value.getHTML() === content) {
    return
  }

  editor.value.setContent(content)
})

onUnmounted(() => {
  editor.value.destroy()
})


</script>
<template>
  <div class="rounded-xl overflow-hidden border-2 dark:border-gray-800 duration-300">
    <div v-if="editor" class="flex items-center gap-4 bg-white dark:bg-gray-800 dark:text-gray-500 p-3 ">
      <button @click="editor.chain().focus().toggleBold().run()" class="p-0.5" :class="{'bg-gray-300 dark:bg-gray-950 rounded-md dark:text-gray-200': editor.isActive('bold')}">
        <svg class="h-5 w-5" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 11.667H8m4 0s3.333 0 3.333-3.334C15.333 5 12 5 12 5s0 0 0 0H8.6a.6.6 0 00-.6.6v6.067m4 0s4 0 4 3.666C16 19 12 19 12 19s0 0 0 0H8.6a.6.6 0 01-.6-.6v-6.733" stroke="currentColor" stroke-width="1.5"></path>
        </svg>
      </button>
      <button @click="editor.chain().focus().toggleItalic().run()" class="p-0.5" :class="{'bg-gray-300 dark:bg-gray-950 rounded-md dark:text-gray-200': editor.isActive('italic')}">
        <svg class="h-5 w-5" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 5h3m3 0h-3m0 0l-4 14m0 0H7m3 0h3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </button>
      <button @click="editor.chain().focus().toggleUnderline().run()" class="p-0.5" :class="{'bg-gray-300 dark:bg-gray-950 rounded-md dark:text-gray-200': editor.isActive('underline')}">
        <svg class="h-5 w-5" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 5v6a4 4 0 01-4 4v0a4 4 0 01-4-4V5M6 19h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </button>
      <button @click="editor.chain().focus().toggleLink().run()" class="p-0.5" :class="{'bg-gray-300 dark:bg-gray-950 rounded-md dark:text-gray-200': editor.isActive('link')}">
        <svg class="h-5 w-5" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 11.998C14 9.506 11.683 7 8.857 7H7.143C4.303 7 2 9.238 2 11.998c0 2.378 1.71 4.368 4 4.873a5.3 5.3 0 001.143.124" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M10 11.998c0 2.491 2.317 4.997 5.143 4.997h1.714c2.84 0 5.143-2.237 5.143-4.997 0-2.379-1.71-4.37-4-4.874A5.304 5.304 0 0016.857 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </button>
    </div>
    <div @click="editor.chain().focus()" class="p-3 bg-gray-100 dark:bg-gray-950 dark:text-gray-300">
      <editor-content :editor="editor" class="min-h-[4rem]"/>
    </div>
  </div>
</template>