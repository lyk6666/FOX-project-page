import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the FOX project page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>FOX.*Visual Exploration of Data Fact Outliers<\/title>/i);
  assert.match(html, /Abstract/);
  assert.match(html, /Data Fact Processing/);
  assert.match(html, /Data fact extraction/);
  assert.match(html, /Fact grouping/);
  assert.match(html, /Similarity calculation/);
  assert.match(html, /Outlier score/);
  assert.match(html, /Usage Scenarios/);
  assert.doesNotMatch(html, /Interview Results/);
  assert.doesNotMatch(html, /Future Directions/);
  assert.match(html, /FOX-demo\.mp4/);
  assert.match(html, /FOX-paper\.pdf/);
  assert.match(html, /github\.com\/lyk6666\/FOX/);
  assert.match(html, /kaggle\.com\/datasets\/yikai6\/supermarket-resale/);
  assert.match(html, /kaggle\.com\/datasets\/nelgiriyewithana\/australian-vehicle-prices/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);

  const sectionOrder = [
    "Abstract",
    "Video",
    "Data Fact Processing",
    "Usage Scenarios",
    "Citation",
  ].map((heading) => html.indexOf(`>${heading}<`));
  assert.ok(sectionOrder.every((index) => index >= 0));
  assert.deepEqual(sectionOrder, [...sectionOrder].sort((a, b) => a - b));
});

test("removes starter metadata and dependencies", async () => {
  const [page, layout, styles, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.match(layout, /og\.png/);
  assert.match(page, /aria-label|alt=/);
  assert.match(styles, /prefers-reduced-motion/);
});
