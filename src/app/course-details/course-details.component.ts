import { GetCoursesAction } from './../state/course.actions';
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
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddReviewComponent } from '../add-review/add-review.component';
import { Review } from '../shared/models/review';
import { Select, Store } from '@ngxs/store';
import { DetailsState } from '../state/details.state';
import { AddReviewAction } from '../state/review.actions';

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
    private dialog: MatDialog,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id')!;
    const courses = this.store.selectSnapshot(CourseState.coursesSelector);
    if (!courses.length) this.store.dispatch(new GetCoursesAction());
    this.course$ = this.store.select(CourseState.courseSelector(this.id));
  }

  addReview() {
    const dialogRef = this.dialog.open(AddReviewComponent, {
      data: { courseId: this.id },
      width: '400px',
    });

    dialogRef
      .afterClosed()
      .pipe(filter((data) => Boolean(data)))
      .subscribe((review: Review) =>
        this.store.dispatch(new AddReviewAction(review.courseId, review))
      );
  }
}
