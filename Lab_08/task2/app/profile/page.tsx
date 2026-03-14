import Link from "next/link";
import { getAuthorById, getPostsByAuthor } from "@/lib/api";

export const dynamic = 'force-dynamic'; // Force SSR

export default function ProfilePage() {
  // Simulate getting user ID from request/session
  const userId = "1"; // In real app, from auth
  const author = getAuthorById(userId);
  const posts = getPostsByAuthor(userId);

  if (!author) {
    return <div>User not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Home
        </Link>
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h1 className="text-3xl font-bold mb-4">{author.name}</h1>
          <p className="text-gray-700 mb-4">{author.bio}</p>
          <img src={author.avatar} alt={author.name} className="w-24 h-24 rounded-full" />
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">My Posts</h2>
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="border-b pb-4">
                <h3 className="text-xl font-semibold mb-2">
                  <Link href={`/posts/${post.id}`} className="text-blue-600 hover:underline">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600">{post.date} • {post.readTime} min read</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}