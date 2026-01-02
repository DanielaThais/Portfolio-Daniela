import { GraduationCap, Briefcase } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Sobre mim
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-left">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Olá! Me chamo <span className="font-semibold text-blue-600 dark:text-blue-400">Daniela Thais</span>,
              desenvolvedora backend apaixonada por resolver problemas com código enquanto aprendo. Tenho 23 anos e atualmente
              curso <span className="font-semibold">Análise e Desenvolvimento de Sistemas</span> no IESB, em Brasília.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              No momento, atuo como estagiária de desenvolvimento na
              <span className="font-semibold"> MAIHUB </span>, onde aprimoro minhas habilidades
              em n8n, agentes de IA, testes funcionais, automações, integrações de sistemas,testes de qualidade (QA), validação de funcionalidades,
              monitoramento de performance e apoio na identificação e correção de falhas técnicas.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Busco constantemente evoluir, criar soluções eficientes e colaborar em projetos que façam a diferença.
            </p>
          </div>

          <div className="space-y-6 animate-fade-in-right">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <GraduationCap className="text-blue-600 dark:text-blue-400" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Educação</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Análise e Desenvolvimento de Sistemas
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    IESB - Instituto de Ensino Superior de Brasília
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <Briefcase className="text-purple-600 dark:text-purple-400" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Hospital das Forças Armadas - HFA</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Estagiária em Desenvolvimento Fullstack
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Jul - Dez (2025)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <Briefcase className="text-purple-600 dark:text-purple-400" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">MAIHUB</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Estagiária em Desenvolvimento e Automação
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Jan - Atualmente (2026)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
