import { GetCoursesAction } from './../state/course.actions';
import { CourseState, CourseStateModel } from './../state/course.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Component, Inject, inject, OnInit } from '@angular/core';
import { Course } from '../shared/models/course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  @Select() course$!: Observable<CourseStateModel>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new GetCoursesAction());
  }
}
