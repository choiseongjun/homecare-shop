import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import test, { after, before } from "node:test";
import { fileURLToPath } from "node:url";

const port = 3199;
const baseUrl = `http://127.0.0.1:${port}`;
let server;

async function waitForServer() {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      const response = await fetch(baseUrl);
      if (response.ok) return;
    } catch {
      // The production server may still be starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error("Next.js production server did not start in time");
}

before(async () => {
  server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", String(port)], {
    cwd: fileURLToPath(new URL("..", import.meta.url)),
    stdio: "ignore",
    windowsHide: true,
  });
  await waitForServer();
});

after(() => {
  server?.kill();
});

async function render(path = "/") {
  return fetch(`${baseUrl}${path}`, { headers: { accept: "text/html" } });
}

test("server-renders the finished Airpick home page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<title>홈프라이스 \| 아파트 단지별 홈케어·시공 표준 단가<\/title>/);
  assert.match(html, /우리 아파트 표준 단가 보기/);
  assert.match(html, /현장 추가금 없는 견적 문의하기/);
  assert.match(html, /커튼 레일·암막 커튼 설치/);
  assert.match(html, /주방 수전 교체와 배관 점검/);
  assert.match(html, /curtain-rail-install-v1\.webp/);
  assert.match(html, /kitchen-faucet-repair-v1\.webp/);
  assert.doesNotMatch(html, /기술자 찾기|OPEN REGISTRATION|프로필 비교/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|Building your site/i);
});

test("redirects the technician directory to the estimate intake", async () => {
  const response = await fetch(`${baseUrl}/technicians`, { redirect: "manual" });
  assert.equal(response.status, 307);
  assert.equal(response.headers.get("location"), "/estimate");
});

test("renders price guides for all homecare categories", async () => {
  const response = await render("/price");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /id="aircon"/);
  assert.match(html, /id="curtain"/);
  assert.match(html, /id="repair"/);
  assert.match(html, /커튼 레일 설치/);
  assert.match(html, /방충망 교체/);
});

test("renders apartment price pages with unique SEO metadata and structured data", async () => {
  const response = await render("/apt/gwanak-dreamtown/33/aircon");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>관악드림타운 33평 에어컨 비용·예상 견적 \| 홈프라이스<\/title>/);
  assert.match(html, /rel="canonical" href="https:\/\//);
  assert.match(html, /FAQPage/);
  assert.match(html, /AggregateOffer/);
  assert.match(html, /BreadcrumbList/);
});
