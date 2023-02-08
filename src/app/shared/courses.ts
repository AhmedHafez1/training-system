import { InjectionToken } from '@angular/core';
import { Course } from './models/course';

export const courses: Course[] = [
  {
    id: 1,
    name: 'Introduction to Angular',
    instructor: 'John Doe',
    hours: 20,
    likes: 1500,
    image: 'assets/images/angular.png',
    reviews: [
      {
        user: 'Jane',
        rating: 4.5,
        review: 'The course was really helpful and well explained.',
      },
      {
        user: 'Mike',
        rating: 4.0,
        review: 'The instructor was knowledgeable and engaging.',
      },
      {
        user: 'Sarah',
        rating: 4.8,
        review: 'The course material was comprehensive and easy to understand.',
      },
    ],
  },
  {
    id: 2,
    name: 'Advanced JavaScript',
    instructor: 'Jane Doe',
    hours: 30,
    likes: 1000,
    image: 'assets/images/js.png',
    reviews: [
      {
        user: 'John',
        rating: 4.0,
        review:
          'The course was well structured and covered advanced topics well.',
      },
      {
        user: 'Jane',
        rating: 4.5,
        review: 'The instructor was very knowledgeable and patient.',
      },
      {
        user: 'Mark',
        rating: 4.2,
        review: 'The course was challenging but worth it.',
      },
    ],
  },
  {
    id: 3,
    name: 'React Fundamentals',
    instructor: 'Jim Smith',
    hours: 25,
    likes: 1300,
    image: 'assets/images/react.jpg',
    reviews: [
      {
        user: 'Emily',
        rating: 4.2,
        review: 'The course provided a solid foundation in React.',
      },
      {
        user: 'Chris',
        rating: 4.5,
        review:
          'The instructor was excellent and made the material easy to understand.',
      },
      {
        user: 'Ryan',
        rating: 4.0,
        review:
          'The course was a good introduction to React, but could be more in-depth.',
      },
    ],
  },
  {
    id: 4,
    name: 'Node.js Essentials',
    instructor: 'Sarah Johnson',
    hours: 22,
    likes: 1400,
    image: 'assets/images/node.jpg',
    reviews: [
      {
        user: 'Alex',
        rating: 4.7,
        review:
          'The course was very informative and provided a great introduction to Node.js.',
      },
      {
        user: 'Samuel',
        rating: 4.3,
        review: 'The instructor was clear in explanation',
      },
    ],
  },
  {
    id: 5,
    name: 'Express.js Fundamentals',
    instructor: 'Tom Brown',
    hours: 18,
    likes: 900,
    image: 'assets/images/express.png',
    reviews: [
      {
        user: 'Emma',
        rating: 4.1,
        review: 'The course was a great introduction to Express.js.',
      },
      {
        user: 'Liam',
        rating: 4.4,
        review:
          'The instructor was knowledgeable and made the course interesting.',
      },
      {
        user: 'Mia',
        rating: 4.3,
        review: 'The course was well structured and easy to follow.',
      },
    ],
  },
  {
    id: 6,
    name: 'SQL for Beginners',
    instructor: 'Linda Davis',
    hours: 16,
    likes: 800,
    image: 'assets/images/sql.png',
    reviews: [
      {
        user: 'Oliver',
        rating: 4.2,
        review: 'The course was a great introduction to SQL.',
      },
      {
        user: 'Sophia',
        rating: 4.3,
        review: 'The instructor was knowledgeable and engaging.',
      },
      {
        user: 'William',
        rating: 4.1,
        review: 'The course was well structured, but could be more in-depth.',
      },
    ],
  },
  {
    id: 7,
    name: 'MongoDB Fundamentals',
    instructor: 'David Wilson',
    hours: 20,
    likes: 700,
    image: 'assets/images/mongo.png',
    reviews: [
      {
        user: 'Ava',
        rating: 4.5,
        review: 'The course was comprehensive and well explained.',
      },
      {
        user: 'Ethan',
        rating: 4.2,
        review:
          'The instructor was knowledgeable and made the course interesting.',
      },
      {
        user: 'Isabelle',
        rating: 4.4,
        review: 'The course was well structured and easy to follow.',
      },
    ],
  },
  {
    id: 8,
    name: 'RESTful API Design',
    instructor: 'Alex Rodriguez',
    hours: 22,
    likes: 600,
    image: 'assets/images/rest.png',
    reviews: [
      {
        user: 'Elijah',
        rating: 4.3,
        review: 'The course was a great introduction to RESTful API design.',
      },
      {
        user: 'Scarlett',
        rating: 4.2,
        review: 'The instructor was knowledgeable and engaging.',
      },
      {
        user: 'Mason',
        rating: 4.1,
        review: 'The course was well structured, but could be more in-depth.',
      },
    ],
  },
];

export const COURSES = new InjectionToken<Course[]>('COURSE_LIST');
