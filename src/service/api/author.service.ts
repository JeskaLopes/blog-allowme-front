import { instance } from "../http";

export const authorsService = {
    getAllAuthors: async () => await instance.get('/authors') 
}

