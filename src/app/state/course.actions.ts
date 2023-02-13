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

export class EditCourseAction {
  static readonly type = '[Course Page] Edit Course';
  constructor(public course: Course, public id: number) {}
}

export class EditCourseSuccessAction {
  static readonly type = '[Course API] Edit Courses Success';
  constructor(public course: Course) {}
}

export class EditCourseFailureAction {
  static readonly type = '[Course API] Edit Courses Failure';
  constructor(public message: string) {}
}
export class AddCourseAction {
  static readonly type = '[Course Page] Add Course';
  constructor(public course: Course) {}
}

export class AddCourseSuccessAction {
  static readonly type = '[Course API] Add Courses Success';
  constructor(public course: Course) {}
}

export class AddCourseFailureAction {
  static readonly type = '[Course API] Add Courses Failure';
  constructor(public message: string) {}
}
