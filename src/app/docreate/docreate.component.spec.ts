import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocreateComponent } from './docreate.component';

describe('DocreateComponent', () => {
  let component: DocreateComponent;
  let fixture: ComponentFixture<DocreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
