import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen, Mic, Film } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * SaraPuma Landing Page
 * 
 * Design Philosophy: Clarity & Accessibility First
 * - Generous whitespace for cognitive ease
 * - Large, legible typography with intentional hierarchy
 * - Warm, professional color palette (teal accent, gold CTAs)
 * - Asymmetric, flow-based layout
 * - Senior-friendly and accessible
 */

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(() => new Set());

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => {
              const newSet = new Set(prev);
              newSet.add(entry.target.id);
              return newSet;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-primary">SaraPuma</div>
          <div className="flex gap-6 items-center">
            <a href="#apps" className="text-sm font-medium hover:text-primary transition-colors">
              Apps
            </a>
            <a href="#learn" className="text-sm font-medium hover:text-primary transition-colors">
              Learn
            </a>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-background to-secondary/20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div
              id="hero-text"
              data-animate
              className={`transition-all duration-1000 ${
                visibleSections.has("hero-text")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h1 className="mb-6 text-foreground">
                Markdown Made Simple
              </h1>
              <p className="text-muted-foreground mb-6 text-lg">
                Markdown is the language of the internet. It powers AI prompts, documentation, and the future of writing. But it shouldn't be scary. <strong>SaraPuma</strong> makes it accessible to everyone—from students to seniors.
              </p>
              <p className="text-muted-foreground mb-8 text-base">
                Explore our ecosystem of tools designed for clarity, simplicity, and real-world use.
              </p>
              <div className="flex gap-4">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 py-6">
                  Start with Puma Notes <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="text-base px-8 py-6">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right: Visual */}
            <div
              id="hero-visual"
              data-animate
              className={`transition-all duration-1000 delay-200 ${
                visibleSections.has("hero-visual")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <img
                src="/images/hero-markdown-visual.png"
                alt="Markdown transformation visualization"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-gradient"></div>

      {/* Why Markdown Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-3xl">
          <div
            id="why-markdown"
            data-animate
            className={`transition-all duration-1000 ${
              visibleSections.has("why-markdown")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="mb-8 text-center text-foreground">
              Why Markdown Matters
            </h2>
            <div className="space-y-6">
              <div className="bg-secondary/50 p-6 rounded-lg border border-border">
                <h3 className="text-primary font-semibold mb-3">Future-Proof</h3>
                <p className="text-muted-foreground">
                  Markdown is plain text. It never becomes obsolete. Unlike Word documents or proprietary formats, your Markdown files will be readable forever.
                </p>
              </div>
              <div className="bg-secondary/50 p-6 rounded-lg border border-border">
                <h3 className="text-primary font-semibold mb-3">Universal</h3>
                <p className="text-muted-foreground">
                  From GitHub to AI chatbots, Markdown is everywhere. Learning it once means you can work anywhere—no lock-in, no vendor dependency.
                </p>
              </div>
              <div className="bg-secondary/50 p-6 rounded-lg border border-border">
                <h3 className="text-primary font-semibold mb-3">Simple & Powerful</h3>
                <p className="text-muted-foreground">
                  A few simple symbols create rich, formatted documents. No menus, no distractions. Just you and your words.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-gradient"></div>

      {/* Apps Section */}
      <section id="apps" className="py-20 md:py-28 bg-secondary/10">
        <div className="container">
          <div
            id="apps-header"
            data-animate
            className={`transition-all duration-1000 text-center mb-16 ${
              visibleSections.has("apps-header")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="mb-4 text-foreground">The SaraPuma Ecosystem</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Three powerful tools, one mission: make content creation accessible to everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Puma Notes */}
            <div
              id="app-notes"
              data-animate
              className={`transition-all duration-1000 ${
                visibleSections.has("app-notes")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <Card className="h-full bg-card border-border hover:shadow-lg transition-shadow p-8">
                <div className="mb-6 p-4 bg-primary/10 rounded-lg w-fit">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">
                  Puma Notes
                </h3>
                <p className="text-muted-foreground mb-6">
                  A user-friendly Markdown editor that feels like a word processor. Seamlessly import from Apple Notes. Edit rich text without seeing scary syntax.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    Invisible Markdown syntax
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    Apple Notes compatibility
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    Export to any format
                  </li>
                </ul>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Launch Puma Notes
                </Button>
              </Card>
            </div>

            {/* Teleprompter */}
            <div
              id="app-teleprompter"
              data-animate
              className={`transition-all duration-1000 delay-100 ${
                visibleSections.has("app-teleprompter")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <Card className="h-full bg-card border-border hover:shadow-lg transition-shadow p-8">
                <div className="mb-6 p-4 bg-primary/10 rounded-lg w-fit">
                  <Mic className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">
                  Teleprompter
                </h3>
                <p className="text-muted-foreground mb-6">
                  A browser-based teleprompter for content creators. Perfect for YouTubers, podcasters, and presenters. Smooth scrolling, large text, zero distractions.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    Adjustable scroll speed
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    Large, readable fonts
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    Works on any device
                  </li>
                </ul>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Open Teleprompter
                </Button>
              </Card>
            </div>

            {/* Video/Thumbnail Gen */}
            <div
              id="app-video"
              data-animate
              className={`transition-all duration-1000 delay-200 ${
                visibleSections.has("app-video")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <Card className="h-full bg-card border-border hover:shadow-lg transition-shadow p-8">
                <div className="mb-6 p-4 bg-primary/10 rounded-lg w-fit">
                  <Film className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">
                  Video/Thumbnail Gen
                </h3>
                <p className="text-muted-foreground mb-6">
                  Generate professional video thumbnails and assets in seconds. Designed for creators who want quality without complexity.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    Template library
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    Customizable designs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    One-click export
                  </li>
                </ul>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Create Assets
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Visual */}
      <section className="py-16 bg-background">
        <div className="container">
          <div
            id="ecosystem-visual"
            data-animate
            className={`transition-all duration-1000 ${
              visibleSections.has("ecosystem-visual")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <img
              src="/images/app-ecosystem-visual.png"
              alt="SaraPuma ecosystem interconnected tools"
              className="w-full max-w-2xl mx-auto h-auto"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-gradient"></div>

      {/* Learn Section */}
      <section id="learn" className="py-20 md:py-28 bg-secondary/10">
        <div className="container">
          <div
            id="learn-header"
            data-animate
            className={`transition-all duration-1000 text-center mb-16 ${
              visibleSections.has("learn-header")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="mb-4 text-foreground">Learn Markdown</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              New to Markdown? Watch these curated tutorials to get started.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Video 1 */}
            <div
              id="video-1"
              data-animate
              className={`transition-all duration-1000 ${
                visibleSections.has("video-1")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative bg-black rounded-lg overflow-hidden aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/6A5EpqqDOdk"
                  title="Markdown Basics"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0"
                ></iframe>
              </div>
              <h3 className="mt-4 font-semibold text-foreground">Markdown Basics</h3>
              <p className="text-sm text-muted-foreground">Learn the fundamentals in 5 minutes.</p>
            </div>

            {/* Video 2 */}
            <div
              id="video-2"
              data-animate
              className={`transition-all duration-1000 delay-100 ${
                visibleSections.has("video-2")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative bg-black rounded-lg overflow-hidden aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/HUBNt18RFbo"
                  title="Markdown Advanced"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0"
                ></iframe>
              </div>
              <h3 className="mt-4 font-semibold text-foreground">Advanced Markdown</h3>
              <p className="text-sm text-muted-foreground">Master tables, code blocks, and more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-gradient"></div>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container text-center">
          <div
            id="cta-section"
            data-animate
            className={`transition-all duration-1000 ${
              visibleSections.has("cta-section")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="mb-6 text-primary-foreground">Ready to Simplify Your Writing?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of users who've discovered that Markdown doesn't have to be complicated.
            </p>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 py-6">
              Start with Puma Notes Today <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-foreground mb-4">SaraPuma</h4>
              <p className="text-sm text-muted-foreground">
                Making Markdown accessible to everyone.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Apps</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Puma Notes</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Teleprompter</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Video Gen</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Tutorials</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Use</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">License</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © 2026 SaraPuma. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground max-w-md">
                <strong>Terms of Use & Liability Disclaimer:</strong> SaraPuma and its applications are provided "as is" without warranty. Puma Notes is a client-side tool; we do not store or endorse user-generated content. You are solely responsible for your content. By using our services, you agree to our terms and accept all liability disclaimers.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
