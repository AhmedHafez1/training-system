import { InjectionToken } from '@angular/core';
import { Course } from './models/course';

export const courses: Course[] = [
  {
    id: 1,
    name: 'Angular',
    instructor: 'John Doe',
    hours: 40,
    reviews: [4.5, 4.0, 4.8],
  },
  {
    id: 2,
    name: 'React',
    instructor: 'Jane Doe',
    hours: 35,
    reviews: [4.0, 4.5, 4.8],
  },
  {
    id: 3,
    name: 'Vue.js',
    instructor: 'Jim Brown',
    hours: 30,
    reviews: [4.5, 4.0, 4.6],
  },
  {
    id: 4,
    name: 'Node.js',
    instructor: 'Jane Smith',
    hours: 25,
    reviews: [4.5, 4.0, 4.7],
  },
  {
    id: 5,
    name: 'Express.js',
    instructor: 'John Smith',
    hours: 20,
    reviews: [4.0, 4.5, 4.6],
  },
  {
    id: 6,
    name: 'MongoDB',
    instructor: 'Bob Smith',
    hours: 15,
    reviews: [4.5, 4.0, 4.7],
  },
  {
    id: 7,
    name: 'JavaScript',
    instructor: 'Jane Doe',
    hours: 40,
    reviews: [4.0, 4.5, 4.8],
  },
  {
    id: 8,
    name: 'TypeScript',
    instructor: 'Jim Brown',
    hours: 35,
    reviews: [4.5, 4.0, 4.6],
  },
  {
    id: 9,
    name: 'HTML/CSS',
    instructor: 'Jane Smith',
    hours: 30,
    reviews: [4.5, 4.0, 4.7],
  },
  {
    id: 10,
    name: 'Bootstrap',
    instructor: 'John Smith',
    hours: 25,
    reviews: [4.0, 4.5, 4.6],
  },
];

export const COURSES = new InjectionToken<Course[]>('COURSE_LIST');
