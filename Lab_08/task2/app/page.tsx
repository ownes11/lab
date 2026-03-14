import Link from "next/link";
import { getAllPosts } from "@/lib/api";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">My Blog</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">
                <Link href={`/posts/${post.id}`} className="text-blue-600 hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-2">By {post.author} on {post.date}</p>
              <p className="text-gray-700 mb-4">{post.content.substring(0, 100)}...</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-500">{post.readTime} min read</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/about" className="text-blue-600 hover:underline mr-4">About</Link>
          <Link href="/profile" className="text-blue-600 hover:underline">Profile</Link>
        </div>
      </div>
    </div>
  );
}
