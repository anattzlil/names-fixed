import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Person } from './models/person'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataServiceService implements OnInit{
  people: Person[] = [];
  peopleChange = new BehaviorSubject(this.people);
  constructor(private http: HttpClient) { }

ngOnInit(){
  this.getJSON();
}

getJSON(){
  this.getNames().subscribe(
    data=>{
      this.people = data;
      console.log(this.people);
    }
  ),error=>console.log(error);
}

getNames(): Observable<any>{
return this.http.get<any>('../assets/people_list.json');
}

getPeople(){
  return this.people;
}

onDelete(user){
  this.people = this.people.filter((item)=>{return item._id !== user._id});
  return this.people;
};

onAdd(person){
  person._id = this.IDGenerator();
  this.people.push(person);
  console.log(person);
  return this.people;
}


IDGenerator() {
  var length = 8;
  var timestamp = +new Date;

  let _getRandomInt=function( min, max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
  }

  var ts = timestamp.toString();
    var parts = ts.split( "" ).reverse();
    var id = "";
    
    for( var i = 0; i <length; ++i ) {
     var index = _getRandomInt( 0, parts.length - 1 );
     id += parts[index];	 
    }
    
    return id;
  }

onEdit(person){
  for( var i = 0; i < this.people.length; i++){
    if (this.people[i]._id === person._id){
      this.people[i] = person
    }
  }
  return this.people;
}

getPerson(id){
  console.log(id);
  console.log(this.people);
  for( var i = 0; i < this.people.length; i++){
    if (this.people[i]._id === id){
      console.log(this.people[i]);
      return this.people[i];
}}
}
}
