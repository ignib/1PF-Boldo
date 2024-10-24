import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { generateRandomString } from '../../../../shared/utils';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styles: ``
})
export class UserDialogComponent {
  userForm: FormGroup;




  constructor(
    private matDialogRef: MatDialogRef<UserDialogComponent>, 
    private formBuilder: FormBuilder) {
    
      this.userForm = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required]],
    })
  }

    onSave(): void{
      if (this.userForm.invalid) {
        this.userForm.markAllAsTouched();
      } else {
        this.matDialogRef.close({
          ...this.userForm.value,
          id: generateRandomString(5),
          createAt: new Date(),
        });
      }



      this.matDialogRef.close({ result: 'ok' });
      }
}


