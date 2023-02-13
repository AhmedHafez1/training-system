import { AddCourseAction } from './../state/course.actions';
import { ModalService } from './../modal.service';
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { ToggleDetails } from '../state/details.actions';
import { CourseEditComponent } from '../course-edit/course-edit.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private store: Store, private modalService: ModalService) {}

  toggleDetails() {
    this.store.dispatch(new ToggleDetails());
  }

  addCourse() {
    this.modalService
      .openDialog(CourseEditComponent, null, '600px')
      .subscribe((course) => this.store.dispatch(new AddCourseAction(course)));
  }
}
