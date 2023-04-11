import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConnectExpertComponent } from '../connect-expert/connect-expert.component';
import { ExpertData } from '../models/expert.model';

@Component({
  selector: 'app-expert-card',
  templateUrl: './expert-card.component.html',
  styleUrls: ['./expert-card.component.css'],
})
export class ExpertCardComponent {
  @Input()
  experts: ExpertData[] = [];
  id: string = '';
  constructor(private matdialog: MatDialog) {}
  connectNow(id: string) {
    this.id = id;
    sessionStorage.setItem('expertId', this.id);
    this.matdialog.open(ConnectExpertComponent);
  }
}
