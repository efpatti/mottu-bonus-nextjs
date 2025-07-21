import {
 FaUsers,
 FaClock,
 FaCar,
 FaInfoCircle,
 FaTrophy,
} from "react-icons/fa";

export const Eligibility = () => {
 return (
  <div className="w-full bg-white">
   {/* Hero Section - Mais clean */}
   <section className="w-full bg-green-600 py-10 px-4 sm:px-6">
    <div className="max-w-4xl mx-auto text-center">
     <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
      O sucesso coletivo libera seu bônus
     </h1>
     <p className="text-green-100 text-base sm:text-lg">
      Sua filial precisa cumprir 2 etapas para ativar o bônus individual
     </p>

     {/* Progress steps - simplificado */}
     <div className="flex justify-center mt-8 gap-1 sm:gap-4">
      {["Elegibilidade", "Metas"].map((step, index) => (
       <div key={index} className="flex flex-col items-center">
        <div
         className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 
                  ${index === 0 ? "bg-green-700" : "bg-green-500"}`}
        >
         <span className="text-white font-medium">{index + 1}</span>
        </div>
        <span className="text-white text-xs sm:text-sm">{step}</span>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* Conteúdo Principal */}
   <section className="py-8 px-4 sm:px-6 max-w-4xl mx-auto">
    {/* Seção 1 - Elegibilidade */}
    <div className="mb-10">
     <div className="flex items-center mb-4">
      <div className="bg-green-100 p-2 rounded-full mr-3">
       <FaUsers className="text-green-600 text-lg" />
      </div>
      <h2 className="text-xl font-bold text-gray-800">
       Passo 1: Torne sua filial elegível
      </h2>
     </div>

     <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
      <h3 className="font-semibold text-gray-800 mb-2">Estrutura da Equipe</h3>
      <p className="text-gray-600 text-sm">
       Operar com pelo menos 4 prestadores para se tornar elegível ao programa
      </p>
     </div>
    </div>

    {/* Seção 2 - Metas */}
    <div className="mb-10">
     <div className="flex items-center mb-4">
      <div className="bg-green-100 p-2 rounded-full mr-3">
       <FaTrophy className="text-green-600 text-lg" />
      </div>
      <h2 className="text-xl font-bold text-gray-800">
       Passo 2: Bata as metas coletivas
      </h2>
     </div>

     <div className="space-y-4">
      {/* Meta 1 */}
      <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
       <div className="flex items-start">
        <FaClock className="text-green-600 mt-0.5 mr-3 flex-shrink-0" />
        <div>
         <h3 className="font-semibold text-gray-800 mb-1">
          Agilidade no Atendimento
         </h3>
         <p className="text-gray-600 text-sm">
          80% dos atendimentos na rua abaixo de 90 minutos
         </p>
        </div>
       </div>
      </div>

      {/* Meta 2 */}
      <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
       <div className="flex items-start">
        <FaCar className="text-green-600 mt-0.5 mr-3 flex-shrink-0" />
        <div>
         <h3 className="font-semibold text-gray-800 mb-1">
          Controle da Inadimplência
         </h3>
         <p className="text-gray-600 text-sm">
          Menos de 0,3% da frota em apropriação
         </p>
        </div>
       </div>
      </div>
     </div>
    </div>

    {/* Aviso Importante - Padronizado */}
    <div className="bg-green-50 p-5 rounded-lg border border-green-200">
     <div className="flex items-start">
      <FaInfoCircle className="text-green-600 mt-0.5 mr-3 flex-shrink-0" />
      <div>
       <h3 className="font-semibold text-green-800 mb-1">Atenção</h3>
       <p className="text-green-700 text-sm">
        Ambos os passos devem ser concluídos para liberação do bônus.
        Elegibilidade primeiro, depois metas de desempenho.
       </p>
      </div>
     </div>
    </div>
   </section>
  </div>
 );
};
