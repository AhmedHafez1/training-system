import { CourseEditComponent } from './../course-edit/course-edit.component';
import { GetCoursesAction, EditCourseAction } from './../state/course.actions';
import { CourseState } from './../state/course.state';
import {
  BehaviorSubject,
  combineLatest,
  filter,
  map,
  mergeMap,
  Observable,
  tap,
} from 'rxjs';
import { Course } from './../shared/models/course';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddReviewComponent } from '../add-review/add-review.component';
import { Review } from '../shared/models/review';
import { Select, Store } from '@ngxs/store';
import { DetailsState } from '../state/details.state';
import { AddReviewAction } from '../state/review.actions';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent implements OnInit {
  @Select(DetailsState.showState) show$!: Observable<boolean>;
  private id!: number;
  public course$!: Observable<Course>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id')!;
    const courses = this.store.selectSnapshot(CourseState.coursesSelector);
    if (!courses.length) this.store.dispatch(new GetCoursesAction());
    this.course$ = this.store.select(CourseState.courseSelector(this.id));
  }

  addReview() {
    this.modalService
      .openDialog(AddReviewComponent, { courseId: this.id }, '400px')
      .subscribe((review: Review) =>
        this.store.dispatch(new AddReviewAction(this.id, review))
      );
  }

  editCourse() {
    const course = this.store.selectSnapshot(
      CourseState.courseSelector(this.id)
    ) as Course;

    this.modalService
      .openDialog(CourseEditComponent, course, '600px')
      .subscribe((course) => this.store.dispatch(new EditCourseAction(course)));
  }
}
