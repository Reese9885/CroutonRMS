import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarStaffingComponent } from './side-bar-staffing.component';

describe('SideBarStaffingComponent', () => {
  let component: SideBarStaffingComponent;
  let fixture: ComponentFixture<SideBarStaffingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarStaffingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarStaffingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
