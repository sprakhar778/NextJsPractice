"use client";

// 🧩 Post Card
const PostCard = ({ post }) => {
  if (!post) return null;

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg rounded-xl p-6 text-white">
      <h3 className="text-lg font-bold mb-3">{post.title}</h3>
      <p className="text-white/80">{post.body}</p>
    </div>
  );
};

// 🧩 Album Card
const AlbumCard = ({ album }) => {
  if (!album) return null;

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg rounded-xl p-6 text-white">
      {album.title}
    </div>
  );
};

// 🧩 Lists
const PostList = ({ posts }) => {
  if (!posts?.length) return <p className="text-white">No posts</p>;

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

const AlbumList = ({ albums }) => {
  if (!albums?.length) return <p className="text-white">No albums</p>;

  return (
    <div className="space-y-4">
      {albums.map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </div>
  );
};

// 🧩 Main Component
export default function UserProfile({ posts, albums }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-8 text-white">
          User Profile
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">Posts</h2>
            <PostList posts={posts} />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">Albums</h2>
            <AlbumList albums={albums} />
          </div>
        </div>
      </div>
    </div>
  );
}