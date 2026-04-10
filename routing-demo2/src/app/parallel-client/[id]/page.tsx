
import UserProfile from "@/components/parallel-test"


type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Album = {
  userId: number;
  id: number;
  title: string;
};


async function getUserPosts(id:string)
{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    
    return  response.json();

}

async function getUserAlbum(id:string) {
     const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`);

    return response.json();
}



export default async function Page({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  const postData = getUserPosts(id);
  const albumData = getUserAlbum(id);

  const [posts, albums]: [Post[], Album[]] = await Promise.all([
    postData,
    albumData,
  ]);
console.log("POSTS:", posts);
console.log("ALBUMS:", albums);

  return <UserProfile posts={posts} albums={albums} />;
}