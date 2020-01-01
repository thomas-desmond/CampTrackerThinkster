import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateCampComponent } from './add-update-camp.component';

describe('AddUpdateCampComponent', () => {
  let component: AddUpdateCampComponent;
  let fixture: ComponentFixture<AddUpdateCampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpdateCampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
