import { FaUsers, FaInfoCircle, FaTrophy } from "react-icons/fa";

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
        <FaUsers className="text-green-600 mt-0.5 mr-3 flex-shrink-0" />
        <div>
         <p className="text-xs text-gray-500 uppercase font-semibold mb-1">
          Critério Coletivo da Filial
         </p>
         <h3 className="font-semibold text-gray-800 mb-1">
          Agilidade no Serviço
         </h3>
         <p className="text-gray-600 text-sm">
          80% dos serviços na rua abaixo de 90 minutos. <br />
         </p>
        </div>
       </div>
      </div>

      {/* Meta 2 */}
      <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
       <div className="flex items-start">
        <FaUsers className="text-green-600 mt-0.5 mr-3 flex-shrink-0" />
        <div>
         <p className="text-xs text-gray-500 uppercase font-semibold mb-1">
          Critério Coletivo da Filial
         </p>
         <h3 className="font-semibold text-gray-800 mb-1">
          Controle da Inadimplência
         </h3>
         <p className="text-gray-600 text-sm">
          Menos de 0,3% da frota em apropriação. <br />
         </p>
        </div>
       </div>
      </div>
     </div>

     {/* Legenda explicativa final */}
     <p className="text-xs text-gray-500 mt-6 italic">
      * Todas as metas acima são avaliadas de forma coletiva, com base nos
      resultados gerais da filial.
     </p>
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
