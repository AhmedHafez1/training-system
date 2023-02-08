import { Review } from './review';

export interface Course {
  id: number;
  name: string;
  instructor: string;
  hours: number;
  likes: number;
  image: string;
  reviews: Review[];
}
