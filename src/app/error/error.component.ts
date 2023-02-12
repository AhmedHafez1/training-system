import { Observable } from 'rxjs';
import { CourseState } from './../state/course.state';
import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-error',
  template: ``,
})
export class ErrorComponent {
  @Select(CourseState.errorSelector) error$!: Observable<string>;

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.error$.subscribe((error) => {
      if (error) {
        this.snackBar.open(error, '', {
          duration: 7000,
        });
      }
    });
  }
}
