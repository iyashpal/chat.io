import {User} from "~/types";
import {defineStore} from "pinia";

const useAuthStore = defineStore('auth', () => {
    /**
     * Stores the auth request response data
     */
    const user = ref<User>()

    /**
     * Get the authenticated user.
     */
    const USER = computed(() => user.value ?? {} as User)

    /**
     * Mutate the auth user state.
     *
     * @param data
     */
    function commitAuthUser(data: User) {
        user.value = data
    }

    /**
     * Authenticate or pull the user data.
     *
     * @returns void
     */
    function authenticate() {
        $fetch('/api/auth').then((data: User) => {
            commitAuthUser(data ?? {})
        })
    }

    return {USER, commitAuthUser, authenticate}
})

export default useAuthStore