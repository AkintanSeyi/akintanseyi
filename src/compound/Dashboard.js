import React, { useEffect, useRef, useState } from "react";
import { FaTwitter, FaLinkedin, FaWhatsapp, FaInstagram, FaGithub, FaExternalLinkAlt, FaCode, FaUser } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
// --- EMAILJS IMPORT ---
import emailjs from "@emailjs/browser";

// --- DEMO DATA ---
const demoExperience = [
  {
    company: "OurASAP",
    job: "Founder & Lead Engineer",
    date: "October 2025 - Present",
    location: "Lagos, Nigeria",
    field: [
      "Architecting a multi-channel commerce ecosystem integrating global sourcing with local logistics.",
      "Building high-performance mobile and web systems to streamline instant delivery pipelines.",
      "Leveraging AI and LLMs to automate business operations and enhance user experience."
    ]
  },
  {
    company: "Fiverr / Global Freelancing",
    job: "Senior Full Stack Consultant",
    date: "July 2024 - Present",
    location: "Remote",
    field: [
      "Providing expert software solutions for international clients, focusing on complex system migrations.",
      "Developing bespoke mobile applications and scalable web platforms using Python and JS.",
      "Maintaining a Top-Rated delivery standard by solving high-level technical challenges for global businesses."
    ]
  },
  {
    company: "NextGenTech",
    job: "Senior Software Engineer",
    date: "Dec 2022 - July 2024",
    location: "Lagos, Nigeria",
    field: [
      "Led the development of scalable enterprise applications and internal automation tools.",
      "Optimized backend performance and architected responsive React Native mobile interfaces.",
      "Collaborated on data-driven features to improve system reliability and user retention."
    ]
  },
  {
    company: "Synoption",
    job: "Full Stack Developer",
    date: "Sep 2021 - Dec 2022",
    location: "Remote",
    field: [
      "Built real-time financial dashboards and secure API infrastructures for data streaming.",
      "Enhanced frontend performance for multi-currency wallet systems and trading interfaces.",
      "Implemented security protocols to protect sensitive user financial information."
    ]
  },
  {
    company: "Fiverr",
    job: "Software Developer",
    date: "May 2020 - Aug 2021",
    location: "Remote",
    field: [
      "Developed and deployed over 50+ MVPs for startups and individuals globally.",
      "Gained deep expertise in the full software development lifecycle (SDLC) across various industries.",
      "Focused on rapid delivery and high-quality responsive web design."
    ]
  }
];

const demoProjects = [
  {
    id: 1,
    name: "OurASAP",
    image: "https://res.cloudinary.com/dvuq6vmiy/image/upload/v1767609963/Screenshot_2026-01-05_024436_apuxf8.png",
    p: "A professional service platform providing on-demand solutions.",
    web: "https://www.ourasap.com/",
    git: "https://github.com/AkintanSeyi/asap-frontend",
    tags: ["React", "Service"]
  },
  {
    id: 2,
    name: "Kwik App",
    image: "https://res.cloudinary.com/dvuq6vmiy/image/upload/v1767610072/Screenshot_2026-01-05_024649_z7wqt4.png",
    p: "A high-fidelity clone of the Kwik delivery and payment platform.",
    web: "https://kwikclone.vercel.app/",
    git: "https://github.com/AkintanSeyi/kwikclone",
    tags: ["Next.js", "FinTech"]
  },
  {
    id: 3,
    name: "Risevest Finanace",
    image: "https://res.cloudinary.com/dvuq6vmiy/image/upload/v1767610230/Screenshot_2026-01-05_024923_oaqcwp.png",
    p: "A sleek landing page clone of the Risevest investment app.",
    web: "https://risecloneapp.vercel.app/",
    git: "https://github.com/AkintanSeyi/risecloneapp",
    tags: ["React", "Investment"]
  },
  {
    id: 4,
    name: "Kippa App",
    image: "https://res.cloudinary.com/dvuq6vmiy/image/upload/v1767620669/Screenshot_2026-01-05_054249_ewj041.png",
    p: "Financial management and bookkeeping interface for small businesses.",
    web: "https://kippaclone.vercel.app/",
    git: "https://github.com/AkintanSeyi/kippaclone",
    tags: ["React", "SaaS"]
  },
  {
    id: 5,
    name: "NFT Marketplace",
    image: "https://res.cloudinary.com/dvuq6vmiy/image/upload/v1767610362/Screenshot_2026-01-05_025132_wg8hpg.png",
    p: "A modern UI for discovering and trading digital collectibles.",
    web: "https://akintanseyi.github.io/nft/",
    git: "https://github.com/AkintanSeyi/nft",
    tags: ["Web3", "UI/UX"]
  },
  {
    id: 6,
    name: "Furniture E-store",
    image: "https://res.cloudinary.com/dvuq6vmiy/image/upload/v1767610525/Screenshot_2026-01-05_025417_wmnqfl.png",
    p: "A minimalist e-commerce storefront for modern interior design.",
    web: "https://akintanseyi.github.io/funiture/",
    git: "https://github.com/AkintanSeyi/funiture",
    tags: ["E-commerce", "CSS"]
  }
];

const ModernPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSending, setIsSending] = useState(false); // For button loading state
  
  const form = useRef(); // Ref for the email form
  
  const sections = {
    home: useRef(null),
    skills: useRef(null),
    about: useRef(null),
    experience: useRef(null),
    portfolio: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const scrollTo = (ref) => {
    setIsMenuOpen(false);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // --- EMAIL SENDER FUNCTION ---
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Replace placeholders with your actual keys from EmailJS dashboard
    const SERVICE_ID = "service_q3o9kfi";
    const TEMPLATE_ID = "template_xjasolb";
    const PUBLIC_KEY = "f1t7cIqUi9wPyGJ3d";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          alert("Message sent successfully! I will get back to you soon.");
          e.target.reset(); // Clear form
      }, (error) => {
          alert("Failed to send message. Please try again or contact me via social media.");
          console.log(error.text);
      })
      .finally(() => {
          setIsSending(false);
      });
  };

  return (
    <main className="bg-[#050505] text-slate-200 min-h-screen font-sans selection:bg-indigo-500/30">
      
      {/* --- MODERN NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md border-b border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-black tracking-tighter text-white">AKINTAN SEYI<span className="text-indigo-500">.</span></h1>
          
          <div className="hidden md:flex gap-8 items-center text-sm font-medium uppercase tracking-widest">
            {Object.keys(sections).map((key) => (
              <button 
                key={key} 
                onClick={() => scrollTo(sections[key])} 
                className="hover:text-indigo-400 transition-colors cursor-pointer"
              >
                {key}
              </button>
            ))}
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white text-2xl">
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/10 p-8 flex flex-col gap-6 text-center md:hidden">
            {Object.keys(sections).map((key) => (
              <button key={key} onClick={() => scrollTo(sections[key])} className="text-lg capitalize">{key}</button>
            ))}
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section ref={sections.home} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />

        <div className="z-10 text-center px-6">
          <div data-aos="fade-down" className="inline-block px-4 py-1.5 mb-6 border border-indigo-500/30 rounded-full bg-indigo-500/5 text-indigo-400 text-xs font-bold tracking-[0.2em] uppercase">
            Available for hire
          </div>
          <h1 data-aos="zoom-out" className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-6">
            FULL STACK <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">DEVELOPER</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="max-w-xl mx-auto text-slate-400 text-lg md:text-xl mb-10">
            Crafting high-performance mobile and web experiences with a passion for clean code.
          </p>
          <div data-aos="fade-up" data-aos-delay="400" className="flex flex-wrap justify-center gap-4">
            <button onClick={() => scrollTo(sections.portfolio)} className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-indigo-500 hover:text-white transition-all duration-300">View Projects</button>
            <button onClick={() => scrollTo(sections.contact)} className="px-8 py-4 border border-white/10 rounded-full font-bold hover:bg-white/5 transition-all">Let's Talk</button>
          </div>
        </div>
      </section>

      {/* --- SKILLS GRID --- */}
      <section ref={sections.skills} className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.4em] text-indigo-500 uppercase mb-2">Technical</h2>
          <h3 className="text-4xl font-bold text-white">Stack & Expertise</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {["Next.js" , "Reactjs", "React Native" , "Javascript", "Python", "Fastapi", "NumPy", "Node.js", "Express", "TypeScript", "Django",  "PostgreSQL",  "Tailwind", "Firebase", "Supabase",  "Git", "D3.js",  "MongoDB", "Redux"].map((skill, i) => (
            <div key={skill} data-aos="fade-up" data-aos-delay={i * 50} className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl text-center hover:border-indigo-500/40 transition-all group">
              <p className="text-sm font-semibold group-hover:text-indigo-400 transition-colors">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section ref={sections.about} className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right" className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-800 shadow-2xl">
              <img 
                src="https://res.cloudinary.com/dvuq6vmiy/image/upload/v1767540771/unnamed_8_tibsa9.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
              />
            </div>
          </div>
          <div data-aos="fade-left">
            <h3 className="text-4xl font-bold text-white mb-6">Building the Future of Digital Infrastructure</h3>
            <p className="text-slate-400 leading-relaxed text-lg mb-6">
              I am <strong>Akintan Seyi</strong>, a Software Engineer, OAU graduate, and the founder of <strong>OurASAP</strong>. With over <strong>5 years of experience</strong>, I’ve moved beyond simple web development to engineering <strong>comprehensive digital ecosystems</strong> that solve complex real-world problems.
            </p>
            <p className="text-slate-400 leading-relaxed text-lg mb-6">
              My journey includes delivering high-impact solutions for global clients on <strong>Fiverr and Upwork</strong>, and contributing to innovative organizations like <strong>NextGenTech</strong> and <strong>Synoption</strong>. I specialize in <strong>JavaScript frameworks, Python, and AI-driven automation</strong>, bridging the gap between complex backend logic and high-performance mobile experiences.
            </p>
            <p className="text-slate-400 leading-relaxed text-lg mb-6">
              I am deeply passionate about <strong>intelligent systems</strong>—integrating Large Language Models (LLMs) to build software that thinks and scales. 
            </p>
            <div className="flex gap-6 text-2xl">
              <a href="https://www.linkedin.com/in/seyi-dumebi-akintan-17949a234" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="hover:text-indigo-400 cursor-pointer transition-colors" />
              </a>
              <a href="https://github.com/AkintanSeyi" target="_blank" rel="noopener noreferrer">
                <FaGithub className="hover:text-indigo-400 cursor-pointer transition-colors" />
              </a>
              <a href="https://x.com/akingz18" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="hover:text-indigo-400 cursor-pointer transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section ref={sections.experience} className="py-24 max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Work History</h2>
        <div className="space-y-12">
          {demoExperience.map((exp, i) => (
            <div key={i} data-aos="fade-up" className="relative pl-8 border-l border-white/10 group">
              <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-indigo-500 group-hover:scale-150 transition-transform" />
              <span className="text-indigo-400 font-mono text-sm uppercase tracking-widest">{exp.date}</span>
              <h4 className="text-2xl font-bold text-white mt-2">{exp.company}</h4>
              <p className="text-slate-300 font-medium mb-4">{exp.job}</p>
              <ul className="space-y-2">
                {exp.field.map((item, idx) => (
                  <li key={idx} className="text-slate-500 text-sm flex items-start gap-2">
                    <span className="text-indigo-500 mt-1">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* --- PORTFOLIO SECTION --- */}
      <section ref={sections.portfolio} className="py-24 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-5xl font-black text-white italic">Featured <br/> Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {demoProjects.map((proj) => (
              <div key={proj.id} data-aos="zoom-in-up" className="group relative bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden hover:border-indigo-500/30 transition-all">
                <div className="h-72 bg-slate-900 overflow-hidden">
                  <img src={proj.image} alt={proj.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition duration-700" />
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-white mb-3">{proj.name}</h4>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">{proj.p}</p>
                  <div className="flex gap-4">
                    <a href={proj.web} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white font-bold text-sm bg-indigo-600 px-5 py-2.5 rounded-full hover:bg-indigo-500 transition-colors">
                      Live Project <FaExternalLinkAlt size={12} />
                    </a>
                    <a href={proj.git} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-300 font-bold text-sm hover:text-white transition-colors">
                      Codebase <FaGithub size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION (UPDATED) --- */}
      <section ref={sections.contact} className="py-24 max-w-4xl mx-auto px-6">
        <div data-aos="fade-up" className="bg-gradient-to-br from-indigo-900/20 to-purple-900/10 border border-white/10 rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-5xl font-bold text-white mb-4">Let's Connect.</h2>
          <p className="text-slate-400 mb-10 max-w-lg mx-auto italic">Have a project in mind or just want to say hi? Drop a message below.</p>
          
          <form ref={form} onSubmit={sendEmail}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input 
                name="name" 
                type="text" 
                required 
                placeholder="Full Name" 
                className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:border-indigo-500 outline-none transition-colors" 
              />
              <input 
                name="reply_to" 
                type="email" 
                required 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:border-indigo-500 outline-none transition-colors" 
              />
            </div>
            <textarea 
              name="message" 
              required 
              rows="5" 
              placeholder="Message" 
              className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl mb-6 focus:border-indigo-500 outline-none transition-colors" 
            />
            <button 
              type="submit" 
              disabled={isSending}
              className="w-full py-4 bg-white text-black font-black uppercase tracking-widest rounded-2xl hover:bg-indigo-500 hover:text-white transition-all shadow-xl disabled:bg-slate-600 disabled:cursor-not-allowed"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default ModernPortfolio;