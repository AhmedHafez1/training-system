import { CourseService } from './../course.service';
import {
  GetCoursesAction,
  GetCoursesSuccessAction,
  GetCoursesFailureAction,
} from './course.actions';
import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { Course } from './../shared/models/course';
import { catchError, mergeMap, of } from 'rxjs';
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

  @Action(GetCoursesAction)
  getCourses({ dispatch }: StateContext<CourseStateModel>) {
    return this.courseService.getCourses().pipe(
      mergeMap((courses) => dispatch(new GetCoursesSuccessAction(courses))),
      catchError((error) =>
        of(dispatch(new GetCoursesFailureAction(error.message)))
      )
    );
  }

  @Action(GetCoursesSuccessAction)
  getCoursesSuccess(
    { patchState }: StateContext<CourseStateModel>,
    action: GetCoursesSuccessAction
  ) {
    patchState({ courses: action.courses, error: null });
  }

  @Action(GetCoursesSuccessAction)
  getCoursesFailure(
    { patchState }: StateContext<CourseStateModel>,
    action: GetCoursesFailureAction
  ) {
    patchState({ courses: [], error: action.message });
  }
}
