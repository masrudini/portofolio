import { Mail, Github, Instagram } from "lucide-react";

const Footer = () => {
    return (
        <section id="contact" className="relative py-12 px-6 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 overflow-hidden">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">Let’s Connect</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-12">
                Feel free to reach out through any platform below.
                </p>

                <div className="flex justify-center gap-8 flex-wrap">
                    {/* Instagram */}
                    <a
                        href="https://instagram.com/mas.rudini"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center p-2 p-8 rounded-3xl 
                        backdrop-blur-xl bg-white/40 dark:bg-white/10
                        border border-white/30 dark:border-white/10
                        shadow-xl hover:shadow-2xl
                        transition-all duration-300 hover:-translate-y-2"
                    >
                        <Instagram className="w-8 h-8 text-pink-500 group-hover:scale-110 transition" />
                        <span className="mt-4 font-medium text-slate-800 dark:text-white">
                        Instagram
                        </span>
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:mas.rudini13@gmail.com"
                        className="group flex flex-col items-center p-8 rounded-3xl 
                        backdrop-blur-xl bg-white/40 dark:bg-white/10
                        border border-white/30 dark:border-white/10
                        shadow-xl hover:shadow-2xl
                        transition-all duration-300 hover:-translate-y-2"
                    >
                        <Mail className="w-8 h-8 mx-5 text-blue-500 group-hover:scale-110 transition" />
                        <span className="mt-4 font-medium text-slate-800 dark:text-white">
                        Email
                        </span>
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/masrudini"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center p-8 rounded-3xl 
                        backdrop-blur-xl bg-white/40 dark:bg-white/10
                        border border-white/30 dark:border-white/10
                        shadow-xl hover:shadow-2xl
                        transition-all duration-300 hover:-translate-y-2"
                    >
                        <Github className="w-8 h-8 mx-5 text-slate-800 dark:text-white group-hover:scale-110 transition" />
                        <span className="mt-4 font-medium text-slate-800 dark:text-white">
                        GitHub
                        </span>
                    </a>
                </div>
                <p className="mt-12 text-sm text-slate-600 dark:text-slate-400">© {new Date().getFullYear()} Masrudini</p>
            </div>
        </section>
    );
}

export default Footer