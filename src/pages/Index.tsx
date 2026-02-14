const Index = () => {
  const benefits = [
    {
      title: "⚡ Blazing Fast",
      desc: "Pre-built pages served from CDN. No server rendering delays."
    },
    {
      title: "🔒 Secure by Default",
      desc: "No database or server to hack. Just static files."
    },
    {
      title: "📈 Infinitely Scalable",
      desc: "CDN handles traffic spikes without breaking a sweat."
    },
    {
      title: "💰 Cheaper Hosting",
      desc: "Static files cost less to host than dynamic servers."
    },
    {
      title: "🚀 Better DX",
      desc: "Git-based workflows, instant previews, modern tooling."
    },
    {
      title: "🌍 Global Edge",
      desc: "Content served from locations closest to your users."
    }
  ];

  const hostingOptions = [
    {
      name: "Cloudflare Pages",
      desc: "Unlimited bandwidth, 500 builds/month",
      url: "https://pages.cloudflare.com"
    },
    {
      name: "Vercel",
      desc: "100GB bandwidth, 6,000 build minutes/month",
      url: "https://vercel.com"
    },
    {
      name: "Netlify",
      desc: "100GB bandwidth, 300 build minutes/month",
      url: "https://netlify.com"
    },
    {
      name: "GitHub Pages",
      desc: "1GB storage, soft bandwidth limits",
      url: "https://pages.github.com"
    },
    {
      name: "Surge.sh",
      desc: "Unlimited publishing, CLI deployment",
      url: "https://surge.sh"
    },
    {
      name: "Render",
      desc: "100GB bandwidth, automatic deploys",
      url: "https://render.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
          Jamstack for the Win
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 max-w-2xl">
          Modern web architecture based on JavaScript, APIs, and Markup. 
          Build faster, safer, and cheaper websites.
        </p>
      </section>

      {/* Benefits */}
      <section className="px-4 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">
          Why Jamstack?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div 
              key={i} 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition"
            >
              <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
              <p className="text-slate-400">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hosting */}
      <section className="px-4 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-pink-400">
          Free Hosting Options
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hostingOptions.map((h, i) => (
            <a
              key={i}
              href={h.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-cyan-400/50 transition group"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition">
                {h.name}
              </h3>
              <p className="text-slate-400">{h.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-slate-500">
        <p>Built with ❤️ for the modern web</p>
      </footer>
    </div>
  );
};

export default Index;
