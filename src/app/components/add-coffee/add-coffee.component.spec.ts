import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoffeeComponent } from './add-coffee.component';

describe('TestComponent', () => {
  let component: AddCoffeeComponent;
  let fixture: ComponentFixture<AddCoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCoffeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
