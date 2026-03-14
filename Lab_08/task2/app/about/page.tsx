import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Home
        </Link>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6">About This Blog</h1>
          <p className="text-gray-700 mb-4">
            This blog demonstrates Server-Side Rendering (SSR) and Static Site Generation (SSG) using Next.js.
          </p>
          <p className="text-gray-700 mb-4">
            The home page is statically generated at build time (SSG), individual posts are also SSG with dynamic routes,
            the profile page uses SSR for dynamic content per request, and this about page is purely static SSG.
          </p>
          <p className="text-gray-700">
            Built with Next.js 14, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
}