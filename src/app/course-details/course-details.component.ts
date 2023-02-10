import { Observable } from 'rxjs';
import { Course } from './../shared/models/course';
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent implements OnInit {
  public course$!: Observable<Course>;

  constructor(
    private courseService: CourseService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.course$ = this.courseService.getCourseById(id);
  }
}
