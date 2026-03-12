import React from "react";
import { Film, Clapperboard, Palette, BookOpen, Volume2, Layers } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  { icon: Film, name: "Video Editing", desc: "Cutting, trimming, and assembling footage into polished content", progress: 95 },
  { icon: Clapperboard, name: "Cinematic Editing", desc: "Film-style pacing with dramatic transitions and effects", progress: 90 },
  { icon: Palette, name: "Color Grading", desc: "Professional color correction and cinematic LUTs", progress: 85 },
  { icon: BookOpen, name: "Storytelling", desc: "Narrative-driven editing that keeps viewers engaged", progress: 92 },
  { icon: Volume2, name: "Sound Design", desc: "Audio mixing, SFX layering, and music synchronization", progress: 88 },
  { icon: Layers, name: "Smooth Transitions", desc: "Seamless cuts, zooms, and motion-matched transitions", progress: 96 },
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
              <p className="text-sm text-muted-foreground mb-4">{skill.desc}</p>
              
              <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.progress}%` }}
                  viewport={{ once: true, margin: "0px 0px -50px 0px", amount: 0.1 }}
                  transition={{ duration: 1, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
                  className="h-full bg-primary"
                  style={{ willChange: "width", transform: "translateZ(0)" }}
                />
              </div>
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
