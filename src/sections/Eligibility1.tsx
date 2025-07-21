import { FaUsers, FaClock } from "react-icons/fa";

export const Eligibility1 = () => {
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

   {/* Seção 1 - Elegibilidade */}
   <section className="py-8 px-4 sm:px-6 max-w-4xl mx-auto">
    <div className="mb-10">
     <div className="flex items-center mb-4">
      <div className="bg-green-100 p-2 rounded-full mr-3">
       <FaUsers className="text-green-600 text-lg" />
      </div>
      <h2 className="text-xl font-bold text-gray-800">
       Passo 1: Verifique se a sua filial é elegível
      </h2>
     </div>

     <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
      <div className="flex">
       <FaClock className="text-green-600 mt-0.5 mr-3 flex-shrink-0" />
       <h3 className="font-semibold text-gray-800 mb-2">Estrutura da Equipe</h3>
      </div>
      <p className="text-gray-600 text-sm">
       Operar com pelo menos 4 prestadores. Se tiver dúvidas, consulte o seu
       líder.
      </p>
     </div>
    </div>
   </section>
  </div>
 );
};
