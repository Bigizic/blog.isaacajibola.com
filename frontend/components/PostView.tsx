import type { Post } from "@/lib/api";

export function PostView({ post }: { post: Post }) {
  return (
    <article className="article">
      {post.coverImageUrl ? (
        <img
          src={post.coverImageUrl}
          alt=""
          className="article-cover"
        />
      ) : null}
      <h1>{post.title}</h1>
      {post.subtitle ? <p className="article-subtitle">{post.subtitle}</p> : null}
      <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
}
