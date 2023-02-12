import { Course } from '../shared/models/course';

export class GetCoursesAction {
  static readonly type = '[Courses Page] Get Courses';
}

export class GetCoursesSuccessAction {
  static readonly type = '[Courses API] Get Courses Success';
  constructor(public courses: Course[]) {}
}

export class GetCoursesFailureAction {
  static readonly type = '[Courses API] Get Courses Failure';
  constructor(public message: string) {}
}
