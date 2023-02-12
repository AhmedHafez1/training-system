import { API_URL } from './app.module';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Course } from './shared/models/course';
import { Observable } from 'rxjs';
import { Review } from './shared/models/review';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private baseUrl = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.baseUrl);
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.baseUrl}/${id}`);
  }

  addReview(courseId: number, review: Review): Observable<Review> {
    review.id = uuidv4();
    return this.http.post<Review>(
      `${this.baseUrl}/${courseId}/reviews`,
      review
    );
  }

  updateReview(
    courseId: number,
    reviewId: number,
    review: Review
  ): Observable<Review> {
    return this.http.put<Review>(
      `${this.baseUrl}/${courseId}/reviews/${reviewId}`,
      review
    );
  }

  deleteReview(courseId: number, reviewId: number): Observable<Course> {
    return this.http.delete<Course>(
      `${this.baseUrl}/${courseId}/reviews/${reviewId}`
    );
  }
}
