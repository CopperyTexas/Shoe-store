import { Component, Input } from '@angular/core';
import { Achievements } from '../../../models/achievements.model';

@Component({
  selector: 'app-achievements',
  imports: [],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.scss',
})
export class AchievementsComponent {
  @Input() achievements!: Achievements;
}
