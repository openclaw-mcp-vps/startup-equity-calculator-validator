export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Co-Founders
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Validate Equity Splits<br />
          <span className="text-[#58a6ff]">Before Legal Docs</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Calculate fair equity based on contributions, validate against market benchmarks, and catch red flags before you sign anything.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $15/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No legal docs required to start.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: "⚖️", title: "Weighted Algorithm", desc: "Scores idea, capital, time, skills, and risk fairly." },
          { icon: "📊", title: "Market Benchmarks", desc: "Validates your split against real startup data." },
          { icon: "🚩", title: "Red Flag Warnings", desc: "Flags imbalanced splits before they cause conflict." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white mb-1">{f.title}</div>
            <div className="text-[#8b949e] text-sm">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Multi-step equity calculator",
              "Weighted contribution scoring",
              "Market benchmark validation",
              "Red flag detection & warnings",
              "Downloadable equity report (PDF)",
              "Unlimited recalculations"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the equity calculator work?",
              a: "You enter each founder's contributions across five dimensions: idea origination, capital invested, time commitment, relevant skills, and risk taken. Our weighted algorithm scores each dimension and produces a recommended equity split."
            },
            {
              q: "What counts as a red flag?",
              a: "We flag splits where one founder holds over 70% without proportional contributions, where vesting schedules are missing, or where the split deviates significantly from market norms for your team size and stage."
            },
            {
              q: "Is this a substitute for a lawyer?",
              a: "No. This tool helps you arrive at a fair, data-backed starting point before engaging legal counsel — saving you time and money in those conversations."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} Equity Split Validator. Not legal advice.
      </footer>
    </main>
  );
}
