const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${basePath}${path}`;

const arxivUrl = "https://arxiv.org/abs/2608.08671";
const doiUrl = "https://doi.org/10.48550/arXiv.2608.08671";
const slidesUrl: string | null = null;

const resources = [
  { label: "Paper", href: asset("/assets/FOX-paper.pdf") },
  { label: "arXiv", href: arxivUrl },
  { label: "DOI", href: doiUrl },
  { label: "Slides", href: slidesUrl },
  { label: "Code", href: "https://github.com/lyk6666/FOX" },
  { label: "BibTeX", href: asset("/FOX.bib") },
] as const;

const futureDirections = [
  {
    title: "Extend the fact vocabulary",
    text: "Support user-defined analytical patterns beyond the eight current fact types, including seasonality.",
  },
  {
    title: "Adapt to different analysis styles",
    text: "Let analysts switch between visualization-led and text-led exploration based on their preferences.",
  },
  {
    title: "Enable conversational exploration",
    text: "Turn one-way cluster summaries into an interface for follow-up questions and guided investigation.",
  },
  {
    title: "Enrich outlier semantics",
    text: "Distinguish contradictory and complementary outliers, and connect local findings to global dataset patterns.",
  },
] as const;

export default function Home() {
  return (
    <main className="paper-page">
      <header className="paper-header">
        <h1>FOX: Visual Exploration of Data Fact Outliers</h1>

        <p className="authors">
          <a href="https://liyikai.com/" target="_blank" rel="noreferrer">
            Yikai Li
          </a>
          <span aria-hidden="true">,</span>
          <a href="https://yong-wang.org/" target="_blank" rel="noreferrer">
            Yong Wang
          </a>
        </p>
        <p className="affiliation">Nanyang Technological University</p>
        <p className="venue">
          Accepted at IEEE VIS 2026 · To appear in IEEE Transactions on
          Visualization and Computer Graphics (TVCG)
        </p>

        <nav className="resource-links" aria-label="Publication resources">
          {resources.map((resource) =>
            resource.href ? (
              <a
                key={resource.label}
                href={resource.href}
                target="_blank"
                rel="noreferrer"
              >
                {resource.label}
              </a>
            ) : (
              <span
                key={resource.label}
                className="resource-pending"
                title={`${resource.label} link will be added later`}
              >
                {resource.label}
                <small>soon</small>
              </span>
            ),
          )}
        </nav>
      </header>

      <section className="paper-section abstract-section" aria-labelledby="abstract-title">
        <h2 id="abstract-title">Abstract</h2>
        <p className="abstract-text">
          Exploratory Data Analysis systems extract and present data facts to
          summarize meaningful patterns such as trends and correlations.
          However, existing approaches rarely consider outlier detection at the
          level of data facts, and heterogeneous facts from different
          analytical scopes are often aggregated in a single view. We present
          FOX, a visual analytics system for interactive data{" "}
          <strong>F</strong>act <strong>O</strong>utlier e<strong>X</strong>ploration.
          FOX organizes facts into groups with consistent analytical scopes,
          combines distribution-based and pattern-based outlier scores, and
          supports interactive exploration through coordinated overview and
          detail views. Two usage scenarios and interviews with 12 participants
          demonstrate that FOX supports meaningful detection, analysis, and
          explanation of data fact outliers.
        </p>
      </section>

      <section className="paper-section" aria-labelledby="video-title">
        <h2 id="video-title">Video</h2>
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
        <p className="figure-note">
          Five-minute overview of data preparation, outlier-group discovery,
          cluster analysis, and fact inspection.
        </p>
      </section>

      <section className="paper-section" aria-labelledby="method-title">
        <h2 id="method-title">Method</h2>
        <div className="method-grid">
          <article>
            <span className="method-number">01</span>
            <h3>Fact grouping</h3>
            <p>
              Facts are grouped only when they share identical breakdown and
              measure attributes. Each group therefore defines one consistent
              analytical scope for comparison.
            </p>
          </article>

          <article>
            <span className="method-number">02</span>
            <h3>Similarity calculation</h3>
            <p>
              Numerical similarity uses cosine similarity over aggregated value
              vectors. Exact matches on fact type and focus contribute
              complementary categorical signals.
            </p>
          </article>

          <article>
            <span className="method-number">03</span>
            <h3>Outlier score</h3>
            <p>
              A normalized LOF score captures neighborhood deviation, while an
              entropy-aware pattern score captures rare fact types and focuses.
              Their weighted combination produces the final score.
            </p>
          </article>
        </div>

        <div className="method-figure-grid">
          <figure className="academic-figure">
            <img
              loading="lazy"
              src={asset("/assets/score-mechanism-hq.png")}
              alt="FOX similarity calculation and outlier-score computation pipeline."
            />
            <figcaption>
              Similarity calculation and the two-component outlier-scoring
              pipeline.
            </figcaption>
          </figure>

          <figure className="academic-figure">
            <img
              loading="lazy"
              src={asset("/assets/score-comparison-hq.png")}
              alt="Comparison of pattern-based, distribution-based, and combined outlier scoring."
            />
            <figcaption>
              Distribution- and pattern-based scores capture complementary
              forms of fact outlierness; the combined score detects both.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="paper-section" aria-labelledby="scenarios-title">
        <h2 id="scenarios-title">Usage Scenarios</h2>
        <div className="scenario-grid">
          <article>
            <p className="section-label">Scenario 1</p>
            <h3>Supermarket sales</h3>
            <p>
              Among 14 fact groups, seven contain outliers. FOX reveals a rare
              negative relationship between discount and sales for technology
              products shipped by second-class delivery, alongside unusual
              dominance and trend patterns.
            </p>
            <a
              className="dataset-link"
              href="https://www.kaggle.com/datasets/yikai6/supermarket-resale"
              target="_blank"
              rel="noreferrer"
            >
              Kaggle dataset
            </a>
          </article>

          <article>
            <p className="section-label">Scenario 2</p>
            <h3>Australian vehicle prices</h3>
            <p>
              Among 18 fact groups, three contain outliers. FOX identifies
              unusual drivetrain patterns and a utility-vehicle dominance fact
              under diesel and manual-transmission conditions, with an outlier
              score of 0.67.
            </p>
            <a
              className="dataset-link"
              href="https://www.kaggle.com/datasets/nelgiriyewithana/australian-vehicle-prices"
              target="_blank"
              rel="noreferrer"
            >
              Kaggle dataset
            </a>
          </article>
        </div>

        <figure className="academic-figure">
          <img
            loading="lazy"
            src={asset("/assets/case-studies.png")}
            alt="FOX usage scenarios with supermarket sales and Australian vehicle data."
          />
          <figcaption>
            Representative findings from the two public datasets used in the
            paper.
          </figcaption>
        </figure>
      </section>

      <section className="paper-section" aria-labelledby="interview-title">
        <h2 id="interview-title">Interview Results</h2>
        <p>
          Twelve participants completed a one-hour, task-based think-aloud
          study. They used the overview to locate outlier groups, inspected
          individual facts, interpreted clusters, and evaluated the coordinated
          views using a five-point Likert scale.
        </p>

        <p className="interview-summary">
          Participants valued both the Cluster Map and the natural-language
          Cluster Insights. Feedback also highlighted the need for more salient
          overview encodings, less redundancy among detail views, and flexible
          support for analysts who prefer either visual or textual exploration.
        </p>

        <figure className="academic-figure compact-figure">
          <img
            loading="lazy"
            src={asset("/assets/evaluation.png")}
            alt="Questionnaire results from interviews with 12 participants."
          />
          <figcaption>
            Mean questionnaire ratings across onboarding, overview, main-panel,
            and overall-usability questions.
          </figcaption>
        </figure>
      </section>

      <section className="paper-section" aria-labelledby="future-title">
        <h2 id="future-title">Future Directions</h2>
        <ul className="future-list">
          {futureDirections.map((direction) => (
            <li key={direction.title}>
              <strong>{direction.title}.</strong> {direction.text}
            </li>
          ))}
        </ul>
      </section>

      <section className="paper-section" aria-labelledby="citation-title">
        <h2 id="citation-title">Citation</h2>
        <div className="citation-placeholder">
          <p>
            Li, Y., &amp; Wang, Y. (2026). FOX: Visual Exploration of Data
            Fact Outliers. arXiv:2608.08671 [cs.HC].
          </p>
          <span>
            DOI: <a href={doiUrl}>10.48550/arXiv.2608.08671</a>. Final TVCG
            volume, issue, and page numbers are forthcoming.
          </span>
        </div>
      </section>

      <footer>
        <p>
          FOX: Visual Exploration of Data Fact Outliers
          <span aria-hidden="true"> · </span>
          <a href="https://github.com/lyk6666/FOX">Source code</a>
        </p>
      </footer>
    </main>
  );
}
