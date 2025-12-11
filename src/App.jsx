import React from "react";

export default function App() {
  return (
    <div className="bg-black text-white font-sans">

      {/* HERO SECTION WITH ANIMATIONS */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4 animate-fadein">
        <h1 className="text-5xl font-extrabold animate-slideup">Byte Branding Pvt. Ltd.</h1>
        <p className="mt-4 text-lg max-w-2xl animate-slideup delay-200">
          Building the future with Defence Robotics, Humanoid AI, Ultra-Secure
          Software, and Next-Gen Electronics.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 rounded-lg text-xl hover:bg-blue-700 animate-slideup delay-300">
          Explore Our Vision
        </button>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center animate-fadein">
        <h2 className="text-4xl font-bold mb-4">About Byte Branding</h2>
        <p className="text-lg opacity-80">
          Founded with the dream of making Pakistan technologically independent.
          We aim to build world-class robots, secure operating systems, AI
          platforms, and futuristic electronics.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center animate-fadein">
        <h2 className="text-4xl font-bold mb-10">Mission & Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-6 bg-gray-900 rounded-xl animate-slideup">
            <h3 className="text-2xl font-semibold">Our Mission</h3>
            <p className="opacity-80 mt-2">
              To make Pakistan technologically self-sufficient through robotics,
              AI, cybersecurity, and innovative hardware ecosystems.
            </p>
          </div>
          <div className="p-6 bg-gray-900 rounded-xl animate-slideup delay-200">
            <h3 className="text-2xl font-semibold">Our Vision</h3>
            <p className="opacity-80 mt-2">
              To build global-level products that can compete with Tesla, Boston
              Dynamics, Microsoft, Apple & OpenAI.
            </p>
          </div>
        </div>
      </section>

      {/* HUMANOID IMAGES */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center animate-fadein">
        <h2 className="text-4xl font-bold mb-10">Humanoid Robot Concepts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09b0?q=80&w=800&auto=format&fit=crop" className="rounded-xl shadow-xl" alt="humanoid1"/>
          <img src="https://images.unsplash.com/photo-1603791445824-0050bd436b47?q=80&w=800&auto=format&fit=crop" className="rounded-xl shadow-xl" alt="humanoid2"/>
          <img src="https://images.unsplash.com/photo-1581091012184-5c7b4aab1c8f?q=80&w=800&auto=format&fit=crop" className="rounded-xl shadow-xl" alt="humanoid3"/>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="py-20 px-6 bg-gray-950 animate-fadein">
        <h2 className="text-4xl font-bold text-center mb-10">Roadmap</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="p-6 bg-gray-900 rounded-xl animate-slideup">
            <h3 className="text-xl font-bold">Phase 1 — Learning & Research</h3>
            <p className="opacity-80 mt-2">
              Robotics, AI, OS development, PCB design & cybersecurity.
            </p>
          </div>
          <div className="p-6 bg-gray-900 rounded-xl animate-slideup delay-200">
            <h3 className="text-xl font-bold">Phase 2 — Small-scale Prototypes</h3>
            <p className="opacity-80 mt-2">Mini robots, basic OS kernel, encrypted apps.</p>
          </div>
          <div className="p-6 bg-gray-900 rounded-xl animate-slideup delay-300">
            <h3 className="text-xl font-bold">Phase 3 — First Public Launch</h3>
            <p className="opacity-80 mt-2">Beta OS + Security Apps + Robotics Testing.</p>
          </div>
        </div>
      </section>

      {/* INVESTORS SECTION */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center animate-fadein">
        <h2 className="text-4xl font-bold mb-10">Future Investors</h2>
        <p className="opacity-80 max-w-2xl mx-auto">
          We welcome future collaborations with angel investors, tech founders,
          government defence sectors, and innovation-focused companies.
        </p>
      </section>

      {/* CONTACT */}
      <section className="py-20 px-6 text-center bg-gray-950 animate-fadein">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <p className="text-lg">Email: <span className="text-green-400">bytebrandingcustomercare@gmail.com</span></p>
      </section>

      <footer className="py-6 text-center opacity-70 text-sm bg-black animate-fadein">
        © 2025 Byte Branding Pvt. Ltd. All Rights Reserved.
      </footer>
    </div>
  );
}
