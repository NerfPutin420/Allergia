export interface Allergy {
    id: string;
    patient: string;
    type: string;
    category?: string;
    criticality: number;
    img?: string;
    warning?: boolean;
  }
