export interface Termino {
  id:          number;
  version:     string;
  title:       string;
  content:     string;
  code:        string;
  deleted_at:  null;
  obligatory:  number;
  created_at:  Date;
  updated_at:  Date;
  acceptances: any[];
}
