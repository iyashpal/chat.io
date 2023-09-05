import {User} from "~/types";
import Users from '@/database/users.json'

export default defineEventHandler(async event => {
    const id = getRouterParam(event, 'id')

    const user = Users.find((user: User) => user.id === Number(id))

    if (user) {
        return user
    }

    throw createError({status: 404, statusMessage: 'User not found.'})

})