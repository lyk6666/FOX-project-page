"use client";

import { useState } from "react";

const citation = `@misc{li2026fox,
  title         = {{FOX}: Visual Exploration of Data Fact Outliers},
  author        = {Li, Yikai and Wang, Yong},
  year          = {2026},
  eprint        = {2608.08671},
  archivePrefix = {arXiv},
  primaryClass  = {cs.HC},
  doi           = {10.48550/arXiv.2608.08671},
  url           = {https://arxiv.org/abs/2608.08671},
  note          = {Accepted at IEEE VIS 2026. To appear in IEEE Transactions on Visualization and Computer Graphics}
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
