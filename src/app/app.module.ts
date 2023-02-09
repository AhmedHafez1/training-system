import { MatCardModule } from '@angular/material/card';
import { NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { HttpClientModule } from '@angular/common/http';

export const API_URL = new InjectionToken<string>('API_URL');
@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    HeaderComponent,
    CourseEditComponent,
    CourseDetailsComponent,
    CourseItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDividerModule,
  ],
  providers: [{ provide: API_URL, useValue: 'http://localhost:3000' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
