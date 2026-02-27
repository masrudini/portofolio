import { useEffect, useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { ExternalLink, Code, Database, Server, Cpu, Globe } from "lucide-react";
import {Button}  from "../components/ui/button";
import {motion} from "framer-motion";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";
import FloatingIcons from "../components/ui/floatingIcon";


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
      <Card className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg hover:-translate-y-2 hover:shadow-2xl transition duration-500">
        <CardContent>
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
                className="text-xs font-mono bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 px-3 py-1 rounded-full"
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

  const floatingIcons = [
    { Icon: Code, top: "10%", left: "15%" },
    { Icon: Database, top: "25%", left: "80%" },
    { Icon: Server, top: "70%", left: "10%" },
    { Icon: Cpu, top: "60%", left: "75%" },
    { Icon: Globe, top: "40%", left: "50%" },
    ];

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

  const roles = [
    "Full-Stack Developer",
    "Laravel Specialist",
    "System Architect",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === roles.length) return;

    if (subIndex === roles[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 40 : 80);

    setText(roles[index].substring(0, subIndex));

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        (window.scrollY / totalHeight) * 100;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:20px_20px] opacity-7 pointer-events-none"></div>
        <div className="fixed top-0 left-0 h-1 bg-blue-600 z-[9999] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}></div>

        {/* Navbar */}
        <Navbar />

        {/* Hero */}
        <section
          className="relative min-h-screen flex flex-col justify-center items-center text-center px-6"
        >
          <div className="absolute inset-0 bg-white/60 dark:bg-slate-900/70 backdrop-blur-sm"></div>
          <FloatingIcons icon={floatingIcons} />

          <div className="relative z-10 max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
            >
              Hi, I’m{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Masrudini
              </span>
              <br />
              <span className="text-slate-700 dark:text-slate-300">
                {text}
                <span className="animate-pulse">|</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8"
            >
              I build scalable web applications, modern UI experiences,
              and high-performance systems for businesses.
            </motion.p>

            <div className="flex justify-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-24 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            
            <div className="flex justify-center">
              <img
                src="/foto.jpg"
                alt="Masrudini"
                className="w-72 rounded-2xl shadow-2xl hover:scale-105 transition duration-500"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-6">
                About <span className="text-blue-600 dark:text-blue-400">Me</span>
              </h2>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg mb-6">
                I specialize in building secure, scalable, and maintainable web systems.
                My focus is clean architecture, performance optimization, and modern
                frontend development.
              </p>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl">
                  ⚡ Performance Oriented
                </div>
                <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl">
                  🧠 Clean Architecture
                </div>
                <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl">
                  🔒 Secure Systems
                </div>
                <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl">
                  🚀 Scalable Apps
                </div>
              </div>
            </div>

          </div>
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
        <Footer />
      </div>
    </div>
  );
}

export default Portofolio;
