import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export function Header({ isDark, toggleTheme }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 transition-colors">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Daniela Thais
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Habilidades
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contato
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('about')}
              className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Habilidades
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contato
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
