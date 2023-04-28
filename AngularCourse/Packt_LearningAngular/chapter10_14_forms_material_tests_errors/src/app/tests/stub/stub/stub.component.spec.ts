import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StubComponent } from './stub.component';
import { StubService } from '../stub.service';

describe('StubComponent', () => {
  let component: StubComponent;
  let fixture: ComponentFixture<StubComponent>;
  const stubService: Partial<StubService> = {
    name: 'Boothstomper',
  };
  let msgDisplay: HTMLElement;
  let service: StubService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StubComponent],
      providers: [
        {
          provide: StubService,
          useValue: stubService,
        },
      ],
    });

    fixture = TestBed.createComponent(StubComponent);
    component = fixture.componentInstance;

    msgDisplay = fixture.nativeElement.querySelector('span');
    service = TestBed.inject(StubService);
  });

  it('should be on a mission', () => {
    service.isBusy = true;
    fixture.detectChanges();
    expect(msgDisplay.textContent).toContain('is on a mission');
  });

  it('should be available', () => {
    service.isBusy = false;
    fixture.detectChanges();
    expect(msgDisplay.textContent).toContain('is available');
  });
});
