import {defineStore} from "pinia";
import {ThemeMode} from "~/types";


const useLayoutStore = defineStore('layout', () => {
    const theme = ref<ThemeMode>('light')

    /**
     * Check if the theme is dark.
     */
    const isDark = computed((): boolean => theme.value === 'dark')

    /**
     * Check if the theme is light.
     */
    const isLight = computed((): boolean => theme.value === 'light')


    /**
     * Toggle OR set the color theme.
     *
     * @param selected Theme Mode Type
     */
    function toggleTheme(selected?: ThemeMode) {
        if (selected === undefined) {
            theme.value = theme.value === 'dark' ? 'light' : 'dark'
            return
        }

        theme.value = selected
    }

    return {theme, isLight, isDark, toggleTheme}
})

export default useLayoutStore
