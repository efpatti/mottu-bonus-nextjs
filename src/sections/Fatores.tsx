import { FiAlertTriangle } from "react-icons/fi";

export interface FatoresProps {
 penaltyFactors: string[];
}

const Fatores: React.FC<FatoresProps> = ({ penaltyFactors }) => (
 <section className="w-full bg-gradient-to-r from-yellow-100 to-red-100 py-10 px-4 sm:px-6 rounded-xl shadow-md border border-red-200 mt-8">
  <div className="max-w-2xl mx-auto">
   <div className="flex items-center mb-4">
    <FiAlertTriangle className="text-yellow-500 text-xl mr-2" />
    <h2 className="text-xl font-bold text-red-700">
     Fatores que Afetam o Bônus
    </h2>
   </div>
   <ul className="space-y-3">
    {penaltyFactors.map((item, index) => (
     <li key={index} className="flex items-start">
      <span className="bg-red-200 text-red-800 rounded-full p-1 mr-3">
       <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
       >
        <path
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth="2"
         d="M6 18L18 6M6 6l12 12"
        />
       </svg>
      </span>
      <span className="text-gray-700">{item}</span>
     </li>
    ))}
   </ul>
  </div>
 </section>
);

export default Fatores;
