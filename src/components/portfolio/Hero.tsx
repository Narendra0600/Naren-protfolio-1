import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center gradient-mesh overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <p className="text-primary font-display text-lg md:text-xl tracking-[0.3em] uppercase mb-4 fade-up">
          editzz.view
        </p>
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-wider mb-4 fade-up" style={{ transitionDelay: "0.1s" }}>
          Narendra Naidu
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 fade-up" style={{ transitionDelay: "0.2s" }}>
          Cinematic Video Editor for YouTube, Reels & Storytelling Content
        </p>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10 fade-up" style={{ transitionDelay: "0.3s" }}>
          I transform raw footage into cinematic stories through creative editing, smooth transitions, and professional color grading.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up" style={{ transitionDelay: "0.4s" }}>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Hire Me
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center px-8 py-3 rounded-md border border-foreground/20 text-foreground font-semibold hover:border-primary hover:text-primary transition-colors"
          >
            View My Work
          </a>
        </div>
      </div>
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors">
        <ChevronDown className="w-8 h-8 animate-bounce-slow" />
      </a>
    </section>
  );
};

export default Hero;
