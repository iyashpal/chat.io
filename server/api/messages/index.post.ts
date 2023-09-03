import Messages from '~/database/messages.json'
import {writeFile} from "node:fs/promises";
import {DateTime} from "luxon";

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    let Message = {
        id: Messages.length + 1,
        user_id: body.from,
        to_user_id: body.to,
        message: body.message,
        created_at: DateTime.now().toString()
    }

    if (process.env.NODE_ENV === 'development') {
        await writeFile('database/messages.json', JSON.stringify([...Messages, Message]))
    }

    return Message
})