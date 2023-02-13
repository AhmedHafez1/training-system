import { Review } from '../shared/models/review';

export class AddReviewAction {
  static readonly type = '[Review Modal] Add Review';
  constructor(public courseId: number, public review: Review) {}
}
export class AddReviewSuccessAction {
  static readonly type = '[Review API] Add Review Success';
  constructor(public review: Review) {}
}
export class AddReviewFailureAction {
  static readonly type = '[Review API] Add Review Failure';
  constructor(public message: string) {}
}
