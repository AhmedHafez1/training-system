import {
  BehaviorSubject,
  combineLatest,
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

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent implements OnInit {
  public course$!: Observable<Course>;
  public addedReview = new BehaviorSubject<Review | null>(null);
  private id!: number;

  constructor(
    private courseService: CourseService,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.course$ = combineLatest([
      this.courseService.getCourseById(this.id),
      this.addedReview,
    ]).pipe(
      map(([course, review]) => {
        if (review) course.reviews.push(review);

        return course;
      })
    );
  }

  addReview() {
    const dialogRef = this.dialog.open(AddReviewComponent, {
      data: { courseId: this.id },
    });

    dialogRef
      .afterClosed()
      .pipe(
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
