const Index = () => {
  const benefits = [
    { title: "Fast", desc: "Pre-built pages served from the edge." },
    { title: "Secure", desc: "No server, no database, no attack surface." },
    { title: "Scalable", desc: "CDN handles traffic without effort." },
    { title: "Affordable", desc: "Static hosting costs a fraction." },
    { title: "Modern", desc: "Git workflows and instant previews." },
    { title: "Global", desc: "Content delivered from nearby servers." },
  ];

  const hosts = [
    { name: "Cloudflare Pages", url: "https://pages.cloudflare.com" },
    { name: "Vercel", url: "https://vercel.com" },
    { name: "Netlify", url: "https://netlify.com" },
    { name: "GitHub Pages", url: "https://pages.github.com" },
    { name: "Surge.sh", url: "https://surge.sh" },
    { name: "Render", url: "https://render.com" },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <main className="max-w-2xl mx-auto px-6 py-24 md:py-32">
        {/* Hero */}
        <header className="mb-20">
          <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
            Jamstack for the Win
          </h1>
          <p className="text-neutral-500 leading-relaxed">
            JavaScript, APIs, and Markup. The modern architecture for building 
            faster, safer, and more scalable websites.
          </p>
        </header>

        {/* Benefits */}
        <section className="mb-20">
          <h2 className="text-sm text-neutral-400 uppercase tracking-wider mb-8">
            Why Jamstack
          </h2>
          <div className="space-y-6">
            {benefits.map((b) => (
              <div key={b.title}>
                <h3 className="font-medium mb-1">{b.title}</h3>
                <p className="text-neutral-500 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Hosting */}
        <section className="mb-20">
          <h2 className="text-sm text-neutral-400 uppercase tracking-wider mb-8">
            Free Hosting
          </h2>
          <ul className="space-y-3">
            {hosts.map((h) => (
              <li key={h.name}>
                <a 
                  href={h.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  {h.name}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-neutral-100">
          <p className="text-sm text-neutral-400">
            Built for the modern web
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
