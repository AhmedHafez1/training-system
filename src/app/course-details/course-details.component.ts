import { GetCoursesAction } from './../state/course.actions';
import { CourseState } from './../state/course.state';
import {
  BehaviorSubject,
  combineLatest,
  filter,
  map,
  mergeMap,
  Observable,
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

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent implements OnInit {
  @Select(DetailsState.showState) show$!: Observable<boolean>;
  private addedReview = new BehaviorSubject<Review | null>(null);
  private id!: number;
  public course$!: Observable<Course>;

  constructor(
    private courseService: CourseService,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.course$ = combineLatest([
      this.store.select(CourseState.courseSelector(this.id)),
      this.addedReview,
    ]).pipe(
      map(([course, review]) => {
        if (!course) this.store.dispatch(new GetCoursesAction());
        if (review) course.reviews.push(review);
        return course;
      })
    );
  }

  addReview() {
    const dialogRef = this.dialog.open(AddReviewComponent, {
      data: { courseId: this.id },
      width: '400px',
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter((data) => Boolean(data)),
        mergeMap((data) =>
          this.courseService.addReview(this.id, {
            ...data,
            courseId: this.id,
          } as Review)
        )
      )
      .subscribe((review) => this.addedReview.next(review));
  }
}
