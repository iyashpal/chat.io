import {Message} from "~/types";
import {readFile} from "node:fs/promises";

export default defineEventHandler(async (event) => {
    const query = getQuery(event)

    const Messages = await readFile('database/messages.json', {encoding: 'utf8'})

    if (query.from && query.to) {
        return JSON.parse(Messages).filter((message: Message) => {
            return [message.user_id, message.to_user_id].includes(Number(query.from)) && [message.user_id, message.to_user_id].includes(Number(query.to))
        })
    }

    return Messages
})