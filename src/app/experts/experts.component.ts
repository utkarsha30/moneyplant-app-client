import { Component, OnInit } from '@angular/core';
import { ExpertData } from '../models/expert.model';
import { ExpertService } from '../services/expert.service';

@Component({
  selector: 'app-experts',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.css'],
})
export class ExpertsComponent implements OnInit {
  experts: ExpertData[] = []; // declare experts as an array of ExpertData
  constructor(private expertService: ExpertService) {}
  ngOnInit() {
    this.expertService.getAllExpertsData().subscribe((experts) => {
      this.experts = experts;
      console.log(this.experts);
    });
  }
}
