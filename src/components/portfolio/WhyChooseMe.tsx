const reasons = [
  { emoji: "🎬", text: "Cinematic storytelling approach" },
  { emoji: "✂️", text: "Smooth and professional editing style" },
  { emoji: "🎨", text: "High-quality color grading" },
  { emoji: "⚡", text: "Fast turnaround time" },
  { emoji: "💡", text: "Passion-driven creative visuals" },
];

const WhyChooseMe = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="section-heading text-center mb-16 fade-up">Why Work With Me</h2>
        <div className="space-y-4">
          {reasons.map((r, i) => (
            <div
              key={r.text}
              className="glass-card px-6 py-4 flex items-center gap-4 fade-up"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className="text-2xl">{r.emoji}</span>
              <span className="font-semibold">{r.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
