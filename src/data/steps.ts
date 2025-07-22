export interface Step {
 stepNumber: number;
 label: string;
}

export const Steps: Step[] = [
 { stepNumber: 1, label: "Introdução" },
 { stepNumber: 2, label: "Benefícios" },
 { stepNumber: 3, label: "Elegibilidade 1" },
 { stepNumber: 4, label: "Elegibilidade 2" },
 { stepNumber: 5, label: "Regras do Bônus" },
 { stepNumber: 6, label: "Fatores de Penalidade" },
];

export const totalSteps = Steps.length;
