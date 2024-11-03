import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { generateRandomString } from '../../../../shared/utils';
import { Student } from '../models';

interface StudentDialogData {
  editingStudent?: Student;
}

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrl: './student-dialog.component.scss',
})
export class studentDialogComponent {
  studentForm: FormGroup;




  constructor(
    private matDialogRef: MatDialogRef<studentDialogComponent>, 
    private formBuilder: FormBuilder) {
    
      this.studentForm = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required]],
    })
  }

    onSave(): void{
      if (this.studentForm.invalid) {
        this.studentForm.markAllAsTouched();
      } else {
        this.matDialogRef.close({
          ...this.studentForm.value,
          id: generateRandomString(5),
          createAt: new Date(),
        });
      }



      this.matDialogRef.close({ result: 'ok' });
      }
}
