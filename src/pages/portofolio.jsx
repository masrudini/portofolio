import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Mail, Github, Instagram, ExternalLink, Menu, X, Sun, Moon } from "lucide-react";


function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = project.description.length > 180;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <Card className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
        <CardContent className="p-8">
          <h3 className="text-2xl font-semibold mb-4">
            {project.title}
          </h3>

          <p className={`text-slate-600 dark:text-slate-300 mb-3 leading-relaxed ${expanded ? "" : "line-clamp-4"}`}>
            {project.description}
          </p>

          {isLong && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-6"
            >
              {expanded ? "Tampilkan lebih sedikit" : "Baca selengkapnya"}
            </button>
          )}

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="text-xs bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <Button asChild variant="ghost" className="rounded-xl">
            <a href={project.url} target="_blank">
            Live Demo <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

const Portofolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const projects = [
    {
      title: "Smart Taruna Education CBT System",
      description:
        "Sistem try out berbasis web yang dirancang untuk mengelola bank soal, pelaksanaan ujian online, serta analisis hasil nilai siswa secara otomatis dan terstruktur. Dibangun untuk meningkatkan efisiensi evaluasi belajar serta memberikan insight performa siswa secara real-time bagi lembaga bimbingan belajar.",
      tech: ["Laravel", "Livewire", "Tailwind", "Flux"],
      url: "https://smarttarunaprima.com/",
    },
    {
      title: "BWSK I Pontianak Web Company Profile",
      description:
        "Website company profile resmi yang dirancang untuk meningkatkan transparansi informasi, publikasi kegiatan, serta kredibilitas institusi. Mengutamakan struktur informasi yang jelas, responsif, dan mudah dikelola.",
      tech: ["Laravel", "MySQL", "Bootstrap"],
      url: "https://sda.pu.go.id/balai/bwskalimantan1/",
    },
    {
      title: "Silica Suemeru Web Company Profile",
      description:
        "Website company profile modern yang menampilkan layanan, portofolio, dan identitas brand perusahaan secara profesional. Dirancang dengan pendekatan UI/UX yang clean dan performa optimal untuk mendukung strategi pemasaran digital",
      tech: ["Laravel", "Livewire", "Tailwind", "Flux"],
      url: "https://suemeruglobal.com/",
    },
  ];

  return (
    <div>
      <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors duration-500">
        {/* Navbar */}
        <nav className="fixed w-full backdrop-blur-md bg-white/70 dark:bg-slate-900/70 z-50">
          <div className="max-w-7xl mx-auto flex justify-end items-center p-4">

            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="hover:text-primary">About</a>
              <a href="#projects" className="hover:text-primary">Projects</a>
              <a href="#contact" className="hover:text-primary">Contact</a>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDark(!dark)}
                className="rounded-2xl"
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </Button>
            </div>

            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>

          {menuOpen && (
            <div className="md:hidden px-4 pb-4 space-y-2">
              <a href="#about" className="block">About</a>
              <a href="#projects" className="block">Projects</a>
              <a href="#contact" className="block">Contact</a>
            </div>
          )}
        </nav>

        {/* Hero */}
        <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-cover bg-center bg-no-repeat"
            style={ dark ? { backgroundImage: "url('./hero-dark.svg')" } : { backgroundImage: "url('./hero.svg')" }}>
              <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-5xl md:text-7xl font-bold mb-6"
              >
                Building Digital Experiences That Convert
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="max-w-2xl text-lg text-slate-600 dark:text-slate-300 mb-8"
              >
                Web Developer specializing in high-performance,
                scalable, and modern web applications for businesses.
              </motion.p>
        </section>

        {/* About */}
        <section id="about" className="py-24 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
              I help businesses transform ideas into powerful digital products.
              My focus is performance, clean architecture, and user-centered
              design. I deliver solutions that not only look good — but drive
              results.
            </p>
          </div>
          <img src="./foto.jpeg" alt="" className="rounded-3 w-1/6 mx-auto mt-5 rounded-lg hover:scale-105 transition-transform duration-300"/>
          <p className="text-xl font-bold text-center mt-5">Masrudini, S.Kom</p>
        </section>

        {/* Projects */}
        <section id="projects" className="py-24 px-6 bg-slate-50 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>

            <div className="grid md:grid-cols-3 gap-10">
             {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Let’s Build Something Great</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-10">
              Ready to elevate your business with a modern website or web app?
              Let’s collaborate.
            </p>

            <div className="flex justify-center gap-6 flex-wrap">
              <Button asChild className="rounded-2xl px-6" variant="outline">
                <a
                  href="https://www.instagram.com/mas.rudini/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="mr-2 h-4 w-4" /> Instagram
                </a>
              </Button>
              <Button asChild className="rounded-2xl px-6 shadow-lg" variant="outline">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mas.rudini13@gmail.com">
                  <Mail className="mr-2 h-4 w-4" /> Email
                </a>
              </Button>
             <Button asChild className="rounded-2xl px-6" variant="outline">
                <a
                  href="https://github.com/masrudini"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Portofolio;
