import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaycategorylistComponent } from './displaycategorylist.component';

describe('DisplaycategorylistComponent', () => {
  let component: DisplaycategorylistComponent;
  let fixture: ComponentFixture<DisplaycategorylistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplaycategorylistComponent]
    });
    fixture = TestBed.createComponent(DisplaycategorylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
