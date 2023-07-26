import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedetailsComponent } from './pokedetails.component';

describe('PokedetailsComponent', () => {
  let component: PokedetailsComponent;
  let fixture: ComponentFixture<PokedetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokedetailsComponent]
    });
    fixture = TestBed.createComponent(PokedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
