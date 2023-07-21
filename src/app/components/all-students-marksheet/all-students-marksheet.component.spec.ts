import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStudentsMarksheetComponent } from './all-students-marksheet.component';

describe('AllStudentsMarksheetComponent', () => {
  let component: AllStudentsMarksheetComponent;
  let fixture: ComponentFixture<AllStudentsMarksheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllStudentsMarksheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllStudentsMarksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
