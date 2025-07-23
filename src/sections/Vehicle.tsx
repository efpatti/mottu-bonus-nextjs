import { useVehicleSelection } from "@/hooks/useVehicleSelection";
import Bonus from "@/components/Bonus";
import { NavigationButtons } from "@/components/NavigationButtons";
import VehicleInfo from "@/components/VehicleInfo";

type VehicleType = "motorcycle" | "car";

interface BonusRulesProps {
 type: VehicleType;
}

const BonusRules: React.FC<BonusRulesProps> = ({ type }) => {
 return (
  <div className="space-y-6">
   <Bonus vehicleType={type === "motorcycle" ? "moto" : "car"} />
  </div>
 );
};

export function Vehicle() {
 const selectedVehicle = useVehicleSelection((s) => s.selectedVehicle);
 const setSelectedVehicle = useVehicleSelection((s) => s.setSelectedVehicle);

 return (
  <div className="flex flex-col items-center min-h-screen bg-gray-50 py-8 px-4 sm:px-6">
   <div className="w-full max-w-2xl">
    {/* Header */}
    <div className="text-center mb-8">
     <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
      Regras do Bônus por Veículo
     </h1>
     <p className="text-gray-600">
      Selecione seu tipo de veículo para ver as regras específicas
     </p>
    </div>

    <VehicleInfo
     selectedVehicle={selectedVehicle}
     onSelectVehicle={setSelectedVehicle}
     showSelector
    />

    {/* Rules Content */}
    {selectedVehicle === "motorcycle" && <BonusRules type="motorcycle" />}
    {selectedVehicle === "car" && <BonusRules type="car" />}
   </div>
   <NavigationButtons />
  </div>
 );
}

export default Vehicle;
