import { FaCheckCircle } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useLevelContext } from "@/providers/LevelProvider";
import { scrollToTop } from "@/lib/scrollToTop";

export const Benefits = () => {
 const { nextLevel, previousLevel } = useLevelContext();
 const nextClick = () => {
  nextLevel();
  scrollToTop();
 };
 const previuousClick = () => {
  previousLevel();
  scrollToTop();
 };
 return (
  <section className="py-12 px-4 sm:px-6 lg:px-8 w-full bg-gradient-to-br from-green-600 via-green-500 to-green-400 flex items-center justify-center min-h-screen">
   <div className="w-full max-w-md sm:max-w-2xl lg:max-w-4xl mx-auto">
    <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-green-100 overflow-hidden p-8 sm:p-12 w-full">
     <h3 className="text-3xl sm:text-4xl font-bold text-green-800 mb-8 text-center">
      Benefícios Exclusivos
     </h3>

     <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <li className="flex flex-col items-center text-center p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-all duration-300 transform hover:-translate-y-1">
       <div className="mb-4 p-3 bg-green-600 rounded-full shadow-lg">
        <FaCheckCircle className="text-white text-4xl" />
       </div>
       <span className="text-lg font-semibold text-green-900">
        Reconhecimento pelo seu trabalho
       </span>
       <p className="mt-2 text-green-700">
        Valorização do seu esforço e dedicação
       </p>
      </li>

      <li className="flex flex-col items-center text-center p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-all duration-300 transform hover:-translate-y-1">
       <div className="mb-4 p-3 bg-green-600 rounded-full shadow-lg">
        <FaCheckCircle className="text-white text-4xl" />
       </div>
       <span className="text-lg font-semibold text-green-900">
        Bônus financeiro mensal
       </span>
       <p className="mt-2 text-green-700">
        Recompensa financeira pelo seu desempenho
       </p>
      </li>

      <li className="flex flex-col items-center text-center p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-all duration-300 transform hover:-translate-y-1">
       <div className="mb-4 p-3 bg-green-600 rounded-full shadow-lg">
        <FaCheckCircle className="text-white text-4xl" />
       </div>
       <span className="text-lg font-semibold text-green-900">
        Crescimento na Carreira
       </span>
       <p className="mt-2 text-green-700">
        Visibilidade para futuras promoções e oportunidades
       </p>
      </li>
     </ul>

     <div className="mt-10 flex justify-center items-center space-x-2">
      <button
       type="button"
       className="cursor-pointer flex items-center gap-2 px-6 py-2 rounded-lg font-semibold text-black bg-white border border-black hover:bg-green-50 hover:text-green-700 focus:ring-2 focus:ring-green-500 focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
       onClick={previuousClick}
       aria-label="Voltar para etapa anterior"
      >
       <FaChevronLeft className="text-green-600" />
       Voltar
      </button>
      <button
       type="button"
       className="cursor-pointer flex items-center gap-2 px-6 py-2 rounded-lg font-semibold text-white bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
       onClick={nextClick}
       aria-label="Avançar para próxima etapa"
      >
       Continuar
       <FaChevronRight className="text-white" />
      </button>
     </div>
    </div>
   </div>
  </section>
 );
};
