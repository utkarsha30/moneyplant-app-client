import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectExpertComponent } from './connect-expert.component';

describe('ConnectExpertComponent', () => {
  let component: ConnectExpertComponent;
  let fixture: ComponentFixture<ConnectExpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConnectExpertComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConnectExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
