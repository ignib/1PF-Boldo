import { Injectable } from '@angular/core';
import { Student } from '../../features/dashboard/students/models';
import { delay, Observable, of } from 'rxjs';
import { stopHandlingAutoChangeDetectionStatus } from '@angular/cdk/testing';


const DATABASE: Student[] = [
  {  id: 1, firstName: 'Ignacio', lastName: 'Boldo', createdAt: new Date(), email: 'igniboldo@gmail.com'},
  {  id: 2, firstName: 'Luciano', lastName: 'Minibock', createdAt: new Date(), email: 'lminibock@gmail.com'},
  {  id: 3, firstName: 'Lautaro', lastName: 'Boldo', createdAt: new Date(), email: 'lautiboldo@gmail.com'},
  {  id: 4, firstName: 'Daniela', lastName: 'Minibock', createdAt: new Date(), email: 'danimini@gmail.com'},
  {  id: 5, firstName: 'Gabriel', lastName: 'Boldo', createdAt: new Date(), email: 'gabiboldo@gmail.com'},
  {  id: 6, firstName: 'Karina', lastName: 'Luffi', createdAt: new Date(), email: 'kariluffi@gmail.com'},
];

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }

  getStudents(): Observable<Student[]> {
    return new Observable((observer) => {
      setInterval(() => {
        observer.next(DATABASE);
        observer.complete();
      }, 3000);
    })
  }
}



