import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransctionHistoryComponent } from './transction-history.component';

describe('TransctionHistoryComponent', () => {
  let component: TransctionHistoryComponent;
  let fixture: ComponentFixture<TransctionHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransctionHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransctionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
