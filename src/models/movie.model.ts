// Genre model
export interface Genre {
	id: number;
	name: string;
  }
  
  // ProductionCompany model
  export interface ProductionCompany {
	id: number;
	logo_path: string | null;
	name: string;
	origin_country: string;
  }
  
  // ProductionCountry model
  export interface ProductionCountry {
	iso_3166_1: string;
	name: string;
  }
  
  // SpokenLanguage model
  export interface SpokenLanguage {
	english_name: string;
	iso_639_1: string;
	name: string;
  }
  
export interface MovieDetails {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection: string | null;
	budget: number;
	genre_ids: Genre[];  // Burada da `number[]` kullanıyoruz çünkü JSON'da bu sadece ID'leri içeriyor.
	homepage: string;
	id: number;
	imdb_id: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: ProductionCompany[];
	production_countries: ProductionCountry[];
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: SpokenLanguage[];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
  }
  // Movie model
export interface Movie {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];  // Burada `number[]` kullanıyoruz çünkü JSON'da bu sadece ID'leri içeriyor.
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
  }