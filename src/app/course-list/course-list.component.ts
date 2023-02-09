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
  public courses$!: Observable<Course[]>;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courses$ = this.courseService.getCouses();
  }
}
