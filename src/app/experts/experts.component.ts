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
@Component({
  selector: 'app-experts',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.css'],
})
export class ExpertsComponent implements OnInit {
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
      console.log(this.experts);
    });
    this.expertService.getAllLocations().subscribe((locations) => {
      this.locations = locations;
      console.log(this.locations);
    });
    this.search = new FormGroup({
      location: new FormControl(this.location),
      specialization: new FormControl(this.expert?.specialization),
    });
  }
  onSubmit() {
    console.log('demo');
    console.log(this.search);
    console.log(this.search.controls['location'].value);
  }
}
