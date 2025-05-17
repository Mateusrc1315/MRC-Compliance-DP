import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="p-6 space-y-10 max-w-5xl mx-auto">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">MRC Compliance DP</h1>
        <p className="text-lg text-gray-600">
          Especialistas em Departamento Pessoal e Compliance Trabalhista
        </p>
        <a
          href="https://wa.me/5567981725148"
          target="_blank"
          className="inline-block bg-green-600 text-white px-6 py-2 rounded-xl text-lg"
        >
          Fale Conosco pelo WhatsApp
        </a>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-center">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border p-4 rounded-xl shadow">
            <h3 className="text-xl font-medium">Consultoria em Departamento Pessoal</h3>
            <p className="text-sm text-gray-600 mt-2">
              Diagnóstico e padronização de processos, folha de pagamento, ponto e benefícios.
            </p>
          </div>
          <div className="border p-4 rounded-xl shadow">
            <h3 className="text-xl font-medium">Compliance Trabalhista</h3>
            <p className="text-sm text-gray-600 mt-2">
              Prevenção de passivos com auditorias, treinamentos e pareceres técnicos especializados.
            </p>
          </div>
          <div className="border p-4 rounded-xl shadow">
            <h3 className="text-xl font-medium">Treinamentos e Produtos Digitais</h3>
            <p className="text-sm text-gray-600 mt-2">
              E-books, cursos e mentorias focadas na capacitação profissional na área trabalhista.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-center">Quem Somos</h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto">
          A MRC Compliance DP nasceu com o propósito de oferecer soluções seguras, práticas e atualizadas para empresas que desejam segurança jurídica nas rotinas trabalhistas. Atuamos com ética, profissionalismo e foco no resultado.
        </p>
      </section>

      <section className="space-y-4 text-center">
        <h2 className="text-2xl font-semibold">Contato</h2>
        <div className="space-y-2">
          <p className="flex justify-center items-center gap-2"><Phone size={18}/> (67) 9 8172-5148</p>
          <p className="flex justify-center items-center gap-2"><Mail size={18}/> contato@mrcdp.com.br</p>
          <p className="flex justify-center items-center gap-2"><MapPin size={18}/> Campo Grande - MS</p>
        </div>
        <a
          href="https://wa.me/5567981725148"
          target="_blank"
          className="inline-block bg-green-600 text-white px-6 py-2 rounded-xl"
        >
          Iniciar Conversa no WhatsApp
        </a>
      </section>

      <footer className="text-center text-sm text-gray-500 pt-10">
        <p>&copy; {new Date().getFullYear()} MRC Compliance DP. Todos os direitos reservados.</p>
        <p className="mt-2">Siga-nos nas redes sociais: Instagram | LinkedIn</p>
      </footer>
    </main>
  );
}