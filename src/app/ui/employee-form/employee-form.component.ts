import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    salary: new FormControl(null, [Validators.required, Validators.min(0)]),
    age: new FormControl(null, Validators.min(0))
  });

  onButtonClicked(form: {name: string, salary: string, age: string}) {
    alert('User was successfully added to the database. Name: ' + form.name + ', Salary: '+ form.salary + ', Age:' + form.age);
  }
}
