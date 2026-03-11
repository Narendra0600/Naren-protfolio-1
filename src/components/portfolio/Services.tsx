import { Film, Instagram, Zap, Clapperboard, Palette, BookOpen } from "lucide-react";

const services = [
  { icon: Film, title: "YouTube Video Editing", desc: "Long-form content edited for retention and engagement" },
  { icon: Instagram, title: "Instagram Reels Editing", desc: "Fast-paced, trending reels optimized for social reach" },
  { icon: Zap, title: "Short Form Content", desc: "Punchy edits under 60 seconds for TikTok/Shorts" },
  { icon: Clapperboard, title: "Cinematic Editing", desc: "Film-style storytelling with dramatic pacing" },
  { icon: Palette, title: "Color Grading", desc: "Professional LUTs and grade for cinematic tone" },
  { icon: BookOpen, title: "Storytelling Edits", desc: "Narrative-driven cuts that connect emotionally" },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-center mb-16 fade-up">Services I Offer</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="glass-card p-6 border-t-2 border-t-transparent hover:border-t-primary transition-colors duration-300 hover:-translate-y-1 transition-transform fade-up"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <s.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display text-xl tracking-wide mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
