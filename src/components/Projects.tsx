import { Code2, Globe, Target, ExternalLink } from 'lucide-react';

const projects = [
  {
    icon: Code2,
    title: 'Sistema de Agendamento (Java CRUD)',
    description: 'Aplicação desktop para agendamento de serviços, utilizando Java e banco de dados relacional. Interface intuitiva com operações completas de CRUD (ainda em andamento).',
    tech: ['Java', 'MySQL', 'Swing'],
    color: 'blue',
    gitHubLink: 'https://github.com/DanielaThais/SistemaDeAgendamento'
  },
  {
    icon: Globe,
    title: 'Calculadora',
    description: 'Projeto para reforçar lógica de programação e manipulação do Java. O objetivo é praticar os fundamentos da linguagem Java, como listas, encapsulamento, estruturas de controle e organização modular.',
    tech: ['Java'],
    color: 'purple',
    gitHubLink: 'https://github.com/DanielaThais/Calculadora'
  },
  {
    icon: Target,
    title: 'Gestão de Jogos (projeto-app)',
    description: 'CRUD básico feito em PHP e Laravel, estilizado através do Bootstrap, utilizado para cadastrar, visualizar, editar e excluir jogos cadastrados pelo usuário.',
    tech: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
    color: 'green',
    gitHubLink: 'https://github.com/DanielaThais/projeto-app'
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

                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
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
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
