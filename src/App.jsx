import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white">
      {/* NAV */}
      <header className="fixed w-full z-30 top-0 left-0">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-indigo-600 flex items-center justify-center shadow-lg">
              <span className="font-extrabold text-lg">BB</span>
            </div>
            <div>
              <div className="text-sm font-semibold">Byte Branding</div>
              <div className="text-xs text-slate-400">Robotics • Defence • Secure Software</div>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 text-sm text-slate-300">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#robotics" className="hover:text-white">Robotics</a>
            <a href="#vision" className="hover:text-white">Vision</a>
            <a href="#investors" className="hover:text-white">Investors</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <main id="home" className="pt-24">
        <section className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-black font-semibold">Launching Soon • Zero to Prototype</div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Byte Branding Pvt. Ltd.
              <br />
              <span className="text-cyan-400">Robotics • AI • Cybersecurity</span>
            </h1>
            <p className="text-slate-300 max-w-xl">
              We design defence-ready robots, humanoid assistants and the world’s safest software — built from the ground up in Pakistan.
            </p>

            <div className="flex gap-4">
              <a href="#robotics" className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-cyan-400 text-black rounded-lg font-semibold shadow-lg">Explore Robots</a>
              <a href="#contact" className="px-6 py-3 border border-slate-700 rounded-lg text-sm">Get Involved</a>
            </div>

            <div className="flex items-center gap-4 text-sm text-slate-400 mt-6">
              <div>Founder: <strong className="text-white">Muhammad Bilal</strong></div>
              <div>•</div>
              <div>Karachi, Pakistan</div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09b0?q=80&w=1200&auto=format&fit=crop" alt="Humanoid" className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute -bottom-6 right-6 bg-gradient-to-r from-cyan-400 to-indigo-600 text-black px-4 py-2 rounded-xl font-semibold shadow-lg">Open to Collaborators</div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="bg-gradient-to-b from-transparent to-slate-900 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4">What we build</h2>
            <p className="text-slate-300 max-w-2xl mb-8">From software-first prototypes to hardware-ready robots — we iterate fast and public.</p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-900 rounded-xl border border-slate-800 hover:scale-105 transition-transform">
                <div className="text-xl font-semibold">Robotics Development</div>
                <p className="text-slate-400 mt-2 text-sm">Autonomous rovers, humanoids, industrial robot arms.</p>
              </div>
              <div className="p-6 bg-slate-900 rounded-xl border border-slate-800 hover:scale-105 transition-transform">
                <div className="text-xl font-semibold">AI & Autonomy</div>
                <p className="text-slate-400 mt-2 text-sm">Computer vision, navigation, perception & mission AI.</p>
              </div>
              <div className="p-6 bg-slate-900 rounded-xl border border-slate-800 hover:scale-105 transition-transform">
                <div className="text-xl font-semibold">Cybersecurity</div>
                <p className="text-slate-400 mt-2 text-sm">Secure OS, encrypted comms, threat-hardened systems.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ROBOTICS */}
        <section id="robotics" className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">Robotics & Humanoids</h2>
            <p className="text-slate-300 mb-8 max-w-3xl">Prototype -> Test -> Improve. Our first public prototypes focus on surveillance rovers and collaborative humanoid assistants for dangerous tasks.</p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800">
                <img src="https://images.unsplash.com/photo-1603791445824-0050bd436b47?q=80&w=1200&auto=format&fit=crop" alt="robot 1" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <div className="font-semibold">Surveillance Rover</div>
                  <div className="text-slate-400 text-sm mt-2">All-terrain autonomous rover with AI vision.</div>
                </div>
              </div>

              <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800">
                <img src="https://images.unsplash.com/photo-1581091012184-5c7b4aab1c8f?q=80&w=1200&auto=format&fit=crop" alt="robot 2" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <div className="font-semibold">Humanoid Assistant</div>
                  <div className="text-slate-400 text-sm mt-2">Human-like robot for rescue & industrial support.</div>
                </div>
              </div>

              <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800">
                <img src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09b0?q=80&w=1200&auto=format&fit=crop" alt="robot 3" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <div className="font-semibold">Robotic Arm</div>
                  <div className="text-slate-400 text-sm mt-2">Precision manipulators for manufacturing & defense tasks.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VISION */}
        <section id="vision" className="py-20 bg-gradient-to-b from-slate-950 to-black">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">Mission & Vision</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
                <h3 className="font-semibold">Our Mission</h3>
                <p className="text-slate-400 mt-2">To empower national security and civilian life with reliable robotics and unbreakable software.</p>
              </div>
              <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
                <h3 className="font-semibold">Our Vision</h3>
                <p className="text-slate-400 mt-2">A world where robotics and security make communities safer and more capable.</p>
              </div>
            </div>
          </div>
        </section>

        {/* INVESTORS */}
        <section id="investors" className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4">Investors & Partners</h2>
            <p className="text-slate-300 mb-6">We partner with universities, labs and defense organizations. Interested in investing or collaborating? Reach out below.</p>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="p-6 bg-slate-900 rounded-xl border border-slate-800 text-center">Tech Labs</div>
              <div className="p-6 bg-slate-900 rounded-xl border border-slate-800 text-center">AI Research</div>
              <div className="p-6 bg-slate-900 rounded-xl border border-slate-800 text-center">Defense</div>
              <div className="p-6 bg-slate-900 rounded-xl border border-slate-800 text-center">Universities</div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20 bg-gradient-to-b from-slate-950 to-black">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p className="text-slate-300 mb-6">For collaborations, pilot projects or investment opportunities:</p>
            <a href="mailto:bytebrandingcustomercare@gmail.com" className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-indigo-600 text-black font-semibold">bytebrandingcustomercare@gmail.com</a>
          </div>
        </section>

        <footer className="py-8 text-center text-slate-400">
          © {new Date().getFullYear()} Byte Branding Pvt. Ltd. — All rights reserved.
        </footer>
      </main>
    </div>
  );
}
