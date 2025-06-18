export type CatalogueItem = {
  fullname: string;
  summary: string;
  summarytext: string;
  contentid: number;
  contenttype: string;
  url: string;
  imageurl: string;
  badge: string;
  completionstatus: string | null;
  programs: unknown[]; 
  category: {
    id: number;
    name: string;
  };
  tags: {
    id: number;
    name: string;
  }[];
  customfields: unknown[]; 
  cost: number;
  duration: string;
  timecreated: string; // ISO date string
  timemodified: string; // ISO date string
  contentstatus: string;
  paymentCost: number;
};