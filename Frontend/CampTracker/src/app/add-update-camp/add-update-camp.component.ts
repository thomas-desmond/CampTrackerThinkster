import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { CampService } from '../camp.service';
import { Camp } from '../shared/models/camp.model';

@Component({
  selector: 'app-add-update-camp',
  templateUrl: './add-update-camp.component.html',
  styleUrls: ['./add-update-camp.component.css']
})
export class AddUpdateCampComponent implements OnInit {
  @Output() campCreated = new EventEmitter<any>();
  @Input() campingInfo: Camp;

  private clearCampInfo() {
    this.campingInfo = {
      id: undefined,
      date: new Date().toJSON(),
      name: '',
      campsiteNumber: 0,
      notes: ''
    };
  };
  constructor(private campService: CampService) { }

  ngOnInit() {
    this.clearCampInfo();
  }

  public addOrUpdateCampingRecord = function(event) {
    this.campService.add(this.campingInfo);
    // this.campCreated.emit(this.campingInfo);
    // this.clearCampInfo();
    // this.clearJoggingInfo();
  };
}
