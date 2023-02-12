import { CourseService } from './../course.service';
import {
  GetCoursesAction,
  GetCoursesSuccessAction,
  GetCoursesFailureAction,
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
}
