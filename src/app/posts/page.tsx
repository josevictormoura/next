//SERVER COMPONENTES

import Header from '../components/header';

interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface Response {
  posts: PostProps[];
}

export default async function PostPage() {
  const response = await fetch('https://dummyjson.com/posts');
  const data: Response = await response.json();

  async function handleSubmit(formData: FormData) {
    'use server';
    const userId = formData.get('userId');
    const response = await fetch(`https://dummyjson.com/posts/user/${userId}`);
    const dataUserId = await response.json();
    console.log(dataUserId);
  }

  return (
    <div className="w-full">
      <Header />
      <div className="flex flex-col gap-4 mx-2 text-white">
        <h1 className="text-2xl text-center my-5">Todos os Posts</h1>
        <form action={handleSubmit}>
          <input
            className="bg-white text-black py-1 px-2 rounded mr-2"
            type="text"
            id="userId"
            name="userId"
            placeholder="Id usuario"
          />
          <button className="bg-sky-400 py-1 px-2 rounded">
            Buscar usuario
          </button>
        </form>
        {data.posts.map(({ id, title, body }) => (
          <div key={id} className="bg-gray-200 p-4 rounded-md *:text-black">
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
