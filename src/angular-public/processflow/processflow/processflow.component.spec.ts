import { Component, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { dispatchMouseEvent } from '@sbb-esta/angular-core/testing';
import { IconChevronRightModule } from '@sbb-esta/angular-icons/arrow';

import { ProcessflowModule } from '../processflow.module';

import { ProcessflowComponent } from './processflow.component';

// tslint:disable:i18n
@Component({
  selector: 'sbb-processflow-test',
  template: `
    <sbb-processflow #processflow>
      <sbb-processflow-step title="Step 1">
        <div>
          Step content 1
        </div>
      </sbb-processflow-step>
      <sbb-processflow-step title="Step 2">
        <div>
          Step content 2
        </div>
      </sbb-processflow-step>
      <sbb-processflow-step title="Step 3">
        <div>
          Step content 3
        </div>
      </sbb-processflow-step>
    </sbb-processflow>
  `,
})
export class ProcessflowTestComponent {
  @ViewChild('processflow', { static: true }) processflow: ProcessflowComponent;
}

describe('ProcessflowComponent', () => {
  let component: ProcessflowComponent;
  let fixture: ComponentFixture<ProcessflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IconChevronRightModule],
      declarations: [ProcessflowComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('ProcessflowComponent user interaction', () => {
  let component: ProcessflowTestComponent;
  let fixture: ComponentFixture<ProcessflowTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ProcessflowModule],
      declarations: [ProcessflowTestComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessflowTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should go to the next step', () => {
    expect(component.processflow.getActiveStep()!.title).toBe('Step 1');
    component.processflow.nextStep();
    fixture.detectChanges();
    expect(component.processflow.getActiveStep()!.title).toBe('Step 2');
  });

  it('should go to the previous step', () => {
    expect(component.processflow.getActiveStep()!.title).toBe('Step 1');
    component.processflow.nextStep();
    fixture.detectChanges();
    expect(component.processflow.getActiveStep()!.title).toBe('Step 2');
    component.processflow.prevStep();
    fixture.detectChanges();
    expect(component.processflow.getActiveStep()!.title).toBe('Step 1');
  });

  it('should disable the next step when going backwards', () => {
    expect(component.processflow.getActiveStep()!.title).toBe('Step 1');
    component.processflow.nextStep();
    fixture.detectChanges();
    expect(component.processflow.getActiveStep()!.title).toBe('Step 2');
    component.processflow.prevStep();
    fixture.detectChanges();
    expect(component.processflow.getActiveStep()!.title).toBe('Step 1');
    expect(component.processflow.steps.toArray()[1].disabled).toBeTruthy();
  });

  it('should not be possible to click on next steps', () => {
    expect(component.processflow.getActiveStep()!.title).toBe('Step 1');
    const steps = document.querySelectorAll('.sbb-processflow-step button');
    dispatchMouseEvent(steps[1], 'click');
    fixture.detectChanges();
    expect(component.processflow.getActiveStep()!.title).toBe('Step 1');
  });

  it('should be possible to click on previous steps', () => {
    component.processflow.nextStep();
    component.processflow.nextStep();
    fixture.detectChanges();
    const steps = document.querySelectorAll('.sbb-processflow-step button');
    dispatchMouseEvent(steps[0], 'click');
    fixture.detectChanges();
    expect(component.processflow.getActiveStep()!.title).toBe('Step 1');
  });

  it('should disable next steps when clicking on previous steps', () => {
    component.processflow.nextStep();
    component.processflow.nextStep();
    fixture.detectChanges();
    const steps = document.querySelectorAll('.sbb-processflow-step button');
    dispatchMouseEvent(steps[0], 'click');
    fixture.detectChanges();
    expect(
      steps[1].classList.contains('sbb-disabled') && steps[2].classList.contains('sbb-disabled')
    ).toBeTruthy();
  });
});
