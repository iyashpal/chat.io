import Messages from '~/database/messages.json'
import {writeFileSync} from "node:fs";
import {DateTime} from "luxon";

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    let message = {
        id: Messages.length + 1,
        user_id: body.from,
        to_user_id: body.to,
        message: body.message,
        created_at: DateTime.now().toString()
    }

    if (process.env.NODE_ENV === 'development') {
        writeFileSync('database/messages.json', JSON.stringify([...Messages, message]))
    }

    return message
})