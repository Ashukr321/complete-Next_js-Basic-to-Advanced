import React from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";

// Define the structure of a single post
type Post = {
  id: number;
  title: string;
  // Include other fields as necessary
};

// Define the props returned by getStaticProps
type Props = {
  posts: Post[];
};

// The page component receives props typed using InferGetStaticPropsType
const Page = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="h-[100px] flex justify-center items-center bg-black p-2">
      <h1
        className="text-black cursor-pointer hover:text-white hover:border-none
         border p-2 rounded w-fit mx-auto px-10 py-2 bg-blue-400 text-center text-3xl"
      >
        SSG: Static Site Generation!
      </h1>

      {/* Corrected the map function to return JSX */}
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.id}</p>
          <p>{post.title}</p>
        </div>
      ))}
    </div>
  );
};

// getStaticProps fetches data at build time
export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default Page;
