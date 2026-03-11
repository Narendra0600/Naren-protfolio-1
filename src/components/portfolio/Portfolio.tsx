import { useState } from "react";
import { Play } from "lucide-react";

const categories = ["YouTube Edits", "Reels", "Cinematic", "Color Grading"];

const projects: Record<string, { title: string; desc: string }[]> = {
  "YouTube Edits": [
    { title: "YouTube Vlog Edit #1", desc: "Dynamic vlog edit with engaging pacing" },
    { title: "Tech Review Edit", desc: "Clean cuts with motion graphics overlay" },
    { title: "Travel Montage", desc: "Cinematic travel footage with color grading" },
  ],
  Reels: [
    { title: "Trending Reel Edit", desc: "Fast-paced edit synced to trending audio" },
    { title: "Product Showcase", desc: "Smooth transitions for product reveal" },
    { title: "Lifestyle Reel", desc: "Aesthetic lifestyle content with warm tones" },
  ],
  Cinematic: [
    { title: "Short Film Edit", desc: "Dramatic pacing with cinematic color" },
    { title: "Music Video", desc: "Beat-synced cuts with film grain overlay" },
    { title: "Documentary Style", desc: "Narrative-driven footage assembly" },
  ],
  "Color Grading": [
    { title: "Warm Tone Grade", desc: "Golden hour warmth applied to raw footage" },
    { title: "Teal & Orange", desc: "Classic cinematic color split grade" },
    { title: "Moody Dark Grade", desc: "Low-key dramatic look with crushed blacks" },
  ],
};

const Portfolio = () => {
  const [active, setActive] = useState("YouTube Edits");

  return (
    <section id="portfolio" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-center mb-16 fade-up">My Work</h2>

        {/* Showreel */}
        <div className="glass-card aspect-video max-w-3xl mx-auto mb-16 flex items-center justify-center fade-up">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center mx-auto mb-4">
              <Play className="w-7 h-7 text-primary ml-1" />
            </div>
            <p className="font-display text-2xl tracking-wide">Showreel — Coming Soon</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 fade-up">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-md text-sm font-semibold transition-colors ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "glass-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects[active].map((p, i) => (
            <div
              key={p.title}
              className="glass-card overflow-hidden group hover:-translate-y-1 hover:border-primary/40 transition-all duration-300 fade-up"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="aspect-video gradient-placeholder" />
              <div className="p-5">
                <h3 className="font-display text-lg tracking-wide mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{p.desc}</p>
                <button className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:opacity-80 transition-opacity">
                  <Play className="w-4 h-4" /> Play
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
