import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-update-camp',
  templateUrl: './add-update-camp.component.html',
  styleUrls: ['./add-update-camp.component.css']
})
export class AddUpdateCampComponent implements OnInit {
  @Output() campCreated = new EventEmitter<any>();
  @Input() campingInfo: any;

  private clearCampInfo = function() {
    this.campingInfo = {
      id: undefined,
      date: Date.now(),
      name: '',
      campsiteNumber: 0,
      notes: ''
    };
  };
  constructor() { }

  ngOnInit() {
    this.clearCampInfo();
  }

  public addOrUpdateCampingRecord = function(event) {
    this.campCreated.emit(this.campingInfo);
    this.clearCampInfo();
    // this.clearJoggingInfo();
  };
}
