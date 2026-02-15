const Index = () => {
  const benefits = [
    { num: "01", title: "Fast", desc: "Pre-built. CDN. No delays." },
    { num: "02", title: "Secure", desc: "No DB. No server. Static only." },
    { num: "03", title: "Scale", desc: "Traffic spikes? No problem." },
    { num: "04", title: "Cheap", desc: "Static costs less. Period." },
    { num: "05", title: "Modern", desc: "Git. Previews. CI/CD." },
    { num: "06", title: "Global", desc: "Edge delivery. Everywhere." },
  ];

  const hosting = [
    { name: "Cloudflare Pages", specs: "Unlimited", price: "$0" },
    { name: "Vercel", specs: "100GB/mo", price: "$0" },
    { name: "Netlify", specs: "100GB/mo", price: "$0" },
    { name: "GitHub Pages", specs: "1GB", price: "$0" },
    { name: "Surge.sh", specs: "Unlimited", price: "$0" },
    { name: "Render", specs: "100GB/mo", price: "$0" },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-mono selection:bg-[#dc2626] selection:text-white">
      {/* Header */}
      <header className="border-b border-white/10 px-6 py-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="text-xs tracking-wider">
            [<span className="text-[#dc2626]">JAMSTACK</span>]
          </div>
          <div className="text-xs text-white/60">
            v1.0.0
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 py-20 md:py-32 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6">
            Jamstack
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-xl mb-8">
            The architecture for the modern web.
            <span className="text-white"> JavaScript. APIs. Markup.</span>
          </p>
          
          <div className="flex items-center gap-4 text-xs text-white/60">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#dc2626] animate-pulse" />
              Online
            </span>
            <span className="text-white/40">|</span>
            <span>Static</span>
            <span className="text-white/40">|</span>
            <span>Edge</span>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 py-20 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs text-[#dc2626] uppercase tracking-widest mb-12">
            Why Jamstack
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {benefits.map((b) => (
              <div 
                key={b.num}
                className="bg-black p-6 group hover:bg-white/5 transition-colors"
              >
                <span className="text-xs text-white/40 mb-4 block">{b.num}</span>
                <h3 className="text-lg font-bold mb-2">{b.title}</h3>
                <p className="text-sm text-white/60">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staticly */}
      <section className="px-6 py-20 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-8 border border-white/10 rounded-sm hover:border-[#dc2626]/50 transition-colors">
            <div>
              <span className="text-xs text-[#dc2626] uppercase tracking-widest mb-2 block">Platform</span>
              <h2 className="text-3xl font-black mb-2">Staticly</h2>
              <p className="text-white/60">Static site builder. Deploy in seconds.</p>
            </div>
            <a
              href="https://staticly.jamstackforthewin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black font-bold text-sm hover:bg-[#dc2626] hover:text-white transition-colors"
            >
              Get Started →
            </a>
          </div>
        </div>
      </section>

      {/* Hosting */}
      <section className="px-6 py-20 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs text-[#dc2626] uppercase tracking-widest mb-12">
            Free Hosting Options
          </h2>
          
          <div className="divide-y divide-white/10">
            {hosting.map((h) => (
              <a
                key={h.name}
                href={`https://${h.name.toLowerCase().replace(/\s+/g, '')}.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-4 group"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-bold">{h.name}</span>
                  <span className="text-sm text-white/40 hidden sm:inline">{h.specs}</span>
                </div>
                <span className="text-sm text-[#dc2626] opacity-0 group-hover:opacity-100 transition-opacity">
                  Visit →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/40">
          <span>Built for the modern web</span>
          <span className="text-[#dc2626]">Under Construction</span>
          <span>{new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
