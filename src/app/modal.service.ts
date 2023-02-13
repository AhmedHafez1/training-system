import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs';
import { AddReviewComponent } from './add-review/add-review.component';
import { Review } from './shared/models/review';
import { AddReviewAction } from './state/review.actions';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(public dialog: MatDialog) {}

  openDialog(component: any, data: any, width: string) {
    const dialogRef = this.dialog.open(component, {
      data,
      width,
    });

    return dialogRef.afterClosed().pipe(filter((data) => Boolean(data)));
  }
}
