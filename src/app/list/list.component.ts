import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Person } from '../models/person';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MatTableDataSource } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AddEditComponent } from '../add-edit/add-edit.component';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private dataService: DataServiceService, public dialog: MatDialog) {
   dataService.ngOnInit();
   }
   dataSource: MatTableDataSource<Person>;
  displayedColumns = ['name', 'address', 'phone', 'picture', 'icons'];
people: Person[];
newPerson: Person = new Person();

  ngOnInit() {
    this.getJSON();
  }

  getJSON(){
    this.dataService.getNames().subscribe(
      data=>{
        this.dataSource = new MatTableDataSource(data);
        this.people = data;
        console.log(this.dataSource);
      }
    ),error=>console.log(error);
  }

  onDelete(user){
    console.log(user);
    this.dataSource = new MatTableDataSource(this.dataService.onDelete(user));
  };

  onAdd(){
    let dialogRef = this.dialog.open(AddEditComponent, {
      width: '500px',
      data: { person: this.newPerson }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log(result);
        this.dataSource = new MatTableDataSource(this.dataService.onAdd(result));
        this.newPerson = new Person();
      }
    });
  }

  onEdit(person){
    let dialogRef = this.dialog.open(AddEditComponent, {
      width: '500px',
      data: { person: person }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== person){
        console.log(result);
        this.dataSource = new MatTableDataSource(this.dataService.onEdit(result));
        this.newPerson = new Person();
      }
    });
  }

  nameClicked(){
    console.log('clicked');
  }

}

