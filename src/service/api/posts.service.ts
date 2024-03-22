import { instance } from "../http";

export const postsService = {
  getAllPosts: async (order?:string | number) => await instance.get(`posts`, { params: { order } }),
  getPostsByAuthor: async (authorId: number | string) =>
    await instance.get(`posts/author/${authorId}`),
};
