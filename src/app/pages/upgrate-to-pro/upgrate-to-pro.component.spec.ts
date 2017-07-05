import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgrateToProComponent } from './upgrate-to-pro.component';

describe('UpgrateToProComponent', () => {
  let component: UpgrateToProComponent;
  let fixture: ComponentFixture<UpgrateToProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpgrateToProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgrateToProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
