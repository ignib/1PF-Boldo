import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { User } from './models';

export interface PeriodicElement {
  name: string;
  id: number;
  email: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen', email: 1.0079, symbol: 'H'},
  {id: 2, name: 'Helium', email: 4.0026, symbol: 'He'},
  {id: 3, name: 'Lithium', email: 6.941, symbol: 'Li'},
  {id: 4, name: 'Beryllium', email: 9.0122, symbol: 'Be'},
  {id: 5, name: 'Boron', email: 10.811, symbol: 'B'},
  {id: 6, name: 'Carbon', email: 12.0107, symbol: 'C'},
  {id: 7, name: 'Nitrogen', email: 14.0067, symbol: 'N'},
  {id: 8, name: 'Oxygen', email: 15.9994, symbol: 'O'},
  {id: 9, name: 'Fluorine', email: 18.9984, symbol: 'F'},
  {id: 10, name: 'Neon', email: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  constructor(private matDialog: MatDialog) {}
  displayedColumns: string[] = ['id', 'name', 'email', 'createdAt', 'actions',];
  dataSource = [] = [];


  openModal(): void{
    this.matDialog.open(UserDialogComponent)
  }

}
