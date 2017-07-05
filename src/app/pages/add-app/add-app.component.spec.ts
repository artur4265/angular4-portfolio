import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppComponent } from './add-app.component';

describe('AddAppComponent', () => {
  let component: AddAppComponent;
  let fixture: ComponentFixture<AddAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
