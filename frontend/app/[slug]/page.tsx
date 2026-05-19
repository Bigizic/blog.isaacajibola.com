import { notFound } from "next/navigation";
import { PostView } from "@/components/PostView";
import { apiGet, type Post } from "@/lib/api";

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  try {
    const post = await apiGet<Post>(`/blog/posts/${slug}`);
    return <PostView post={post} />;
  } catch {
    notFound();
  }
}
