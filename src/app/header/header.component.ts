import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { ToggleDetails } from '../state/details.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private store: Store) {}
  toggleDetails() {
    this.store.dispatch(new ToggleDetails());
  }
}
