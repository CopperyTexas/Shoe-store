import { Component, Input } from '@angular/core';
import { Employee } from '../../../models/employee.model';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-teamcard',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './teamcard.component.html',
  styleUrl: './teamcard.component.scss',
})
export class TeamcardComponent {
  @Input() employee!: Employee;
}
