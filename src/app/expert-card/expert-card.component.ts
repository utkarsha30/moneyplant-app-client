import { Component, Input } from '@angular/core';
import { ExpertData } from '../models/expert.model';

@Component({
  selector: 'app-expert-card',
  templateUrl: './expert-card.component.html',
  styleUrls: ['./expert-card.component.css'],
})
export class ExpertCardComponent {
  @Input()
  experts: ExpertData[] = [];
}
