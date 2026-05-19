# blog.isaacajibola.com (frontend only)

Public reader for the personal blog. The backend has been **migrated** to the
unified API at [`api.isaacajibola.com`](../api.isaacajibola.com/) — all
authoring is now done from [`admin.isaacajibola.com`](../admin.isaacajibola.com/)
using a Medium-style WYSIWYG editor (no markdown, no Telegram).

## Frontend

```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev
```

Vercel env:

```env
NEXT_PUBLIC_API_URL=https://api.isaacajibola.com
```

It calls:

- `GET {NEXT_PUBLIC_API_URL}/blog/posts`        — list of published posts
- `GET {NEXT_PUBLIC_API_URL}/blog/posts/{slug}` — single post (sanitized HTML)

That's it.
