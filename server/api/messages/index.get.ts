import {Message} from "~/types";
import Messages from '@/database/messages.json'

export default defineEventHandler(async (event) => {
    const query = getQuery(event)


    if (query.from && query.to) {
        return Messages.filter((message: Message) => {
            return [message.user_id, message.to_user_id].includes(Number(query.from)) && [message.user_id, message.to_user_id].includes(Number(query.to))
        })
    }

    return Messages
})