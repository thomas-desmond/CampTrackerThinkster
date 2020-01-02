import { Component, OnInit } from '@angular/core';
import { CampService } from './camp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CampTracker';

  constructor() {
  }

  ngOnInit(): void {
  }

}
