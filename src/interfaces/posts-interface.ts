export interface IPostsResponse{
    data: IPostsData[]
    totalCount: number,
	totalPages: number,
	page: number,
	limit: number
}

export interface IPostsData{
    id: number,
    title: string,
    content: string,
    createdAt: string
    author:{
        name: string
    }
}