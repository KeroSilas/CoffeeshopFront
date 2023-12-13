import { ComponentFixture, TestBed } from '@angular/core/testing';

import {custcoffeeComponent} from "./cust-coffee.component";


describe('cust-coffeeeComponent', () => {
  let component: custcoffeeComponent;
  let fixture: ComponentFixture<custcoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [custcoffeeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(custcoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
