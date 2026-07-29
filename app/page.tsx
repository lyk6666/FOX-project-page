import { CitationBlock } from "./CitationBlock";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${basePath}${path}`;
const arxivUrl: string | null = null;

const heroDots = [
  [8, 20, 6], [16, 39, 5], [20, 70, 7], [28, 18, 4], [31, 48, 6],
  [38, 78, 5], [43, 30, 7], [48, 59, 4], [55, 16, 5], [60, 43, 6],
  [67, 74, 7], [72, 25, 5], [77, 52, 4], [84, 17, 7], [89, 67, 5],
  [12, 83, 4], [24, 55, 5], [35, 12, 4], [50, 85, 6], [64, 10, 4],
  [75, 88, 5], [91, 36, 6], [6, 54, 4], [96, 83, 4],
] as const;

const steps = [
  {
    number: "01",
    title: "Configure",
    text: "Choose subspace, ordinal, and measure attributes for a tabular dataset.",
  },
  {
    number: "02",
    title: "Extract",
    text: "Systematically mine facts such as trends, correlations, dominance, and skewness.",
  },
  {
    number: "03",
    title: "Group & score",
    text: "Compare facts only within consistent analytical scopes and quantify outlierness.",
  },
  {
    number: "04",
    title: "Explore",
    text: "Move from a global matrix to clusters, individual facts, flows, and explanations.",
  },
] as const;

const views = [
  ["Overview Matrix", "Find analytical scopes with unusual fact populations."],
  ["Cluster Map", "See local structure and labels in an augmented projection."],
  ["Fact Detail", "Inspect the chart, filters, type, focus, and outlier score."],
  ["Fact Flow", "Trace outlier status through fact types and focuses."],
  ["Cluster Insights", "Read concise, data-grounded summaries of each cluster."],
] as const;

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="FOX home">
          <span className="wordmark-dot" />
          FOX
        </a>
        <div className="nav-links">
          <a href="#approach">Approach</a>
          <a href="#system">System</a>
          <a href="#cases">Cases</a>
          <a href="#video">Video</a>
          <a href="#resources">Resources</a>
        </div>
        <a
          className="nav-code"
          href="https://github.com/lyk6666/FOX"
          target="_blank"
          rel="noreferrer"
        >
          View code <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <header className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-dots" aria-hidden="true">
          {heroDots.map(([x, y, size], index) => (
            <span
              key={`${x}-${y}`}
              className="hero-dot"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: `${size}px`,
                height: `${size}px`,
                animationDelay: `${index * 85}ms`,
              }}
            />
          ))}
          <span className="hero-outlier" />
          <span className="cluster-contour contour-one" />
          <span className="cluster-contour contour-two" />
        </div>

        <div className="hero-content">
          <div className="eyebrow">
            <span>Research project</span>
            <span className="eyebrow-separator">/</span>
            <span>Visual analytics</span>
          </div>
          <h1>
            Find the facts
            <br />
            that <em>do not fit.</em>
          </h1>
          <p className="hero-summary">
            FOX organizes comparable data facts and combines distribution- and
            pattern-based scoring to reveal anomalous insights hidden during
            exploratory data analysis.
          </p>
          <div className="hero-actions" aria-label="Project resources">
            <a className="button button-primary" href={asset("/assets/FOX-paper.pdf")}>
              Read the paper
            </a>
            <a className="button button-secondary" href="#video">
              Watch the demo
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/lyk6666/FOX"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="publication-line">
            <span className="status-pulse" />
            Under revision · Submitted to IEEE VIS 2026
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-topline">
            <span>FOX interface</span>
            <span>Overview → detail</span>
          </div>
          <img
            src={asset("/assets/teaser.png")}
            alt="The FOX interface with an overview matrix, cluster map, fact detail, fact flow, and cluster insight views."
          />
          <div className="hero-card-caption">
            <span className="caption-marker" />
            Select an outlier group, inspect its structure, and explain the
            facts that depart from the majority.
          </div>
        </div>

        <div className="hero-meta">
          <p>
            <a href="https://liyikai.com/" target="_blank" rel="noreferrer">
              Yikai Li
            </a>
            <span> · </span>
            <a href="https://yong-wang.org/" target="_blank" rel="noreferrer">
              Yong Wang
            </a>
          </p>
          <p>Nanyang Technological University</p>
        </div>
      </header>

      <section className="section problem-section" aria-labelledby="problem-title">
        <div className="section-kicker">The idea</div>
        <div className="section-heading split-heading">
          <h2 id="problem-title">An outlier can be a fact—not only a data point.</h2>
          <p>
            A data fact captures an analytical pattern such as a trend,
            correlation, or dominance. A <strong>data fact outlier</strong>{" "}
            deviates from the majority of facts within the same analytical
            scope.
          </p>
        </div>

        <div className="pattern-comparison">
          <article className="pattern-card common-card">
            <div className="pattern-label">
              <span className="mini-dot blue" />
              Common pattern
            </div>
            <div className="mini-chart positive" aria-hidden="true">
              {[12, 22, 34, 45, 59, 71, 84].map((left, index) => (
                <span
                  key={left}
                  style={{ left: `${left}%`, bottom: `${16 + index * 9}%` }}
                />
              ))}
              <i />
            </div>
            <h3>Discounts and sales rise together</h3>
            <p>Most product and shipping contexts show a positive correlation.</p>
          </article>

          <article className="pattern-card outlier-card">
            <div className="pattern-label">
              <span className="mini-dot coral" />
              Fact outlier
            </div>
            <div className="mini-chart negative" aria-hidden="true">
              {[12, 22, 34, 45, 59, 71, 84].map((left, index) => (
                <span
                  key={left}
                  style={{ left: `${left}%`, bottom: `${72 - index * 8}%` }}
                />
              ))}
              <i />
            </div>
            <h3>But one context reverses the pattern</h3>
            <p>Technology products shipped by second-class delivery show a negative correlation.</p>
          </article>
        </div>
      </section>

      <section className="section approach-section" id="approach" aria-labelledby="approach-title">
        <div className="section-kicker">Approach</div>
        <div className="section-heading">
          <h2 id="approach-title">Compare like with like, then surface what is unusual.</h2>
          <p>
            FOX avoids misleading global comparisons by organizing facts into
            groups with identical breakdown and measure attributes.
          </p>
        </div>
        <div className="steps-grid">
          {steps.map((step) => (
            <article className="step-card" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
        <figure className="wide-figure">
          <img
            loading="lazy"
            src={asset("/assets/pipeline.png")}
            alt="FOX pipeline: configure the dataset, extract data facts, group and score facts, then visualize and analyze outliers."
          />
          <figcaption>
            FOX moves from a tabular dataset to structured fact populations and
            coordinated visual exploration.
          </figcaption>
        </figure>
      </section>

      <section className="score-section" aria-labelledby="score-title">
        <div className="section score-inner">
          <div className="section-kicker light">Core contribution</div>
          <div className="section-heading split-heading light-heading">
            <h2 id="score-title">Two complementary signals. One outlier score.</h2>
            <p>
              Distribution-based scoring finds geometrically distant facts.
              Pattern-based scoring finds rare types and focuses. Combining
              them captures anomalies that either signal misses alone.
            </p>
          </div>
          <div className="formula-row">
            <div className="formula-piece">
              <span>S<sub>distribution</sub></span>
              <small>value behavior</small>
            </div>
            <span className="formula-symbol">+</span>
            <div className="formula-piece">
              <span>S<sub>pattern</sub></span>
              <small>type & focus rarity</small>
            </div>
            <span className="formula-symbol">=</span>
            <div className="formula-piece formula-result">
              <span>S<sub>FOX</sub></span>
              <small>unified outlierness</small>
            </div>
          </div>
          <figure className="score-figure">
            <img
              loading="lazy"
              src={asset("/assets/score-comparison.png")}
              alt="Comparison showing that the pattern score detects Company B, the distribution score detects Companies C and D, and the combined score detects both."
            />
          </figure>
        </div>
      </section>

      <section className="section system-section" id="system" aria-labelledby="system-title">
        <div className="section-kicker">The system</div>
        <div className="section-heading split-heading">
          <h2 id="system-title">From the landscape to the fact.</h2>
          <p>
            Coordinated views support rapid scanning, focused drill-down, and
            concise explanations without collapsing heterogeneous facts into
            one crowded projection.
          </p>
        </div>
        <figure className="interface-figure">
          <div className="interface-frame">
            <div className="browser-bar" aria-hidden="true">
              <span /><span /><span />
              <i>FOX · data fact outlier exploration</i>
            </div>
            <img
              loading="lazy"
              src={asset("/assets/teaser.png")}
              alt="Detailed screenshot of the FOX visual analytics system."
            />
          </div>
        </figure>
        <div className="views-list">
          {views.map(([title, text], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section cases-section" id="cases" aria-labelledby="cases-title">
        <div className="section-kicker">Usage scenarios</div>
        <div className="section-heading">
          <h2 id="cases-title">Unexpected facts become investigable stories.</h2>
          <p>
            Two public datasets demonstrate how FOX moves from an outlier signal
            to a contextual, actionable interpretation.
          </p>
        </div>
        <div className="case-grid">
          <article className="case-card">
            <div className="case-index">Case 01 · Supermarket sales</div>
            <h3>When higher discounts correspond to lower sales</h3>
            <p>
              Most facts show the expected positive relationship. FOX isolates
              a negative-correlation cluster associated with technology
              products and second-class delivery.
            </p>
            <div className="case-finding">
              <strong>14</strong>
              <span>analytical groups</span>
              <strong>7</strong>
              <span>groups containing outliers</span>
            </div>
          </article>
          <article className="case-card accent-case">
            <div className="case-index">Case 02 · Australian vehicles</div>
            <h3>A rare context where utility vehicles dominate</h3>
            <p>
              SUV dominance is common, but FOX identifies utility-vehicle
              dominance under the specific diesel and manual-transmission
              context—with a high outlier score of 0.67.
            </p>
            <div className="case-finding">
              <strong>18</strong>
              <span>analytical groups</span>
              <strong>3</strong>
              <span>groups containing outliers</span>
            </div>
          </article>
        </div>
        <figure className="wide-figure cases-figure">
          <img
            loading="lazy"
            src={asset("/assets/case-studies.png")}
            alt="FOX usage scenarios for supermarket sales and Australian vehicle data."
          />
        </figure>
      </section>

      <section className="evaluation-section" aria-labelledby="evaluation-title">
        <div className="section evaluation-inner">
          <div className="section-kicker">Evaluation</div>
          <div className="section-heading split-heading">
            <h2 id="evaluation-title">Validated with practicing data analysts.</h2>
            <p>
              Twelve participants used FOX in a task-based, think-aloud study
              and then evaluated its overview, drill-down views, explanations,
              and overall usability.
            </p>
          </div>
          <div className="stats-grid">
            <article><strong>12</strong><span>participants</span></article>
            <article><strong>4.75</strong><span>effective for fact outlier analysis</span></article>
            <article><strong>4.67</strong><span>cluster insights rating</span></article>
            <article><strong>4.42</strong><span>easy to use and navigate</span></article>
          </div>
          <figure className="evaluation-figure">
            <img
              loading="lazy"
              src={asset("/assets/evaluation.png")}
              alt="Questionnaire results showing positive ratings for onboarding, the overview panel, the main panel, and overall usability."
            />
          </figure>
        </div>
      </section>

      <section className="section video-section" id="video" aria-labelledby="video-title">
        <div className="section-kicker">Video demo</div>
        <div className="section-heading split-heading">
          <h2 id="video-title">See the complete exploration workflow.</h2>
          <p>
            The five-minute demo covers dataset preparation, global group
            identification, local cluster exploration, fact inspection, and
            generated cluster explanations.
          </p>
        </div>
        <div className="video-frame">
          <video
            controls
            preload="metadata"
            poster={asset("/assets/teaser.png")}
            aria-label="FOX system demonstration video"
          >
            <source src={asset("/assets/FOX-demo.mp4")} type="video/mp4" />
            Your browser does not support the video element.{" "}
            <a href={asset("/assets/FOX-demo.mp4")}>Download the demo video.</a>
          </video>
        </div>
        <div className="video-download">
          <span>04:58 · MP4</span>
          <a href={asset("/assets/FOX-demo.mp4")} download>
            Download video
          </a>
        </div>
      </section>

      <section className="resources-section" id="resources" aria-labelledby="resources-title">
        <div className="section resources-inner">
          <div className="section-kicker light">Resources</div>
          <div className="section-heading split-heading light-heading">
            <h2 id="resources-title">Read, reproduce, and build on FOX.</h2>
            <p>
              The repository contains the React interface, FastAPI processing
              pipeline, fact extraction, similarity computation, outlier
              scoring, and LLM-assisted summaries.
            </p>
          </div>
          <div className="resource-grid">
            <a href={asset("/assets/FOX-paper.pdf")}>
              <span>Paper</span>
              <strong>PDF · 11 pages</strong>
              <i aria-hidden="true">↓</i>
            </a>
            <a
              href="https://github.com/lyk6666/FOX"
              target="_blank"
              rel="noreferrer"
            >
              <span>Source code</span>
              <strong>GitHub repository</strong>
              <i aria-hidden="true">↗</i>
            </a>
            {arxivUrl ? (
              <a href={arxivUrl} target="_blank" rel="noreferrer">
                <span>Preprint</span>
                <strong>Read on arXiv</strong>
                <i aria-hidden="true">↗</i>
              </a>
            ) : (
              <div className="resource-disabled" aria-label="arXiv preprint coming soon">
                <span>Preprint</span>
                <strong>arXiv · coming soon</strong>
                <i aria-hidden="true">—</i>
              </div>
            )}
            <a href={asset("/FOX.bib")} download>
              <span>Citation</span>
              <strong>Download BibTeX</strong>
              <i aria-hidden="true">↓</i>
            </a>
          </div>

          <div className="citation-section" id="citation">
            <div>
              <span className="citation-label">Citation</span>
              <h3>FOX: Visual Exploration of Data Fact Outliers</h3>
              <p>
                Yikai Li and Yong Wang. Under revision, submitted to IEEE VIS
                2026.
              </p>
            </div>
            <CitationBlock />
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-wordmark">
          <span className="wordmark-dot" />
          FOX
        </div>
        <p>Visual Exploration of Data Fact Outliers</p>
        <div>
          <a href={asset("/assets/FOX-paper.pdf")}>Paper</a>
          <a href="https://github.com/lyk6666/FOX">Code</a>
          <a href="#citation">Citation</a>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
