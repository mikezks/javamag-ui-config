import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanTicketComponent } from './scan-ticket.component';

describe('ScanTicketComponent', () => {
  let component: ScanTicketComponent;
  let fixture: ComponentFixture<ScanTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScanTicketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScanTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
