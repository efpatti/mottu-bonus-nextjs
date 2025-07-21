import { FaUsers, FaClock, FaCar, FaInfoCircle } from "react-icons/fa";

export const Eligibility = () => {
 return (
  <div className="w-full">
   {/* Hero Section - Eligibility */}
   <section className="w-full bg-gradient-to-r from-green-600 to-green-500 py-16 px-4 sm:px-6 shadow-md flex flex-col justify-center items-center text-center">
    <div className="max-w-4xl mx-auto">
     <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
      Quem pode participar do Programa de Bonificação Individual?
     </h1>
    </div>
   </section>

   {/* Rules Section */}
   <section className="py-16 px-4 sm:px-6 lg:px-8 w-full bg-white" id="regras">
    <div className="max-w-6xl mx-auto space-y-10">
     {/* Header */}
     <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
       Critérios de Desempenho
      </h2>
      <p className="text-gray-500 mt-3 text-lg max-w-3xl mx-auto">
       Cumpra esses requisitos para habilitar sua equipe
      </p>
     </div>

     {/* Criteria Grid */}
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Criteria Item 1 - Prestadores */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center h-full">
       <div className="flex justify-center mb-4">
        <FaUsers className="text-green-600 text-5xl" />
       </div>
       <h3 className="text-xl font-semibold text-gray-800 mb-3">Prestadores</h3>
       <p className="text-gray-600">4 prestadores previstos</p>
      </div>

      {/* Criteria Item 2 - Tempo de Atendimento */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center h-full">
       <div className="flex justify-center mb-4">
        <FaClock className="text-green-600 text-5xl" />
       </div>
       <h3 className="text-xl font-semibold text-gray-800 mb-3">
        Tempo de Atendimento
       </h3>
       <p className="text-gray-600">80% dos casos abaixo de 90 min na rua</p>
      </div>

      {/* Criteria Item 3 - Frota */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center h-full">
       <div className="flex justify-center mb-4">
        <FaCar className="text-green-600 text-5xl" />
       </div>
       <h3 className="text-xl font-semibold text-gray-800 mb-3">Frota</h3>
       <p className="text-gray-600">
        Menos de 0,3% da frota em apropriação (excluindo os casos maiores que
        120 dias)
       </p>
      </div>
     </div>

     {/* Important Notice */}
     <div className="mt-12 bg-green-50 p-8 rounded-xl border border-green-200">
      <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
       <FaInfoCircle className="text-green-600 mr-2" />
       Importante
      </h3>
      <p className="text-green-700 text-lg">
       Todas as regras devem ser cumpridas simultaneamente para que a filial
       seja elegível ao programa de bonificação. Filiais que não atenderem aos
       critérios estabelecidos acima não terão direito ao bônus individual do
       colaborador.
      </p>
     </div>
    </div>
   </section>
  </div>
 );
};
