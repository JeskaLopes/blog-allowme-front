import * as S from "./styles";
import withLayout from "../../layout";
import DropList from "../../components/DropList";
import NewsCard from "../../components/NewsCard";
import PostCard from "../../components/PostCard";
import { useEffect, useState } from "react";
import { IPostsData, IPostsResponse } from "../../interfaces/posts-interface";
import { IAuthorsResponse } from "../../interfaces/authors-interface";
import { postsService } from "../../service/api/posts.service";
import { authorsService } from "../../service/api/author.service";

type Option = {
  name: string;
  id: string;
};

const dateOptions: Option[] = [
  { name: "Mais recentes", id: "DESC" },
  { name: "Mais antigos", id: "ASC" },
];

function Home() {
  const [posts, setPosts] = useState<IPostsResponse>();
  const [latestPosts, setLatestPosts] = useState<IPostsResponse>();
  const [authors, setAuthors] = useState<IAuthorsResponse>();

  const handleSelectAuthor = async (authorId: string | number) => {
    if(authorId == "all"){
      return getPosts()
    }
    const { data } = await postsService.getPostsByAuthor(authorId);
    setPosts(data);
  };

  const handleSelectDate = async (order: string | number) => {
    const { data } = await postsService.getAllPosts(order);
    setPosts(data);
  };    

  const getPosts = async () => {
    const { data } = await postsService.getAllPosts();
    setPosts(data);
    setLatestPosts(data);
  };


  const getAuthors = async () => {
    const { data } = await authorsService.getAllAuthors();
    setAuthors(data);
  };

  useEffect(() => {
    getPosts();
    getAuthors();
  }, []);

  return (
    <>
      <S.FilterContainer>
        <DropList
          options={authors?.data ? authors.data : []}
          includeAllOption={true}
          labelForAll="Todos os autores"
          onSelect={handleSelectAuthor}
          filterTitle="Filtrar por autor"
        />
        <DropList
          options={dateOptions}
          onSelect={handleSelectDate}
          includeAllOption={false}
          filterTitle="Ordenar por"
        />
      </S.FilterContainer>

      <S.ArticleContainer>
        <S.Articles>
          {posts?.data.length &&
            posts.data.map((post: IPostsData) => (
              <PostCard
                key={post.id}
                author={post.author.name}
                date={post.createdAt}
                title={post.title}
                description={post.content}
              />
            ))}
        </S.Articles>
        <S.LastNews>
          {latestPosts?.data.length && <NewsCard lastPosts={latestPosts.data} />}
        </S.LastNews>
      </S.ArticleContainer>
    </>
  );
}

// HOC - Componente de alta prioridade - Delegação de componente
const HomeWithLayout = withLayout(Home);
export default HomeWithLayout;
