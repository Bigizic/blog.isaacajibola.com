import Link from "next/link";
import { apiGet, type PostSummary } from "@/lib/api";

export default async function HomePage() {
  const posts = await apiGet<PostSummary[]>("/blog/posts");

  return (
    <section>
      {posts.length === 0 ? (
        <p className="muted">No posts yet.</p>
      ) : (
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link className="post-link" href={`/${post.slug}`}>
                {post.coverImageUrl ? (
                  <img
                    src={post.coverImageUrl}
                    alt=""
                    className="post-cover"
                  />
                ) : null}
                <h2>{post.title}</h2>
                {post.publishedAt ? (
                  <p className="post-meta">
                    {new Date(post.publishedAt).toLocaleDateString("en", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                ) : null}
                {post.excerpt ? <p className="muted">{post.excerpt}</p> : null}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
