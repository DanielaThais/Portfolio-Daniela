import { Mail, Github, Linkedin, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Contato
        </h2>

        <p className="text-center text-xl text-gray-600 dark:text-gray-400 mb-12">
          Entre em contato comigo para oportunidades ou colaborações!
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <a
            href="mailto:daniela.thais64@gmail.com"
            className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
          >
            <div className="inline-flex p-4 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
              <Mail className="text-blue-600 dark:text-blue-400" size={32} />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
              E-mail
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              daniela.thais64@gmail.com
            </p>
          </a>

          <a
            href="https://github.com/DanielaThais"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
          >
            <div className="inline-flex p-4 bg-gray-100 dark:bg-gray-700 rounded-full mb-4 group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors">
              <Github className="text-gray-700 dark:text-gray-300" size={32} />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
              GitHub
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              @DanielaThais
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/daniela-thais-3529b2189/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
          >
            <div className="inline-flex p-4 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
              <Linkedin className="text-blue-600 dark:text-blue-400" size={32} />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
              LinkedIn
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Conecte-se comigo
            </p>
          </a>
        </div>

        <div className="mt-12 text-center">
          <a
            href="mailto:daniela.thais64@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Send size={20} />
            Enviar mensagem
          </a>
        </div>
      </div>
    </section>
  );
}
