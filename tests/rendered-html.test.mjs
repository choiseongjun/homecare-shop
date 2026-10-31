import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${path}`, {headers:{accept:"text/html"}}), {ASSETS:{fetch:async()=>new Response("Not found",{status:404})}}, {waitUntil(){},passThroughOnException(){}});
}

test("server-renders the finished Airpick home page", async () => {
  const response=await render();
  assert.equal(response.status,200);
  assert.match(response.headers.get("content-type")??"",/^text\/html\b/i);
  const html=await response.text();
  assert.match(html,/<title>에어픽 \| 아파트 단지별 홈케어·시공 표준 단가<\/title>/);
  assert.match(html,/단지별 표준 단가 보기/);
  assert.doesNotMatch(html,/codex-preview|Your site is taking shape|Building your site/i);
});

test("renders apartment price pages with unique SEO metadata and structured data", async () => {
  const response=await render("/apt/gwanak-dreamtown/33/aircon");
  assert.equal(response.status,200);
  const html=await response.text();
  assert.match(html,/<title>관악드림타운 33평 에어컨 비용·예상 견적 \| 에어픽<\/title>/);
  assert.match(html,/rel="canonical" href="https:\/\/airpick-seoul\.junis2702\.chatgpt\.site\/apt\/gwanak-dreamtown\/33\/aircon"/);
  assert.match(html,/FAQPage/);
  assert.match(html,/AggregateOffer/);
  assert.match(html,/BreadcrumbList/);
});
