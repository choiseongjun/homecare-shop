import { cases, posts, SITE } from "@/lib/site";

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value.replace(/[<>&'"]/g, (character) => ({
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "'": "&apos;",
    '"': "&quot;",
  })[character] || character);
}

export function GET() {
  const items = [
    ...posts.map((post) => ({
      title: post.title,
      description: post.excerpt,
      url: `${SITE.url}/blog/${post.slug}`,
      date: new Date(`${post.date.replaceAll(". ", "-").replace(".", "")}T00:00:00+09:00`),
    })),
    ...cases.map((item) => ({
      title: `${item.region} ${item.title}`,
      description: `${item.summary} · 예상 비용 ${item.total.toLocaleString("ko-KR")}원`,
      url: `${SITE.url}/cases/${item.slug}`,
      date: new Date("2026-08-01T00:00:00+09:00"),
    })),
  ].sort((a, b) => b.date.getTime() - a.date.getTime());

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(SITE.name)} 홈케어 단가 가이드</title>
    <link>${SITE.url}</link>
    <description>${escapeXml(SITE.description)}</description>
    <language>ko-KR</language>
    ${items.map((item) => `<item>
      <title>${escapeXml(item.title)}</title>
      <link>${item.url}</link>
      <guid isPermaLink="true">${item.url}</guid>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${item.date.toUTCString()}</pubDate>
    </item>`).join("\n    ")}
  </channel>
</rss>`;

  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
