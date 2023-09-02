import {User} from "~/types";
import {defineStore} from "pinia";
import {useAuthStore} from "~/stores/index";

const useUserStore = defineStore('user', () => {

    const auth = useAuthStore()

    /**
     * Stores the request response data for users.
     */
    const users = ref<User[] | null>()


    /**
     * Get the list of users.
     */
    const USERS = computed(() => users.value ?? [])

    const USERS_EXCEPT_ME = computed(() => USERS.value.filter(_user => _user.id !== auth.USER.id))

    /**
     * Mutate the users value.
     *
     * @param data
     */
    function commitUsers(data: User[]) {
        users.value = data
    }

    /**
     * Synchronize users from datasets.
     *
     * @returns void
     */
    function syncUsers(): void {
        $fetch('/api/users')
            .then((data) => commitUsers(data ?? []))
            .catch((error) => error.data)

    }

    return {USERS, USERS_EXCEPT_ME, commitUsers, syncUsers}
})


export default useUserStore