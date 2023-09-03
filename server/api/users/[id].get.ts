import {User} from "~/types";
import {readFile} from "node:fs/promises";

export default defineEventHandler(async event => {
    const id = getRouterParam(event, 'id')

    const Users = await readFile('database/users.json', {encoding: 'utf8'})

    const user = JSON.parse(Users).find((user: User) => user.id === Number(id))

    if (user) {
        return user
    }

    throw createError({status: 404, statusMessage: 'User not found.'})

})