import { Mail, Instagram } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6 text-center">
        <p className="font-display text-3xl tracking-wider text-primary mb-6">editzz.view</p>
        <nav className="flex flex-wrap justify-center gap-6 mb-6">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex justify-center gap-4 mb-6">
          <a href="https://instagram.com/editzz.view" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="mailto:your@email.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
        <p className="text-xs text-muted-foreground">© 2026 editzz.view – Cinematic Video Editing Portfolio</p>
      </div>
    </footer>
  );
};

export default Footer;
