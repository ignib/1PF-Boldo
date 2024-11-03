import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { studentDialogComponent } from './student-dialog/student-dialog.component';
import { Student } from './models';
import { StudentsService } from '../../../core/services/students.service';



@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class studentsComponent implements OnInit{
    displayedColumns: string[] = ['id', 'name', 'email', 'createdAt', 'actions',];
    dataSource: Student[] = [];

    isLoading = false;

    usuario = {
      nombre: 'Ignacio',
      apellido: 'Boldo',
    };


  constructor(
    private matDialog: MatDialog, 
    private studentsService: StudentsService
  ) {}

  ngOnInit(): void {
    this.loadStudents()
  }

  loadStudents():void {
    this.isLoading = true;
    this.studentsService.getStudents().subscribe({
      next: (students) => {
        this.dataSource = students;
      },
      error: () =>{
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    })
  }

  onDelete(id: string) {
    if(confirm('Esta seguro?')) {
      this.isLoading = true;
      this.studentsService.removeStudentById(id).subscribe({
        next: (students) => {
          this.dataSource = students;
        },
        error: (err) => {
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        },
      });
    }
  }

  openModal(): void{
    this.matDialog.open(studentDialogComponent).afterClosed().subscribe({
      next: (result) => {

        if(!!result) {
          if(editingStudent) {
            this.handleUpdate(editingStudent.id, result);
          } else {
          this.dataSource = [...this.dataSource, result];        
        }
      }
    }
  })
  }