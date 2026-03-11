import { Film, Clapperboard, Palette, BookOpen, Volume2, Layers } from "lucide-react";

const skills = [
  { icon: Film, name: "Video Editing", desc: "Cutting, trimming, and assembling footage into polished content" },
  { icon: Clapperboard, name: "Cinematic Editing", desc: "Film-style pacing with dramatic transitions and effects" },
  { icon: Palette, name: "Color Grading", desc: "Professional color correction and cinematic LUTs" },
  { icon: BookOpen, name: "Storytelling", desc: "Narrative-driven editing that keeps viewers engaged" },
  { icon: Volume2, name: "Sound Design", desc: "Audio mixing, SFX layering, and music synchronization" },
  { icon: Layers, name: "Smooth Transitions", desc: "Seamless cuts, zooms, and motion-matched transitions" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-center mb-16 fade-up">My Editing Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="glass-card p-6 hover:-translate-y-1 transition-transform duration-300 fade-up"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <skill.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display text-xl tracking-wide mb-2">{skill.name}</h3>
              <p className="text-sm text-muted-foreground">{skill.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10 fade-up">
          <span className="inline-flex items-center gap-2 glass-card px-6 py-3 text-sm font-semibold text-primary">
            <Palette className="w-4 h-4" /> Primary Tool: DaVinci Resolve
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
