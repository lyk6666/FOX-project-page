"use client";

import { useState } from "react";

const citation = `@misc{li2026fox,
  title  = {FOX: Visual Exploration of Data Fact Outliers},
  author = {Li, Yikai and Wang, Yong},
  year   = {2026},
  note   = {Under revision. Submitted to IEEE VIS 2026}
}`;

export function CitationBlock() {
  const [copied, setCopied] = useState(false);

  async function copyCitation() {
    await navigator.clipboard.writeText(citation);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="citation-block">
      <pre>
        <code>{citation}</code>
      </pre>
      <button type="button" onClick={copyCitation}>
        {copied ? "Copied" : "Copy BibTeX"}
      </button>
    </div>
  );
}
