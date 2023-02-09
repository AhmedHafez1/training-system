import { Inject, Injectable } from '@angular/core';
import { COURSES } from './shared/courses';
import { Course } from './shared/models/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(@Inject(COURSES) public courses: Course[]) {}

  getCouses(): Course[] {
    return this.courses;
  }

  getCourse(id: number): Course {
    return this.courses.find((c) => c.id === id)!;
  }
}
