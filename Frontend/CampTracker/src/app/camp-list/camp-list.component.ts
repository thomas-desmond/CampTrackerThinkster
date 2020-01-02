import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CampService } from '../camp.service';

@Component({
  selector: 'app-camp-list',
  templateUrl: './camp-list.component.html',
  styleUrls: ['./camp-list.component.css']
})
export class CampListComponent implements OnInit {
  private campingData$: Observable<any[]>;

  constructor(private campService: CampService) {     
    this.campingData$ = this.campService.get()
  }

  ngOnInit() {
  }

}
