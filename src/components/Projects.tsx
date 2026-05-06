import { User, Calculator, Shield, GraduationCap, ExternalLink } from 'lucide-react';

const projects = [
  {
    icon: User,
    title: 'Projeto Conta no Banco',
    description: 'CRUD para sistema de conta no banco, onde é permitido fazer o depósito de determinado valor após o cadastro. O objetivo é praticar conceitos inicias de entradas de dados com Scanner, tipos primitivos, estruturas básicas e exibição de mensagens no terminal.',
    tech: ['Java'],
    color: 'blue',
    gitHubLink: 'https://github.com/DanielaThais/Projeto-Conta-Banco'
  },
  {
    icon: Calculator,
    title: 'Calculadora',
    description: 'Projeto para reforçar lógica de programação e manipulação do Java. O objetivo é praticar os fundamentos da linguagem Java, como listas, encapsulamento, estruturas de controle e organização modular.',
    tech: ['Java'],
    color: 'purple',
    gitHubLink: 'https://github.com/DanielaThais/Calculadora'
  },
  {
    icon: Shield,
    title: 'Guardião DF',
    description: 'Projeto feito para o Hackathon Participa DF, que objetiva aproximar governo e sociedade por meio da tecnologia e incentivar soluções inovadoras para fortalecer a transparência e a participação cidadã. Para este caso, o modelo será capaz de identificar automaticamente pedidos públicos que contenham dados pessoais.',
    tech: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'Blade', 'JavaScript', 'CSS'],
    color: 'green',
    gitHubLink: 'https://github.com/DanielaThais/guardiao-df'
  },
   {
    icon: GraduationCap,
    title: 'Inscrição em Bootcamp',
    description: 'Projeto em Java que simula um ambiente de bootcamp, com classes como Bootcamp, Curso, Mentoria, Aluno/Dev e Professor. A aplicação permite representar a inscrição e evolução dos alunos nos conteúdos, refletindo um cenário real de aprendizado. O foco principal é aplicar, na prática, os pilares da Programação Orientada a Objetos como abstração, encapsulamento, herança e polimorfismo.',
    tech: ['Java'],
    color: 'pink',
    gitHubLink: 'https://github.com/DanielaThais/desafio-dio-POO'
  }
];

const colorClasses = {
  blue: {
    bg: 'bg-blue-100 dark:bg-blue-900/30',
    text: 'text-blue-600 dark:text-blue-400',
    badge: 'bg-blue-200 dark:bg-blue-800/50 text-blue-700 dark:text-blue-300',
    gradient: 'from-blue-500 to-blue-600'
  },
  purple: {
    bg: 'bg-purple-100 dark:bg-purple-900/30',
    text: 'text-purple-600 dark:text-purple-400',
    badge: 'bg-purple-200 dark:bg-purple-800/50 text-purple-700 dark:text-purple-300',
    gradient: 'from-purple-500 to-purple-600'
  },
  green: {
    bg: 'bg-green-100 dark:bg-green-900/30',
    text: 'text-green-600 dark:text-green-400',
    badge: 'bg-green-200 dark:bg-green-800/50 text-green-700 dark:text-green-300',
    gradient: 'from-green-500 to-green-600'
  },
  pink: {
    bg: 'bg-pink-100 dark:bg-pink-900/30',
    text: 'text-pink-600 dark:text-pink-400',
    badge: 'bg-pink-200 dark:bg-pink-800/50 text-pink-700 dark:text-pink-300',
    gradient: 'from-pink-500 to-pink-600'
  }
};

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Projetos
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
          Alguns dos projetos que desenvolvi e que estou desenvolvendo durante minha jornada de aprendizado e experiência profissional.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const colors = colorClasses[project.color as keyof typeof colorClasses];

            return (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${colors.gradient}`} />

                <div className="p-6">
                  <div className={`inline-flex p-3 rounded-lg ${colors.bg} mb-4`}>
                    <Icon className={colors.text} size={28} />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${colors.badge}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={project.gitHubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                  >
                    Ver repositório
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
