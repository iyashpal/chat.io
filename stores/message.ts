import {Message, User} from "~/types";
import {defineStore} from "pinia";
import {useAuthStore} from "~/stores/index";

const useMessageStore = defineStore('message', () => {
    const auth = useAuthStore()

    const user = ref<User>()

    const messages = ref<Message[]>([])

    const enableWriteMessage = ref(false)

    /**
     * Get the room user.
     */
    const USER = computed(() => user.value ?? {} as User)

    const MESSAGES = computed(() => messages.value ?? [])

    const IS_WRITE_MESSAGE_ENABLED = computed(() => enableWriteMessage.value)

    /**
     * Check if any room is selected or not.
     */
    const IS_ROOM_SELECTED = computed(() => !!user.value?.id)

    /**
     * Activate the user room.
     *
     * @param _user
     */
    function roomFor(_user: User) {
        user.value = _user
    }

    /**
     * Add the message to dataset.
     *
     * @param message
     */
    function pushMessage(message: string) {
        $fetch('/api/messages', {
            method: 'POST', body: JSON.stringify({
                to: USER.value.id,
                from: auth.USER.id,
                message: message
            })
        }).then((data) => {
            toggleMessageWrite()
            messages.value = [...messages.value, data as Message]
        })
    }

    /**
     * Fetch the room messages.
     *
     * @returns void
     */
    function syncMessages(): void {
        $fetch('/api/messages', {query: {from: auth.USER.id, to: USER.value.id}}).then((data: Message[]) => {
            messages.value = data
        })
    }

    /**
     * Toggle the message input
     */
    function toggleMessageWrite() {
        enableWriteMessage.value = !enableWriteMessage.value
    }

    return {USER, MESSAGES, IS_WRITE_MESSAGE_ENABLED, IS_ROOM_SELECTED, roomFor, pushMessage, toggleMessageWrite, syncMessages}
})

export default useMessageStore