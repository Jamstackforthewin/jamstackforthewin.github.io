const Index = () => {
  const benefits = [
    { num: "01", title: "Fast", desc: "Pre-built pages. CDN delivery. No server delays." },
    { num: "02", title: "Secure", desc: "No database. No server. Just static files." },
    { num: "03", title: "Scalable", desc: "Handles traffic spikes without effort." },
    { num: "04", title: "Affordable", desc: "Static hosting costs less." },
    { num: "05", title: "Modern", desc: "Git workflows. Instant previews." },
    { num: "06", title: "Global", desc: "Edge delivery worldwide." },
  ];

  const hosting = [
    { name: "Cloudflare Pages", specs: "Unlimited bandwidth", price: "Free" },
    { name: "Vercel", specs: "100GB bandwidth", price: "Free" },
    { name: "Netlify", specs: "100GB bandwidth", price: "Free" },
    { name: "GitHub Pages", specs: "1GB storage", price: "Free" },
    { name: "Surge.sh", specs: "Unlimited publishing", price: "Free" },
    { name: "Render", specs: "100GB bandwidth", price: "Free" },
  ];

  return (
    <div className="min-h-screen bg-white text-black antialiased">
      {/* Header */}
      <header className="px-6 md:px-12 py-6 border-b border-black/10">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="text-sm font-medium tracking-tight">Jamstack</span>
          <span className="text-xs text-black/40">Forthewin</span>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 md:px-12 pt-24 pb-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.9] mb-8">
            Jamstack
            <br />
            <span className="text-black/30">for the</span>
            <br />
            Win
          </h1>
          
          <p className="text-lg md:text-xl text-black/60 max-w-xl leading-relaxed">
            JavaScript, APIs, and Markup. The architecture for building 
            faster, safer, and more scalable websites.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 md:px-12 py-16 border-t border-black/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs uppercase tracking-widest text-black/40 mb-12">Benefits</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10">
            {benefits.map((b) => (
              <div 
                key={b.num} 
                className="bg-white p-6 md:p-8 group hover:bg-black hover:text-white transition-colors duration-300"
              >
                <span className="text-xs text-black/30 group-hover:text-white/30">{b.num}</span>
                <h3 className="text-lg font-medium mt-2 mb-3">{b.title}</h3>
                <p className="text-sm text-black/50 group-hover:text-white/60 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hosting */}
      <section className="px-6 md:px-12 py-16 border-t border-black/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs uppercase tracking-widest text-black/40 mb-12">Free Hosting</h2>
          
          <div className="divide-y divide-black/10">
            {hosting.map((h) => (
              <a
                key={h.name}
                href={`https://${h.name.toLowerCase().replace(/\s+/g, '')}.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-4 group"
              >
                <div className="flex items-baseline gap-8">
                  <span className="text-base font-medium">{h.name}</span>
                  <span className="text-sm text-black/40 hidden sm:inline">{h.specs}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-black/30">{h.price}</span>
                  <span className="text-black/20 group-hover:text-black transition-colors">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-8 border-t border-black/10">
        <div className="max-w-5xl mx-auto flex items-center justify-between text-xs text-black/30">
          <span>Built for the modern web</span>
          <span>2025</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
