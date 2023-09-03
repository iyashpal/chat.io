import {readFile} from "node:fs/promises";

export default defineEventHandler(async event => {

    const Users = await readFile('database/users.json', {encoding: 'utf8'})

    const [user] = JSON.parse(Users)
    
    return user
})