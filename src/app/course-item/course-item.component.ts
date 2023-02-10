import { Course } from './../shared/models/course';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
})
export class CourseItemComponent {
  @Input() course!: Course;

  review() {}

  like() {
    this.course.likes++;
  }
}
