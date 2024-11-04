import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule} from '@angular/material/table';
import { studentFullNamePipe } from './pipes/student-full-name.pipe';
import { HighligthDirective } from './directives/highligth.directive';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { RepeatDirective } from './directives/repeat.directive';
import { MatNavList } from '@angular/material/list';





@NgModule({
  declarations: [
    studentFullNamePipe,
    HighligthDirective,
    RepeatDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatTableModule,
    studentFullNamePipe,
    MatProgressSpinnerModule,
    RepeatDirective,
  ]
})
export class SharedModule { }
