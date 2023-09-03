import {readFile} from "node:fs/promises";

export default defineEventHandler(async (event) => {
    return await readFile('database/users.json', {encoding: 'utf8'})
})