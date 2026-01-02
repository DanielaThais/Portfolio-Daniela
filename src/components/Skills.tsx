import { Server, Globe, Database, GitBranch, Wrench } from 'lucide-react';

const skillCategories = [
  {
    icon: Server,
    title: 'Backend',
    skills: ['PHP', 'Laravel', 'Java', 'Python'],
    color: 'blue'
  },
  {
    icon: Globe,
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    color: 'purple'
  },
  {
    icon: Database,
    title: 'Banco de Dados',
    skills: ['MySQL', 'PostgreSQL'],
    color: 'green'
  },
  {
    icon: GitBranch,
    title: 'Versionamento',
    skills: ['Git', 'GitHub', 'GitLab'],
    color: 'orange'
  },
  {
    icon: Wrench,
    title: 'Ferramentas',
    skills: ['VS Code', 'MySQL Workbench', 'n8n', 'Agentes de IA'],
    color: 'pink'
  }
];

const colorClasses = {
  blue: {
    bg: 'bg-blue-100 dark:bg-blue-900/30',
    text: 'text-blue-600 dark:text-blue-400',
    badge: 'bg-blue-200 dark:bg-blue-800/50 text-blue-700 dark:text-blue-300'
  },
  purple: {
    bg: 'bg-purple-100 dark:bg-purple-900/30',
    text: 'text-purple-600 dark:text-purple-400',
    badge: 'bg-purple-200 dark:bg-purple-800/50 text-purple-700 dark:text-purple-300'
  },
  green: {
    bg: 'bg-green-100 dark:bg-green-900/30',
    text: 'text-green-600 dark:text-green-400',
    badge: 'bg-green-200 dark:bg-green-800/50 text-green-700 dark:text-green-300'
  },
  orange: {
    bg: 'bg-orange-100 dark:bg-orange-900/30',
    text: 'text-orange-600 dark:text-orange-400',
    badge: 'bg-orange-200 dark:bg-orange-800/50 text-orange-700 dark:text-orange-300'
  },
  pink: {
    bg: 'bg-pink-100 dark:bg-pink-900/30',
    text: 'text-pink-600 dark:text-pink-400',
    badge: 'bg-pink-200 dark:bg-pink-800/50 text-pink-700 dark:text-pink-300'
  }
};

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Habilidades
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const colors = colorClasses[category.color as keyof typeof colorClasses];

            return (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex p-3 rounded-lg ${colors.bg} mb-4`}>
                  <Icon className={colors.text} size={28} />
                </div>

                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${colors.badge}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
