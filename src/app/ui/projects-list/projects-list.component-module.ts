import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './projects-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProjectsListComponent],
  providers: [],
  exports: [ProjectsListComponent]
})
export class ProjectsListComponentModule {
}
