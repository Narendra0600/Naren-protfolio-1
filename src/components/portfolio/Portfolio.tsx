import React, { useState } from "react";
import { Play } from "lucide-react";

const categories = ["All", "Reels", "Cinematic", "YouTube", "Color Grade"];

const projects = [
  { id: 1, category: "YouTube", title: "YouTube Vlog Edit #1", desc: "Dynamic vlog edit with engaging pacing", url: "https://drive.google.com/drive/folders/1MySp10JAApTyne-N8pI6_o7Kojm5fi8_?usp=drive_link", image: "/thumbnails/thumb1.png" },
  { id: 2, category: "YouTube", title: "Tech Review Edit", desc: "Clean cuts with motion graphics overlay", url: "https://drive.google.com/drive/folders/1LKgbfMp0mL2D9im9eWE9J3kNAwesuNot?usp=drive_link", image: "/thumbnails/thumb2.jpg" },
  { id: 3, category: "Reels", title: "Trending Reel Edit", desc: "Fast-paced edit synced to trending audio", url: "https://drive.google.com/drive/folders/1p8pdzRWH9R7VrehYnIRxZlYVuskvJvtt?usp=drive_link", image: "/thumbnails/thumb6.jpg" },
  { id: 4, category: "Reels", title: "Product Showcase", desc: "Smooth transitions for product reveal", url: "https://drive.google.com/drive/folders/1_0vahg26KzC1h3eDZm5-muV-lZ48WHTz?usp=drive_link", image: "/thumbnails/thumb7.jpg" },
  { id: 5, category: "Cinematic", title: "Short Film Edit", desc: "Dramatic pacing with cinematic color", url: "https://drive.google.com/drive/folders/1X3P7Z5lKJPsrbgN-nzuS3mPKqWoxBLMJ?usp=drive_link", image: "/thumbnails/thumb5.jpg" },
];

const Portfolio = () => {
  const [active, setActive] = useState("All");
  const [sliderPos, setSliderPos] = useState(50);

  const filteredProjects = active === "All" ? projects : projects.filter(p => p.category === active);

  return (
    <section id="portfolio" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-center mb-16 fade-up">My Work</h2>

        {/* Before & After Toggle Card */}
        <div className="glass-card max-w-4xl mx-auto mb-16 overflow-hidden fade-up relative group">
          <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <h3 className="font-display text-2xl tracking-wide mb-3">Color Grading Magic</h3>
              <p className="text-muted-foreground mb-6">See the difference professional color grading makes. Slider compares flat LOG footage to the final cinematic visual.</p>
              <div className="inline-flex gap-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-muted text-muted-foreground">Before (LOG)</span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary">After (Graded)</span>
              </div>
            </div>

            <div className="w-full md:w-1/2 aspect-video relative rounded-lg overflow-hidden select-none"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
                setSliderPos((x / rect.width) * 100);
              }}
              onTouchMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
                setSliderPos((x / rect.width) * 100);
              }}>
              {/* After Image (Background) */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80')] bg-cover bg-center" />

              {/* Before Image (Foreground, clipped) */}
              <div
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=10')] bg-cover bg-center grayscale contrast-75 brightness-110"
                style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
              />

              {/* Slider Line */}
              <div className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize" style={{ left: `calc(${sliderPos}% - 0.125rem)` }}>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 fade-up" style={{ transitionDelay: "0.1s" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-md text-sm font-semibold transition-colors ${active === cat
                ? "bg-primary text-primary-foreground"
                : "glass-card text-muted-foreground hover:text-foreground"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p, i) => (
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              key={p.id}
              data-drive-url={p.url}
              className="group relative h-[250px] overflow-hidden rounded-xl bg-muted transition-all duration-300 hover:-translate-y-1 block"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              {/* Background Image */}
              {p.image ? (
                <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              ) : (
                <div className="absolute inset-0 gradient-placeholder" />
              )}

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-300 group-hover:opacity-80" />

              {/* Hover Play Button */}
              <div className="absolute inset-0 z-10 hidden items-center justify-center opacity-0 transition-opacity duration-300 group-hover:flex group-hover:opacity-100">
                <div className="flex h-16 w-16 scale-75 items-center justify-center rounded-full bg-primary/90 shadow-xl transition-transform duration-300 group-hover:scale-100">
                  <Play className="ml-1 h-8 w-8 text-white" fill="currentColor" />
                </div>
              </div>

              {/* Content Box */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                <span className="mb-1 text-xs font-semibold tracking-wider text-primary">{p.category}</span>
                <h3 className="mb-2 font-display text-2xl tracking-wide text-white transition-colors group-hover:text-primary/90">{p.title}</h3>
                <p className="line-clamp-2 text-sm text-gray-300">{p.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
