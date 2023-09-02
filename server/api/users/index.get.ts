import Users from '~/database/users.json'

export default defineEventHandler(async event => {
    return Users
})