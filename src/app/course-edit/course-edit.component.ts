import { Component, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from '../shared/models/course';

const errorMessages = new Map<string, string>([
  ['required', 'The field is required'],
  ['min', 'The field should be greater than 0'],
]);

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.scss'],
})
export class CourseEditComponent {
  mode: 'add' | 'edit' = 'add';
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public course: Course
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [this.course?.name || '', Validators.required],
      instructor: [this.course?.instructor || '', Validators.required],
      hours: [
        this.course?.hours || 0,
        [Validators.required, Validators.min(1)],
      ],
      likes: [this.course?.likes || 0],
      image: [this.course?.image || '', Validators.required],
      reviews: [this.course?.reviews || []],
    });

    if (this.course) {
      this.mode = 'edit';
    }
  }

  getErrorMessage(field: string) {
    const control = this.form.controls[field];
    for (const error in control.errors) {
      if (control.errors.hasOwnProperty(error) && control.touched) {
        return errorMessages.get(error)?.replace('{field}', field);
      }
    }
    return '';
  }
}
