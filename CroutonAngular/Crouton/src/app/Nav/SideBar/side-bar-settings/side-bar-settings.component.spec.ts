import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarSettingsComponent } from './side-bar-settings.component';

describe('SideBarSettingsComponent', () => {
  let component: SideBarSettingsComponent;
  let fixture: ComponentFixture<SideBarSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
