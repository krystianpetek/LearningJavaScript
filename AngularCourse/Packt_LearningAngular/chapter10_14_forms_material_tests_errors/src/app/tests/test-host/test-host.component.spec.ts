import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHostComponent } from './test-host.component';
import { BindingsComponent } from '../bindings/bindings.component';
import { By } from '@angular/platform-browser';
import { MatButtonHarness } from '@angular/material/button/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';

describe('TestHostComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let loader = TestbedHarnessEnvironment.loader(fixture!);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestHostComponent, BindingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display the title', () => {
    const titleDisplay: HTMLElement = fixture.nativeElement.querySelector('p');
    expect(titleDisplay.textContent).toEqual(component.testTitle);
  });

  it('should emit the liked event', () => {
    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.isFavorite).toBeTrue();
  });

  it('should emit the liked event usiong debugElement', () => {
    const buttonDe = fixture.debugElement.query(By.css('button'));
    buttonDe.triggerEventHandler('click');
    expect(component.isFavorite).toBeTrue();
  });

  it('should emit the liked event using harness', async () => {
    const buttonHarness = await loader.getHarness(MatButtonHarness);
    await buttonHarness.click();
    expect(component.isFavorite).toBeTrue();
  });
});
