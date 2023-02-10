import { Course } from './../shared/models/course';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
})
export class CourseItemComponent {
  @Input() course!: Course;

  review() {
    this.course.reviews.push({
      courseId: this.course.id,
      rating: Math.random() * 5,
      review: 'nice course',
      user: 'Ahmed',
    });
  }

  like() {
    this.course.likes++;
  }
}
