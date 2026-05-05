import { GraduationCap, Briefcase } from "lucide-react";

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
              Olá! Me chamo{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Daniela Thais
              </span>
              , sou desenvolvedora FullStack apaixonada por resolver problemas
              com código enquanto aprendo. Tenho 23 anos e atualmente curso{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Análise e Desenvolvimento de Sistemas
              </span>{" "}
              no IESB (Instituto de Educação Superior de Brasília).
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              No momento busco oportunidade como Desenvolvedora ou Analista
              Júnior nas áreas de Suporte, Requisitos ou Testes, onde eu possa
              aplicar meus conhecimentos em tecnologia, contribuir com soluções
              eficientes e evoluir rapidamente na área.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Atuei como estagiária de desenvolvimento na{" "} 
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                MAIHUB
              </span>
              , onde desenvolvi minhas habilidades em n8n, agentes de IA (Flowise), testes
              funcionais e manuais, automações, integrações de sistemas,testes
              de qualidade (QA), validação de funcionalidades, monitoramento de
              performance e apoio na identificação e correção de falhas
              técnicas.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Também tenho uma experiência prévia no{" "} 
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Hospital das Forças Armadas
              </span>
              , desenvolvi competências técnicas em PHP, Laravel, arquitetura MVC e Bootstrap, aliadas a habilidades interpessoais. Essa vivência me proporcionou uma visão completa do ciclo de desenvolvimento de software, permitindo atuar não apenas na implementação, mas também na compreensão das necessidades do cliente e dos objetivos do projeto.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Busco constantemente evoluir, criar soluções eficientes e
              colaborar em projetos que façam a diferença.
            </p>
          </div>

          <div className="space-y-6 animate-fade-in-right">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <GraduationCap
                    className="text-blue-600 dark:text-blue-400"
                    size={28}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    Educação
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    <span className="font-bold">Java Completo</span> - Udemy
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Fundamentos, Estruturas de Controle, Herança, POO, Lambdas,
                    Spring Boot, Banco de Dados, Javas Desktop com Swig, além de
                    outros conceitos.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <GraduationCap
                    className="text-blue-600 dark:text-blue-400"
                    size={28}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    Educação
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    <span className="font-bold">
                      Análise e Desenvolvimento de Sistemas
                    </span> - IESB (Instituto de Ensino Superior de Brasília)
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500"> 
                    Janeiro (2023) - atualmente                    
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <Briefcase
                    className="text-purple-600 dark:text-purple-400"
                    size={28}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    Hospital das Forças Armadas - HFA
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Estagiária em Desenvolvimento Fullstack
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Jul - Dez (2025)                    
                  </p>
                  <span className="text-sm text-gray-600 dark:text-gray-600 ">Desenvolvi aplicações web completas com foco em PHP e Laravel, estrutura MVC, ajax e manipulação de dados com Postgree. Além do uso de blade, JavaScript e Bootstrap no FrontEnd.</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <Briefcase
                    className="text-purple-600 dark:text-purple-400"
                    size={28}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    MAIHUB
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Estagiária em Desenvolvimento e Automação
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Jan - Atualmente (2026)
                  </p>
                   <span className="text-sm text-gray-600 dark:text-gray-600 ">Desenvolvi automações com n8n, agentes de IA através do Flowise, bem como uso de React, Typescript e Supabase. Também pude acompanhar como são feitos testes funcionais e manuais e documentação.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
