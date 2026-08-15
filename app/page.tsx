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
          Exploratory Data Analysis (EDA) systems extract and present data facts
          to summarize meaningful patterns such as trends and correlations for
          efficient dataset exploration. However, existing approaches rarely
          consider outlier detection at the level of data facts, and
          heterogeneous facts from different analytical scopes are often
          aggregated in a single view, making it difficult to define meaningful
          metrics and effectively analyze data fact outliers. To fill this gap,
          we present FOX, a novel visual analytics system for interactive data{" "}
          <strong>F</strong>act <strong>O</strong>utlier e<strong>X</strong>ploration.
          FOX organizes data facts into groups with consistent analytical
          scopes and computes a unified outlier score that combines
          distribution-based and pattern-based components. Its interface
          comprises an Upload Panel for data preparation and two coordinated
          exploration panels: the Overview Panel employs a matrix-based
          visualization to enable an intuitive overview of all data facts, and
          the Main Panel provides four linked views for cluster-level and
          fact-level analysis. We evaluated the usability and effectiveness of
          the system through two usage scenarios on public datasets and
          in-depth interviews with 12 participants. The results show that FOX
          enables meaningful detection, analysis, and explanation of data fact
          outliers.
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

      <section className="paper-section" aria-labelledby="processing-title">
        <h2 id="processing-title">Data Fact Processing</h2>
        <div className="method-grid">
          <article>
            <span className="method-number">01</span>
            <h3>Data fact extraction</h3>
            <p>
              FOX represents each fact as a six-element tuple of subspace,
              breakdown, measure, type, score, and focus. It systematically
              enumerates eligible subspaces and extracts eight supported fact
              types with impact-based pruning.
            </p>
          </article>

          <article>
            <span className="method-number">02</span>
            <h3>Fact grouping</h3>
            <p>
              Facts are partitioned by identical breakdown and measure
              attributes. Each group therefore defines a consistent analytical
              scope in which comparisons remain meaningful and explainable.
            </p>
          </article>

          <article>
            <span className="method-number">03</span>
            <h3>Similarity calculation</h3>
            <p>
              A weighted similarity combines cosine similarity over aggregated
              value distributions with categorical overlap on fact type and
              focus, capturing both numerical and semantic characteristics.
            </p>
          </article>

          <article>
            <span className="method-number">04</span>
            <h3>Outlier score</h3>
            <p>
              A normalized LOF score captures distributional neighborhood
              deviation, while an entropy-based score captures rare fact types
              and focuses. Their weighted combination yields the final score.
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
              Among 14 fact groups, seven contain outliers. FOX reveals a
              negative discount-sales relationship for technology products
              shipped by second-class delivery, joint sales dominance by two
              supermarkets for consumer furniture, and two unusual decreasing
              quantity trends.
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
              distinct front- and four-wheel-drive distance patterns, together
              with a rare utility-vehicle sales-dominance fact under diesel and
              manual-transmission conditions, with an outlier score of 0.67.
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
