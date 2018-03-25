import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-extended',
  templateUrl: './extended.component.html',
  styleUrls: ['./extended.component.css']
})
export class ExtendedComponent implements OnInit {
person: any="";
  constructor(private route: ActivatedRoute, private dataService: DataServiceService) { }

  ngOnInit() {
    this.getPersonData()
  }

  getPersonData(){
    this.route.params.subscribe(
      params=>{
        console.log(params.id);
      this.person = this.dataService.getPerson(params.id);
      }
    )
  }

}
