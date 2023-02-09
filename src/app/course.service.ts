import { API_URL } from './app.module';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Course } from './shared/models/course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  coursesSegment = '/courses/';
  constructor(private http: HttpClient, @Inject(API_URL) private url: string) {}

  getCouses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url + this.coursesSegment);
  }

  getCourse(id: number): Observable<Course> {
    return this.http.get<Course>(this.url + this.coursesSegment + id);
  }
}
