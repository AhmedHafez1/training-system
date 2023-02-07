import { COURSES } from './../shared/courses';
import { Component, Inject, inject, OnInit } from '@angular/core';
import { courses } from '../shared/courses';
import { Course } from '../shared/models/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  constructor(@Inject(COURSES) public courses: Course[]) {}

  ngOnInit(): void {}
}
