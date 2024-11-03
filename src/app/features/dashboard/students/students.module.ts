import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { studentsComponent } from './students.component';

import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../../shared/shared.module';
import { studentDialogComponent } from './student-dialog/student-dialog.component';
import { studentFullNamePipe } from '../../../shared/pipes/student-full-name.pipe';



@NgModule({
  declarations: [
    studentsComponent,
    studentDialogComponent,
  ],

  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule,
    MatButtonModule,
    MatCardModule,
  ],
  exports: [
    studentsComponent,
    studentFullNamePipe,
  ],
})
export class StudentsModule { }
