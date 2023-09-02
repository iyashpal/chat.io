<script setup lang="ts">
import {NavigationType} from '~/types'
import {useLayoutStore} from '@/stores'
import {SunIcon as SunSolidIcon, MoonIcon as MoonSolidIcon, PlusSmallIcon, Square3Stack3DIcon, ChevronUpIcon, ChevronDownIcon} from '@heroicons/vue/24/solid'
import {ReceiptPercentIcon, HomeIcon, ChartPieIcon, CubeIcon, UserCircleIcon, BuildingStorefrontIcon, QuestionMarkCircleIcon, SunIcon as SunOutlineIcon, MoonIcon as MoonOutlineIcon} from '@heroicons/vue/24/outline'

const layout = useLayoutStore()


const navigation = ref<NavigationType[]>([
  {
    icon: HomeIcon,
    label: 'Home',
    href: '#'
  },
  {
    icon: CubeIcon,
    label: 'Products',
    href: '#',
    actions: [
      {
        icon: PlusSmallIcon, onClick: () => {
          alert('Plus Action')
        }
      }
    ],
    children: []
  },
  {
    icon: UserCircleIcon,
    label: 'Customers',
    href: '#',
    children: [
      {label: 'Overview', href: '/customers/overview'},
      {label: 'Customer list', href: '/'},
    ]
  },
  {
    icon: BuildingStorefrontIcon,
    label: 'Shop',
    href: '#'
  },
  {
    icon: ChartPieIcon,
    label: 'Income',
    href: '#',
    children: []
  },
  {
    icon: ReceiptPercentIcon,
    label: 'Promote',
    href: '#'
  },
])
</script>
<template>
  <div class="lg:w-96 bg-white dark:bg-gray-900 rounded-2xl shadow-md flex flex-col">
    <div class="py-5 px-4 flex items-center gap-2 text-gray-700 dark:text-gray-300">
      <Square3Stack3DIcon class="w-10 h-10 "/>
      <span class="font-bold text-3xl">
      Chat.io
      </span>
    </div>
    <nav class="flex-auto">
      <ul>
        <li v-for="(link, index) in navigation" :key="index" class="block text-sm font-medium text-gray-500 group">
          <NuxtLink :href="link.href" class="flex items-center justify-between py-3 px-3">
            <span class="inline-flex gap-3 group-hover:text-gray-800 dark:group-hover:text-gray-200">
              <Component :is="link.icon" class="h-5 w-5"/>
              {{ link.label }}
            </span>
            <span class="flex items-center gap-2">
              <button class="rounded-full border dark:border-gray-700 dark:text-gray-600 dark:hover:text-gray-400 dark:hover:bg-gray-700 hover:border-gray-300 hover:text-gray-800 hover:bg-gray-200 transition-colors ease-in-out duration-300" v-for="(action, index) in link.actions" @click="action.onClick" :key="index">
                <Component :is="action.icon" class="w-5 h-5"/>
              </button>
              <ChevronUpIcon class="h-4 w-4 text-gray-600 group-hover:text-gray-800 dark:group-hover:text-gray-200" v-if="link.children?.length > 0"/>
              <!-- Hack to match the design -->
              <ChevronDownIcon class="h-4 w-4 text-gray-600 group-hover:text-gray-800 dark:group-hover:text-gray-200" v-else-if="link.children?.length >= 0"/>
            </span>
          </NuxtLink>
          <!--          before:content-[''] before:absolute before:h-2/3 before:border-->
          <ul class="pl-8 pr-4 space-y-3 relative " v-if="link.children?.length >= 0">
            <li class="relative after:content-[''] after:absolute after:w-4 after:h-[155%] after:border-l after:border-b dark:after:border-gray-800 after:-left-3 after:-z-0 first:after:h-[80%] first:after:-top-2.5 after:-top-9 after:rounded-bl-md" v-for="(child, index) in link.children" :key="index">
              <NuxtLink exactActiveClass="bg-gray-200 dark:bg-gray-800 shadow-md dark:shadow-inner dark:shadow-gray-700 z-10 rounded-md text-gray-950 dark:text-gray-300" :href="child.href" class="py-2 px-3 inline-block w-full">{{ child.label }}</NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <div class="flex-none p-5 ">
      <div class="border-t dark:border-gray-800 p-3"></div>
      <div class="flex w-full items-center justify-between font-semibold">
        <span class="text-xs text-gray-500 inline-flex items-center">
            <QuestionMarkCircleIcon class="h-5 w-5 mr-1"/>
            Help &amp; getting started
        </span>
        <span class="px-1.5 py-0.5 text-sm font-semibold bg-purple-200 text-purple-800 rounded-md leading-tight">8</span>
      </div>

      <!-- Theme Switcher -->
      <div class="rounded-full flex bg-gray-100 dark:bg-gray-950 mt-4 p-1 font-semibold">

        <ThemeButton @click="layout.toggleTheme('light')" :class="[layout.isLight ? 'bg-white shadow': 'text-gray-500']">
          <SunOutlineIcon class="h-4 w-4" v-if="layout.isDark"/>
          <SunSolidIcon class="h-4 w-4" v-else/>
          Light
        </ThemeButton>

        <ThemeButton @click="layout.toggleTheme('dark')" :class="[layout.isDark ? 'dark:bg-gray-800 shadow-inner shadow-gray-700 dark:text-white': 'text-gray-500']">
          <MoonOutlineIcon class="h-4 w-4" v-if="layout.isLight"/>
          <MoonSolidIcon class="h-4 w-4" v-else/>
          Dark
        </ThemeButton>
      </div>
    </div>
  </div>
</template>
