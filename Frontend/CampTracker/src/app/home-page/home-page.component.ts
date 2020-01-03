import { Component, OnInit } from '@angular/core';
import { CampService } from '../camp.service';
import { Camp } from '../shared/models/camp.model';

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
}
