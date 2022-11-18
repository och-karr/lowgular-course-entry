import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { CreateEmployeeModel } from '../../model/create-employee.model';

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

  constructor(private _employeeService: EmployeeService) {
  }

  // onButtonClicked(form: {name: string, salary: string, age: string}) {
  //   alert('User was successfully added to the database. Name: ' + form.name + ', Salary: '+ form.salary + ', Age:' + form.age);
  // }

  onFormSubmitted(form: CreateEmployeeModel) {
    this._employeeService.create(form).subscribe({
      next(response) {
        alert(`User was successfully added to the database. Name: ${response.data.name}, age: ${response.data.age}, salary: ${response.data.salary}`);
      }
    });
  }
}
