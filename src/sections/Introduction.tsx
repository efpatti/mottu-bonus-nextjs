import { scrollToTop } from "@/lib/scrollToTop";
import { useLevelContext } from "@/providers/LevelProvider";

export const Introduction = () => {
 const { nextLevel } = useLevelContext();
 const nextClick = () => {
  nextLevel();
  scrollToTop();
 };
 return (
  <>
   {/* Hero Section */}
   <section className="h-screen w-full bg-gradient-to-r from-green-600 to-green-500 py-16 px-4 sm:px-6 lg:py-20 shadow-md flex flex-col justify-center items-center text-center">
    <div className="w-4/5 mx-auto">
     <h1 className="text-4xl sm:text-4xl md:text-6xl font-extrabold text-white mb-6">
      Programa de Bônus: Entenda Como Ganhar Mais.
     </h1>
     <p className="text-green-100 text-2xl sm:text-2xl max-w-3xl mx-auto">
      Quanto mais você produz, mais você ganha.
     </p>
     <button
      className="mt-4 px-6 py-2 bg-white text-green-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition text-xl md:text-2xl"
      onClick={nextClick}
     >
      Saiba Mais
     </button>
    </div>
   </section>
  </>
 );
};
