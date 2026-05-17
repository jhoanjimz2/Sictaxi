
export interface Plan {
  id: number;
  uuid: string;
  name: string;
  slug: string;
  monthly_price: number;
  annual_price: number;
  vehicle_limit: number;
  driver_limit: number;
  endorsements_limit: number | null;
  description: string;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  descriptionArray: any[];
  can_apply: boolean;
  isAnnual: boolean;
  // Si agregas más propiedades, inclúyelas aquí
}
