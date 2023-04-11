import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactInfo } from '../models/contacts.model';
import { ExpertData } from '../models/expert.model';
@Component({
  selector: 'app-connect-expert',
  templateUrl: './connect-expert.component.html',
  styleUrls: ['./connect-expert.component.css'],
})
export class ConnectExpertComponent implements OnInit {
  contactInfo?: ContactInfo;

  contactForm!: FormGroup;
  expertId!: ExpertData['_id'] | null;
  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(this.contactInfo?.name),
      emailId: new FormControl(this.contactInfo?.emailId),
      mobileNo: new FormControl(this.contactInfo?.mobileNo),
      message: new FormControl(this.contactInfo?.message),
    });
  }
  onSubmit() {
    // console.log(this.contactForm.controls['name'].value);
    console.log(this.contactForm.value);

    this.expertId = sessionStorage.getItem('expertId');
    console.log(this.expertId);
  }
}
