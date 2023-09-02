import Users from '@/database/users.json'

export default defineEventHandler(async event => {

    const [user] = Users
    
    return user
})