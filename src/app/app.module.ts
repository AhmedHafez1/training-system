import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { courses, COURSES } from './shared/courses';

@NgModule({
  declarations: [AppComponent, CourseListComponent],
  imports: [BrowserModule, AppRoutingModule, MatCardModule],
  providers: [{ provide: COURSES, useValue: courses }],
  bootstrap: [AppComponent],
})
export class AppModule {}
