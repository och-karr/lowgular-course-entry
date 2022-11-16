import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesFacesComponentModule } from "./ui/employees-faces/employees-faces.component-module";
import { EmployeeFormComponentModule } from "./ui/employee-form/employee-form.component-module";
import { EmployeeListComponentModule } from "./ui/employee-list/employee-list.component-module"
import { ProjectsListComponentModule } from "./ui/projects-list/projects-list.component-module";
import { EmployeeServiceModule } from "./services/employee.service-module";
import { ProjectServiceModule } from "./services/project.service-module";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeeListComponentModule,
    EmployeesFacesComponentModule,
    EmployeeServiceModule,
    ProjectsListComponentModule,
    ProjectServiceModule,
    EmployeeFormComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
