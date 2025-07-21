import {
 FaCheckCircle,
 FaStar,
 FaUsers,
 FaClock,
 FaCar,
 FaInfoCircle,
} from "react-icons/fa";

export const Introduction = () => {
 return (
  <section className="py-16 px-4 sm:px-6 lg:px-8 w-full bg-white">
   <div className="max-w-6xl mx-auto text-center space-y-10">
    {/* Header Section */}
    <div className="space-y-5">
     <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
      Reconhecendo quem faz a diferença!
     </h2>
     <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
      Valorizamos o seu esforço.
     </p>
    </div>

    {/* Cards Grid */}
    <div className="grid md:grid-cols-2 gap-8 mt-12">
     {/* Benefits Card */}
     <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 h-full">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Benefícios</h3>
      <ul className="space-y-3 text-gray-600 text-left">
       <li className="flex items-start">
        <FaCheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" />
        <span className="text-base md:text-lg">
         Reconhecimento pelo seu trabalho
        </span>
       </li>
       <li className="flex items-start">
        <FaCheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" />
        <span className="text-base md:text-lg">Bônus financeiro mensal</span>
       </li>
       <li className="flex items-start">
        <FaCheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" />
        <span className="text-base md:text-lg">
         Incentivo para melhoria contínua
        </span>
       </li>
      </ul>
     </div>

     {/* Participation Card */}
     <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 h-full">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
       Como Participar
      </h3>
      <ul className="space-y-3 text-gray-600 text-left">
       <li className="flex items-start">
        <FaStar className="text-green-600 mr-3 mt-1 flex-shrink-0" />
        <span className="text-base md:text-lg">
         Atender aos critérios de desempenho
        </span>
       </li>
       <li className="flex items-start">
        <FaStar className="text-green-600 mr-3 mt-1 flex-shrink-0" />
        <span className="text-base md:text-lg">
         Manter consistência nos resultados
        </span>
       </li>
       <li className="flex items-start">
        <FaStar className="text-green-600 mr-3 mt-1 flex-shrink-0" />
        <span className="text-base md:text-lg">
         Seguir as diretrizes da empresa
        </span>
       </li>
      </ul>
     </div>
    </div>

    {/* Performance Criteria Section */}
    <div className="mt-20">
     <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
       Critérios de Desempenho
      </h2>
      <p className="text-gray-500 mt-3 text-lg max-w-3xl mx-auto">
       Cumpra esses requisitos para habilitar sua equipe
      </p>
     </div>

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
   </div>
  </section>
 );
};
