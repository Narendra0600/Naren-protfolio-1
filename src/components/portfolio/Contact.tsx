import React, { useState } from "react";
import { Mail, Instagram } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailtoLink = `mailto:nareenedits@gmail.com?subject=Project Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="section-heading text-center mb-4 fade-up">Let's Work Together</h2>
        <p className="text-center text-muted-foreground mb-12 fade-up" style={{ transitionDelay: "0.1s" }}>
          Have a project in mind? Let's create something cinematic.
        </p>

        <form
          className="space-y-4 fade-up"
          style={{ transitionDelay: "0.2s" }}
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = mailtoLink;
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full glass-card px-5 py-3 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full glass-card px-5 py-3 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full glass-card px-5 py-3 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 resize-none"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Send Message
          </button>
        </form>

        <div className="flex justify-center gap-6 mt-8 fade-up" style={{ transitionDelay: "0.3s" }}>
          <a href="mailto:nareenedits@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://instagram.com/editzz.view" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
        </div>

        <div className="text-center mt-10 fade-up" style={{ transitionDelay: "0.4s" }}>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-3 rounded-md bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
