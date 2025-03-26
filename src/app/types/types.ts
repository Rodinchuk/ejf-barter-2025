

export type CarouselSlideType = {
	src: string;
};
// src/types/types.ts
export interface Package {
	id: string;
	name: string;
	price: string[];
	features: string[];
	info?: string;
  }
  
  export interface AdditionalService {
	id: string;
	name: string;
	price: number;
	info?: string;
  }
  