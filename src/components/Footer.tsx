import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 px-6 bg-gray-950 border-t border-gray-900">
      <div className="container mx-auto text-center">
        <p className="text-gray-300 flex items-center justify-center gap-2">
          Desenvolvido com
          <Heart size={16} className="text-red-500 fill-red-500" />
          por Daniela Thais
        </p>
        <p className="text-sm text-gray-500 mt-2">
          © {new Date().getFullYear()} Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
