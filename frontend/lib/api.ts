export type PostSummary = {
  id: string;
  title: string;
  subtitle?: string | null;
  slug: string;
  excerpt?: string | null;
  coverImageUrl?: string | null;
  publishedAt?: string;
};

export type Post = PostSummary & {
  html: string;
};

const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

export async function apiGet<T>(
  path: string,
  options: { revalidate?: number | false } = {},
): Promise<T> {
  const response = await fetch(
    `${apiUrl}${path}`,
    options.revalidate === false
      ? { cache: "no-store" }
      : { next: { revalidate: options.revalidate ?? 30 } },
  );
  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }
  return response.json() as Promise<T>;
}
