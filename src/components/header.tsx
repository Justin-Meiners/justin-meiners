import { GitBranch, Link, Mail, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-colors duration-700">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("home")}
          className="text-xl font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-700"
        >
          JM
        </button>
        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-700"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="text-sm hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-700"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-sm hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-700"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-700"
          >
            Contact
          </button>
        </div>
        <div className="flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors relative w-[18px] h-[18px]"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                  <motion.div
                    key="sun"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Sun size={18} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Moon size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          )}
          <a
            href="mailto:6justin14@gmail.com"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            aria-label="GitHub"
          >
            <GitBranch size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            aria-label="LinkedIn"
          >
            <Link size={18} />
          </a>
        </div>
      </nav>
    </header>
  );
}