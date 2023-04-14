import { Component, OnInit } from '@angular/core';
import { ExpertData } from '../models/expert.model';
import { LocationData } from '../models/locations.model';
import { ExpertService } from '../services/expert.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  faLocationDot,
  faMagnifyingGlass,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-experts',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.css'],
})
export class ExpertsComponent implements OnInit {
  suggestions?: ExpertData['specialization'][];
  locations: LocationData[] = [];
  location!: LocationData;
  faLocationDot = faLocationDot;
  faMagnifyingGlass = faMagnifyingGlass;
  faMapMarkerAlt = faMapMarkerAlt;
  experts: ExpertData[] = []; // declare experts as an array of ExpertData
  expert!: ExpertData;
  search!: FormGroup;
  constructor(private expertService: ExpertService) {}
  //session.remove
  ngOnInit() {
    this.expertService.getAllExpertsData().subscribe((experts) => {
      this.experts = experts;
    });
    this.expertService.getAllLocations().subscribe((locations) => {
      this.locations = locations;
    });
    this.search = new FormGroup({
      location: new FormControl(this.location),
      specialization: new FormControl(this.expert?.specialization),
    });
    this.expertService.getAllSpecializations().subscribe((suggestions) => {
      this.suggestions = suggestions;
    });
  }
  onSubmit() {
    const location = this.search.get('location')?.value;
    const city = location?.city;
    const state = location?.state;
    const specialization = this.search.get('specialization')?.value;
    // console.log(!specialization);
    this.expertService
      .filterExperts(city, state, specialization)
      .subscribe((experts) => {
        this.experts = experts;
      });
  }
}
