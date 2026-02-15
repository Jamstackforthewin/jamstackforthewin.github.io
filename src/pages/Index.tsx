const Index = () => {
  const benefits = [
    { num: "01", title: "FAST", desc: "Pre-built. CDN. No delays." },
    { num: "02", title: "SECURE", desc: "No DB. No server. Static only." },
    { num: "03", title: "SCALE", desc: "Traffic spikes? No problem." },
    { num: "04", title: "CHEAP", desc: "Static costs less. Period." },
    { num: "05", title: "MODERN", desc: "Git. Previews. CI/CD." },
    { num: "06", title: "GLOBAL", desc: "Edge delivery. Everywhere." },
  ];

  const hosting = [
    { name: "CLOUDFLARE_PAGES", specs: "UNLIMITED", price: "$0" },
    { name: "VERCEL", specs: "100GB/MO", price: "$0" },
    { name: "NETLIFY", specs: "100GB/MO", price: "$0" },
    { name: "GITHUB_PAGES", specs: "1GB", price: "$0" },
    { name: "SURGE_SH", specs: "UNLIMITED", price: "$0" },
    { name: "RENDER", specs: "100GB/MO", price: "$0" },
  ];

  return (
    <div className="min-h-screen bg-[#fef08a] text-black font-mono">
      {/* Raw header - exposed structure */}
      <header className="border-b-4 border-black p-4">
        <div className="flex items-center justify-between">
          <div className="text-xs">
            [<span className="text-[#dc2626]">JAMSTACK</span>]
          </div>
          <div className="text-xs">
            v1.0.0 // {new Date().toISOString().split('T')[0]}
          </div>
        </div>
      </header>

      {/* Hero - raw, exposed, asymmetric */}
      <section className="p-4 md:p-8 border-b-4 border-black">
        <div className="max-w-none">
          <div className="flex flex-wrap items-baseline gap-4 mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-[12rem] font-black leading-none tracking-tighter uppercase">
              Jamstack
            </h1>
            <span className="text-xs md:text-sm border-2 border-black px-2 py-1">
              FOR THE WIN
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <p className="text-sm md:text-base border-l-4 border-black pl-4">
              JavaScript. APIs. Markup.
              <br />
              The architecture for the modern web.
            </p>
            <div className="text-xs text-right">
              <div>STATUS: ONLINE</div>
              <div>BUILD: STATIC</div>
              <div>CDN: ENABLED</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits - grid with exposed borders */}
      <section className="border-b-4 border-black">
        <div className="border-b-4 border-black p-2 bg-black text-[#fef08a]">
          <span className="text-xs">[ BENEFITS ] // 6 ITEMS FOUND</span>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <div 
              key={b.num}
              className="border-b-4 md:border-b-0 md:border-r-4 border-black p-4 last:border-r-0 hover:bg-black hover:text-[#fef08a] transition-colors"
              style={{ borderRightWidth: (i + 1) % 3 === 0 ? 0 : undefined }}
            >
              <div className="flex items-start gap-4">
                <span className="text-xs border-2 border-current px-1">{b.num}</span>
                <div>
                  <h3 className="font-black text-lg mb-2">{b.title}</h3>
                  <p className="text-sm">{b.desc}</p>
                </div>
              </div>            
            </div>
          ))}
        </div>
      </section>

      {/* Hosting - raw table */}
      <section className="border-b-4 border-black">
        <div className="border-b-4 border-black p-2 bg-[#dc2626] text-white">
          <span className="text-xs">[ HOSTING ] // FREE TIER ONLY</span>
        </div>
        
        <div>
          {hosting.map((h, i) => (
            <a
              key={h.name}
              href={`https://${h.name.toLowerCase().replace(/_/g, '')}.com`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 border-b-4 border-black last:border-b-0 hover:bg-black hover:text-[#fef08a] transition-colors group"
            >
              <div className="flex items-center gap-4">
                <span className="text-xs text-black/40 group-hover:text-[#fef08a]/40">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-black">{h.name}</span>
              </div>
              
              <div className="flex items-center gap-4 text-xs">
                <span className="hidden sm:inline">{h.specs}</span>
                <span className="border-2 border-current px-2 py-0.5">{h.price}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer - raw */}
      <footer className="p-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-xs">
            <div>Built for the modern web</div>
            <div className="text-black/40">No frameworks. Just HTML.</div>
          </div>
          
          <div className="text-xs text-right">
            <div>{new Date().getFullYear()} // ALL RIGHTS UNRESERVED</div>
            <div className="text-[#dc2626]">[ UNDER CONSTRUCTION ]</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
