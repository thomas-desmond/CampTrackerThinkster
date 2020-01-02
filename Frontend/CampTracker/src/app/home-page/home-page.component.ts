import { Component, OnInit } from '@angular/core';
import { CampService } from '../camp.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private campService: CampService) {     
  }

  ngOnInit() {    
  }

  public createOrUpdateCamp = function(camp: any) {
    this.campService.add(camp);
  }

}
