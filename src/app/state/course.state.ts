import {
  AddReviewAction,
  AddReviewFailureAction,
  AddReviewSuccessAction,
} from './review.actions';
import { CourseService } from './../course.service';
import {
  GetCoursesAction,
  GetCoursesSuccessAction,
  GetCoursesFailureAction,
  AddCourseAction,
  AddCourseSuccessAction,
  AddCourseFailureAction,
  EditCourseAction,
  EditCourseSuccessAction,
  EditCourseFailureAction,
} from './course.actions';
import { Injectable } from '@angular/core';
import {
  Action,
  createSelector,
  Selector,
  State,
  StateContext,
} from '@ngxs/store';
import { Course } from './../shared/models/course';
import { catchError, mergeMap, of, tap } from 'rxjs';
export interface CourseStateModel {
  courses: Course[];
  error: string | null;
}

@State<CourseStateModel>({
  name: 'course',
  defaults: {
    courses: [],
    error: null,
  },
})
@Injectable()
export class CourseState {
  constructor(private courseService: CourseService) {}

  @Selector()
  static coursesSelector(state: CourseStateModel) {
    return state.courses;
  }

  @Selector()
  static errorSelector(state: CourseStateModel) {
    return state.error;
  }

  static courseSelector(id: number) {
    return createSelector([CourseState], (state: CourseStateModel): Course => {
      return state.courses.find((course) => course.id === id)!;
    });
  }

  @Action(GetCoursesAction)
  getCourses({ dispatch }: StateContext<CourseStateModel>) {
    return this.courseService.getCourses().pipe(
      tap((courses) => dispatch(new GetCoursesSuccessAction(courses))),
      catchError((error) =>
        dispatch(new GetCoursesFailureAction(error.message))
      )
    );
  }

  @Action(GetCoursesSuccessAction)
  getCoursesSuccess(
    { patchState }: StateContext<CourseStateModel>,
    { courses }: GetCoursesSuccessAction
  ) {
    patchState({ courses, error: null });
  }

  @Action(GetCoursesFailureAction)
  getCoursesFailure(
    { patchState }: StateContext<CourseStateModel>,
    { message }: GetCoursesFailureAction
  ) {
    patchState({ error: message });
  }

  @Action(AddReviewAction)
  addReview(
    { dispatch }: StateContext<CourseStateModel>,
    { review, courseId }: AddReviewAction
  ) {
    return this.courseService.addReview(courseId, review).pipe(
      tap((review) => dispatch(new AddReviewSuccessAction(review))),
      catchError((error) => dispatch(new AddReviewFailureAction(error.message)))
    );
  }

  @Action(AddReviewSuccessAction)
  addReviewSuccess(
    { getState, patchState }: StateContext<CourseStateModel>,
    { review }: AddReviewSuccessAction
  ) {
    const courses = [...getState().courses];
    const course = courses.find((c) => c.id === +review.courseId);
    course?.reviews.push(review);
    patchState({ courses: [...courses], error: null });
  }

  @Action(AddReviewFailureAction)
  addReviewFailure(
    { patchState }: StateContext<CourseStateModel>,
    { message }: AddReviewFailureAction
  ) {
    patchState({ error: message });
  }

  @Action(AddCourseAction)
  addCourse(
    { dispatch }: StateContext<CourseStateModel>,
    { course }: AddCourseAction
  ) {
    return this.courseService.addCourse(course).pipe(
      tap((course) => dispatch(new AddCourseSuccessAction(course))),
      catchError((error) => dispatch(new AddCourseFailureAction(error.message)))
    );
  }

  @Action(AddCourseSuccessAction)
  addCourseSuccess(
    { getState, patchState }: StateContext<CourseStateModel>,
    { course }: AddCourseSuccessAction
  ) {
    const courses = [...getState().courses];

    patchState({ courses: [...courses, course], error: null });
  }

  @Action(AddCourseFailureAction)
  addCourseFailure(
    { patchState }: StateContext<CourseStateModel>,
    { message }: AddCourseFailureAction
  ) {
    patchState({ error: message });
  }

  @Action(EditCourseAction)
  editCourse(
    { dispatch }: StateContext<CourseStateModel>,
    { course }: EditCourseAction
  ) {
    return this.courseService.editCourse(course).pipe(
      tap((course) => dispatch(new EditCourseSuccessAction(course))),
      catchError((error) =>
        dispatch(new EditCourseFailureAction(error.message))
      )
    );
  }

  @Action(EditCourseSuccessAction)
  editCourseSuccess(
    { getState, patchState }: StateContext<CourseStateModel>,
    { course }: EditCourseSuccessAction
  ) {
    const courses = getState().courses.map((c) =>
      c.id === course.id ? course : c
    );

    patchState({ courses, error: null });
  }

  @Action(EditCourseFailureAction)
  editCourseFailure(
    { patchState }: StateContext<CourseStateModel>,
    { message }: EditCourseFailureAction
  ) {
    patchState({ error: message });
  }
}
