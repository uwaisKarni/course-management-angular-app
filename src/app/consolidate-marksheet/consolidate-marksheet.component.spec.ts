import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolidateMarksheetComponent } from './consolidate-marksheet.component';

describe('ConsolidateMarksheetComponent', () => {
  let component: ConsolidateMarksheetComponent;
  let fixture: ComponentFixture<ConsolidateMarksheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsolidateMarksheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolidateMarksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
