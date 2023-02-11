import {
  ToggleDetailsState,
  ToggleDetailsStateModel,
} from './../state/toggle-details.state';
import { Course } from './../shared/models/course';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
})
export class CourseItemComponent {
  @Input() course!: Course;
  @Select(ToggleDetailsState) details$!: Observable<ToggleDetailsStateModel>;

  review() {}

  like() {
    this.course.likes++;
  }

  dislike() {
    this.course.likes > 0 && this.course.likes--;
  }
}
