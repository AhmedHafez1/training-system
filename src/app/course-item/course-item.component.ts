import { EditCourseAction } from './../state/course.actions';
import { DetailsState, DetailsStateModel } from '../state/details.state';
import { Course } from './../shared/models/course';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
})
export class CourseItemComponent {
  @Input() course!: Course;
  @Select(DetailsState.showState) show$!: Observable<DetailsStateModel>;

  constructor(private store: Store) {}

  like() {
    this.course.likes++;
    this.store.dispatch(new EditCourseAction(this.course));
  }

  dislike() {
    this.course.likes > 0 && this.course.likes--;
    this.store.dispatch(new EditCourseAction(this.course));
  }
}
