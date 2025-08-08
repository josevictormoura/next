'use client';

import Header from '../components/header';
import React from 'react';

interface PostsProps {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface Response {
  posts: PostsProps[];
}

export default function Client() {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function fecthPosts() {
      try {
        setLoading(true);
        const responsePosts = await fetch('https://dummyjson.com/posts');
        if (!responsePosts.ok) {
          throw new Error('Esso na requisicao');
        }
        const data = await responsePosts.json();
        setPosts(data.posts);
      } catch (error) {
        console.log('Erro ao buscar os posts', error);
      } finally {
        setLoading(false);
      }
    }
    fecthPosts();
  }, []);

  return (
    <div className="w-full">
      <Header />
      <div className="flex flex-col gap-4 mx-2 text-white">
        <h1 className="text-2xl text-center my-5">Pagina client</h1>
        {loading ? (
          <p>Buscando posts...</p>
        ) : (
          <div>
            {posts.map(({ id, title, body }) => (
              <div
                key={id}
                className="bg-gray-200 p-4 rounded-md *:text-black mb-2"
              >
                <h2>{title}</h2>
                <p>{body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
