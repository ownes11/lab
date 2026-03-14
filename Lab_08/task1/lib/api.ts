import { Post, Author } from "@/types";

export const authors: Author[] = [
  { id: "1", name: "John Doe", bio: "Tech writer", avatar: "/avatars/john.jpg" },
  { id: "2", name: "Jane Smith", bio: "React expert", avatar: "/avatars/jane.jpg" },
];

export const posts: Post[] = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    content: "Next.js is a powerful React framework that enables server-side rendering and static site generation...",
    author: "John Doe",
    date: "2024-03-01",
    tags: ["Next.js", "React", "SSR"],
    readTime: 5,
  },
  {
    id: "2",
    title: "Understanding SSR vs SSG",
    content: "Server-Side Rendering (SSR) and Static Site Generation (SSG) are two key concepts in modern web development...",
    author: "Jane Smith",
    date: "2024-03-05",
    tags: ["SSR", "SSG", "Performance"],
    readTime: 7,
  },
  {
    id: "3",
    title: "Building Dynamic Web Apps",
    content: "Learn how to build dynamic applications with React and Next.js...",
    author: "John Doe",
    date: "2024-03-10",
    tags: ["React", "Dynamic", "Web Apps"],
    readTime: 6,
  },
];

export function getAllPosts(): Post[] {
  return posts;
}

export function getPostById(id: string): Post | undefined {
  return posts.find(post => post.id === id);
}

export function getAuthorById(id: string): Author | undefined {
  return authors.find(author => author.id === id);
}

export function getPostsByAuthor(authorId: string): Post[] {
  return posts.filter(post => post.author === authors.find(a => a.id === authorId)?.name);
}