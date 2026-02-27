import { Sun, Moon, Menu, X } from "lucide-react";
import {Button} from "./button";
import { useState, useEffect } from "react";

const Navbar= () => {
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

    return (
        <nav className="fixed w-full backdrop-blur-xl bg-white/60 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 z-50">
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
               <Button
                variant="ghost"
                size="icon"
                onClick={() => setDark(!dark)}
                className="rounded-2xl"
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </Button>
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
    )
}

export default Navbar;