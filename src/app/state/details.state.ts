import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ToggleDetails } from './details.actions';

export interface DetailsStateModel {
  show: boolean;
}

@State<DetailsStateModel>({
  name: 'details',
  defaults: {
    show: false,
  },
})
@Injectable()
export class DetailsState {
  @Action(ToggleDetails)
  toggleDetails({ getState, patchState }: StateContext<DetailsStateModel>) {
    patchState({ show: !getState().show });
  }

  @Selector()
  static showState(state: DetailsStateModel) {
    return state.show;
  }
}
