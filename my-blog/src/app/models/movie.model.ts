export interface Movie {
  id: number;
  title: string;
  year: number;
  director: string;
  description: string;
  imageUrl: string;
  rating?: number;
}
