import { Action, State, StateContext } from '@ngxs/store';
import { ToggleDetails } from './toggle-details.actions';

export interface ToggleDetailsStateModel {
  show: boolean;
}

@State<ToggleDetailsStateModel>({
  name: 'show',
  defaults: {
    show: false,
  },
})
export class ToggleDetailsState {
  @Action(ToggleDetails)
  toggleDetails({
    getState,
    patchState,
  }: StateContext<ToggleDetailsStateModel>) {
    patchState({ show: !getState().show });
  }
}
