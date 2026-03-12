import React from "react";
import profileImg from "@/assets/profile.jpg";

const stats = [
  { label: "2+ Years Learning" },
  { label: "DaVinci Resolve" },
  { label: "Passionate Editor" },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center fade-up">
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-primary p-2 group">
              <div className="absolute -inset-2 rounded-full border-4 border-primary/50 animate-[spin_10s_linear_infinite] border-t-transparent pointer-events-none" />
              <div className="w-full h-full rounded-full overflow-hidden bg-muted">
                <img
                  src={profileImg}
                  alt="Narendra Naidu"
                  width={288}
                  height={288}
                  loading="eager"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 bg-muted"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
          <div className="fade-up" style={{ transitionDelay: "0.15s" }}>
            <h2 className="section-heading mb-6">About Me</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Narendra Naidu is a freelance video editor and student at Sathyabama University. He specializes in YouTube content, cinematic edits, and social media reels, with a focus on storytelling, smooth cuts, and professional color grading.
            </p>
            <div className="flex flex-wrap gap-3">
              {stats.map((s) => (
                <span key={s.label} className="glass-card px-5 py-2 text-sm font-semibold text-primary">
                  {s.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
