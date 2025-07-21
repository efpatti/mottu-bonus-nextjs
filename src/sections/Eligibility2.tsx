import { FaClock, FaCar, FaInfoCircle, FaTrophy } from "react-icons/fa";

export const Eligibility2 = () => {
 return (
  <div className="w-full bg-white">
   {/* Seção 2 - Metas */}
   <section className="py-8 px-4 sm:px-6 max-w-4xl mx-auto">
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
