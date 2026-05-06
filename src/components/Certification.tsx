import { File } from "lucide-react";

export function Certification() {
  return (
    <section
      id="certification"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Certificados
        </h2>

        <p className="text-center text-xl text-gray-600 dark:text-gray-400 mb-12">
          Confira meus certificados adquiridos ao longo do tempo.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
          <a
            href="https://web.dio.me/certificates"
            target="_blank"
            rel="noopener noreferrer"
            className="animated-border-card group block p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:scale-105 transition-all duration-300 text-center"
          >
            <div className="inline-flex p-4 bg-pink-100 dark:bg-pink-900/30 rounded-full mb-4 group-hover:bg-pink-200 dark:group-hover:bg-pink-900/50 transition-colors">
              <File className="text-pink-600 dark:text-pink-400" size={32} />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
              Certificados DIO
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              (Digital Innovation One)
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/daniela-thais-3529b2189/overlay/Certifications/2059314503/treasury/?profileId=ACoAACx2xm4BO-oYfXFyeQ-ttuQPU9dDrU0DKlY"
            target="_blank"
            rel="noopener noreferrer"
            className="animated-border-card group block p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:scale-105 transition-all duration-300 text-center"
          >
            <div className="inline-flex p-4 bg-pink-100 dark:bg-pink-900/30 rounded-full mb-4 group-hover:bg-pink-200 dark:group-hover:bg-pink-900/50 transition-colors">
              <File className="text-pink-600 dark:text-pink-400" size={32} />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
              Hackathon
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Participa DF
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
