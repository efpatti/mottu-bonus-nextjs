import { FaCheckCircle } from "react-icons/fa";
export const Benefits = () => {
 return (
  <section className="py-16 px-4 sm:px-6 lg:px-8 w-full bg-green-500">
   <div className="max-w-6xl mx-auto text-center space-y-10">
    <div className="grid justify-center w-full gap-8 mt-12">
     {/* Benefits Card */}
     <div className="bg-white p-10 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 h-full">
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
    </div>
   </div>
  </section>
 );
};
