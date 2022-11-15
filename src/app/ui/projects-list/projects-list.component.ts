import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import {Observable} from "rxjs";
import {ProjectModel} from "../../model/project.model";

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsListComponent {
  constructor(private _projectService: ProjectService) {}
  data$: Observable<ProjectModel[] | null> = this._projectService.getAll();
}
