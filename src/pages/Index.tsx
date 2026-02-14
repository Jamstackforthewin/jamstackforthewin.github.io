import { useEffect, useState } from "react";

const Index = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Jamstack for the Win";
  const [cursorVisible, setCursorVisible] = useState(true);

  // Typewriter effect for heading
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  // Blinking cursor
  useEffect(() => {
    const cursor = setInterval(() => {
      setCursorVisible(v => !v);
    }, 530);
    return () => clearInterval(cursor);
  }, []);

  const benefits = [
    { icon: "⚡", title: "BLAZING FAST", desc: "Pre-built pages served from CDN. Zero server render delays." },
    { icon: "🔒", title: "SECURE", desc: "No database or server to exploit. Static files only." },
    { icon: "∞", title: "SCALABLE", desc: "CDN handles traffic spikes without breaking a sweat." },
    { icon: "$", title: "CHEAPER", desc: "Static hosting costs a fraction of dynamic servers." },
    { icon: "⚙️", title: "MODERN DX", desc: "Git workflows, instant previews, modern tooling." },
    { icon: "🌐", title: "GLOBAL EDGE", desc: "Content served from the closest location to users." },
  ];

  const hostingOptions = [
    { name: "CLOUDFLARE_PAGES", desc: "Unlimited bandwidth • 500 builds/mo", url: "https://pages.cloudflare.com", status: "ACTIVE" },
    { name: "VERCEL", desc: "100GB bandwidth • 6,000 build min/mo", url: "https://vercel.com", status: "ACTIVE" },
    { name: "NETLIFY", desc: "100GB bandwidth • 300 build min/mo", url: "https://netlify.com", status: "ACTIVE" },
    { name: "GITHUB_PAGES", desc: "1GB storage • Soft bandwidth limits", url: "https://pages.github.com", status: "ACTIVE" },
    { name: "SURGE.SH", desc: "Unlimited publishing • CLI deploy", url: "https://surge.sh", status: "ACTIVE" },
    { name: "RENDER", desc: "100GB bandwidth • Auto deploys", url: "https://render.com", status: "ACTIVE" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#00ff41] font-mono overflow-x-hidden relative">
      {/* Scan lines overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,65,0.03) 2px, rgba(0,255,65,0.03) 4px)",
          backgroundSize: "100% 4px"
        }}
      />
      
      {/* Grid background */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #00ff41 1px, transparent 1px),
            linear-gradient(to bottom, #00ff41 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px"
        }}
      />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-6">
        {/* Decorative corner brackets */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-[#00ff41]/30" />
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-[#00ff41]/30" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-[#00ff41]/30" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-[#00ff41]/30" />

        <div className="text-center max-w-4xl">
          <p className="text-[#00ff41]/50 text-sm tracking-[0.3em] mb-6">SYSTEM.INIT // JAMSTACK_PROTOCOL</p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
            <span className="text-[#ff9d00]">&gt;</span> {typedText}
            <span className={`inline-block w-3 h-8 bg-[#00ff41] ml-2 ${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
          </h1>
          
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#00ff41] to-transparent mx-auto my-8" />
          
          <p className="text-lg md:text-xl text-[#00ff41]/70 max-w-2xl mx-auto leading-relaxed">
            JavaScript. APIs. Markup. 
            <span className="text-[#ff9d00]"> The architecture for the modern web.</span>
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 flex flex-col items-center gap-2 text-[#00ff41]/40 text-xs">
          <span className="tracking-widest">[SCROLL]</span>
          <div className="w-px h-8 bg-[#00ff41]/20 animate-pulse" />
        </div>
      </section>

      {/* Benefits - Terminal Style */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="border border-[#00ff41]/20 bg-[#00ff41]/[0.02] rounded-sm">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#00ff41]/20 bg-[#00ff41]/[0.03]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
            <span className="ml-4 text-xs text-[#00ff41]/50 tracking-wider">BENEFITS.exe</span>
          </div>
          
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="text-[#ff9d00]">$</span> ./list-benefits --all
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((b, i) => (
                <div 
                  key={i}
                  className="group border border-[#00ff41]/10 bg-[#0a0a0f] p-5 hover:border-[#00ff41]/40 transition-all duration-300 hover:translate-y-[-2px]"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl filter drop-shadow-[0_0_8px_rgba(0,255,65,0.5)]">{b.icon}</span>
                    <div>
                      <h3 className="font-bold text-[#ff9d00] mb-1 tracking-wider text-sm">{b.title}</h3>
                      <p className="text-[#00ff41]/60 text-sm leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hosting Options - Data Grid */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="mb-8 flex items-center gap-3">
          <span className="text-[#ff9d00]">$</span>
          <h2 className="text-2xl font-bold tracking-wider">HOSTING_PROVIDERS --free-tier</h2>
        </div>
        
        <div className="border border-[#00ff41]/20 overflow-hidden">
          {/* Table header */}
          <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-[#00ff41]/20 bg-[#00ff41]/[0.05] text-xs tracking-widest text-[#00ff41]/50">
            <div className="col-span-3">PROVIDER_ID</div>
            <div className="col-span-6">SPECIFICATIONS</div>
            <div className="col-span-2">STATUS</div>
            <div className="col-span-1">LINK</div>
          </div>
          
          {/* Table rows */}
          {hostingOptions.map((h, i) => (
            <a
              key={i}
              href={h.url}
              target="_blank"
              rel="noopener noreferrer"
              className="grid grid-cols-12 gap-4 px-6 py-5 border-b border-[#00ff41]/10 hover:bg-[#00ff41]/[0.03] transition-colors group items-center"
            >
              <div className="col-span-3 font-bold text-[#ff9d00] tracking-wider group-hover:text-[#00ff41] transition-colors">
                {h.name}
              </div>
              <div className="col-span-6 text-[#00ff41]/60 text-sm">
                {h.desc}
              </div>
              <div className="col-span-2">
                <span className="inline-flex items-center gap-2 text-xs">
                  <span className="w-2 h-2 rounded-full bg-[#27ca40] animate-pulse" />
                  {h.status}
                </span>
              </div>
              <div className="col-span-1">
                <span className="text-[#00ff41]/40 group-hover:text-[#00ff41] transition-colors">→</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#00ff41]/10 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#00ff41]/40 tracking-widest">
          <p>[JAMSTACK_PROTOCOL] v2.0.26</p>
          <p>Built with &lt;/&gt; for the modern web</p>
          <p>{new Date().getFullYear()} // ALL_SYSTEMS operational</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
