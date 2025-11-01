import { useState, useEffect } from 'react';
import { Code2 } from 'lucide-react';

export function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Desenvolvedora Backend | Estudante de ADS | Estagiária Fullstack';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto text-center animate-fade-in">
        <div className="mb-6 flex justify-center">
          <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg">
            <Code2 size={48} className="text-white" />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-900 dark:text-white">
          Daniela Thais dos Santos Rodrigues
        </h1>

        <div className="h-16 mb-8">
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium">
            {text}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          Transformando ideias em código eficiente e escalável
        </p>

        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          Conheça meu trabalho
        </button>
      </div>
    </section>
  );
}
