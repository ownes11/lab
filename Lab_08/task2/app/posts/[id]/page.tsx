import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostById } from "@/lib/api";

interface PageProps {
  params: {
    id: string;
  };
}

export default function PostPage({ params }: PageProps) {
  const post = getPostById(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Home
        </Link>
        <article className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-600 mb-4">By {post.author} on {post.date}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span key={tag} className="bg-blue-100 text-blue-800 px-3 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-500 mb-6">{post.readTime} min read</p>
          <div className="prose max-w-none">
            <p>{post.content}</p>
          </div>
        </article>
      </div>
    </div>
  );
}

// For SSG, generate static params
export async function generateStaticParams() {
  // In a real app, fetch from API
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}