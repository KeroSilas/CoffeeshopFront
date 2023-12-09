import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCoffeesComponent } from './admin-coffees.component';

describe('AdminCoffeesComponent', () => {
  let component: AdminCoffeesComponent;
  let fixture: ComponentFixture<AdminCoffeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCoffeesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminCoffeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
