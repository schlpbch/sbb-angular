import { Component, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { dispatchMouseEvent } from '@sbb-esta/angular-core/testing';
import { IconChevronRightModule } from '@sbb-esta/angular-icons/arrow';

import { ProcessflowModule } from '../processflow.module';

import { ProcessflowComponent } from './processflow.component';

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

@Component({
  selector: 'sbb-processflow-test',
  template: `
    <sbb-processflow #processflow skippable="true">
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

describe('ProcessflowTestComponent skippable', () => {
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

  it('all steps should have disabled set to false', () => {
    expect(component.processflow.steps.toArray()[0].disabled).toBeFalsy();
    expect(component.processflow.steps.toArray()[1].disabled).toBeFalsy();
    expect(component.processflow.steps.toArray()[2].disabled).toBeFalsy();
  });

  it('steps should be clickable directly from the title button', () => {
    const steps = document.querySelectorAll('.sbb-processflow-step button');
    expect(component.processflow.steps.toArray()[1].active).toBeFalsy();
    dispatchMouseEvent(steps[1], 'click');
    fixture.detectChanges();
    expect(component.processflow.steps.toArray()[1].active).toBeTruthy();
    expect(component.processflow.steps.toArray()[2].active).toBeFalsy();
    dispatchMouseEvent(steps[2], 'click');
    fixture.detectChanges();
    expect(component.processflow.steps.toArray()[2].active).toBeTruthy();
  });

  it('third step should be directly clickable', () => {
    const steps = document.querySelectorAll('.sbb-processflow-step button');
    expect(component.processflow.steps.toArray()[2].active).toBeFalsy();
    dispatchMouseEvent(steps[2], 'click');
    fixture.detectChanges();
    expect(component.processflow.steps.toArray()[2].active).toBeTruthy();
  });

  it('steps should change using the nextStep function', () => {
    component.processflow.steps.toArray()[0].active = true;
    component.processflow.steps.toArray()[1].active = false;
    component.processflow.steps.toArray()[2].active = false;
    for (let i = 0; i < 3; i++) {
      expect(component.processflow.steps.toArray()[i].active).toBeTruthy();
      for (let k = 0; k < 3; k++) {
        if (k !== i) {
          expect(component.processflow.steps.toArray()[k].active).toBeFalsy();
        }
      }
      component.processflow.nextStep();
      fixture.detectChanges();
    }
  });

  it('steps should keep disabled false when changing using the nextStep function', () => {
    component.processflow.steps.toArray()[0].active = true;
    component.processflow.steps.toArray()[1].active = false;
    component.processflow.steps.toArray()[2].active = false;
    for (let i = 0; i < 3; i++) {
      expect(component.processflow.steps.toArray()[i].active).toBeTruthy();
      for (let k = 0; k < 3; k++) {
        if (k !== i) {
          expect(component.processflow.steps.toArray()[k].active).toBeFalsy();
        }
      }
      expect(component.processflow.steps.toArray()[0].disabled).toBeFalsy();
      expect(component.processflow.steps.toArray()[1].disabled).toBeFalsy();
      expect(component.processflow.steps.toArray()[2].disabled).toBeFalsy();
      component.processflow.nextStep();
      fixture.detectChanges();
    }
  });

  it('steps should keep disabled false when changing using the prevStep function', () => {
    component.processflow.steps.toArray()[0].active = false;
    component.processflow.steps.toArray()[1].active = false;
    component.processflow.steps.toArray()[2].active = true;
    for (let i = 2; i >= 0; i--) {
      expect(component.processflow.steps.toArray()[i].active).toBeTruthy();
      for (let k = 2; k >= 0; k--) {
        if (k !== i) {
          expect(component.processflow.steps.toArray()[k].active).toBeFalsy();
        }
      }
      expect(component.processflow.steps.toArray()[0].disabled).toBeFalsy();
      expect(component.processflow.steps.toArray()[1].disabled).toBeFalsy();
      expect(component.processflow.steps.toArray()[2].disabled).toBeFalsy();
      component.processflow.prevStep();
      fixture.detectChanges();
    }
  });
});
