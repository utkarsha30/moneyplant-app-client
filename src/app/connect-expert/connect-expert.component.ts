import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactInfo } from '../models/contacts.model';
import { ExpertData } from '../models/expert.model';
import { ExpertService } from '../services/expert.service';
import { MatDialog } from '@angular/material/dialog';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-connect-expert',
  templateUrl: './connect-expert.component.html',
  styleUrls: ['./connect-expert.component.css'],
})
export class ConnectExpertComponent implements OnInit {
  update: boolean = false;
  contactInfo?: ContactInfo;
  updatedData!: ExpertData;
  contactForm!: FormGroup;
  faTimes = faTimes;
  agree = false;
  constructor(
    private expertService: ExpertService,
    private snackBar: MatSnackBar,
    private matdialog: MatDialog
  ) {}
  phoneValidator(control: FormControl): { [key: string]: any } | null {
    const phoneRegex = /^\+\d{2}\s\d{10}$/; // Regex to match phone number format

    if (control.value && !phoneRegex.test(control.value)) {
      return { invalidPhone: true };
    }

    return null;
  }
  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(this.contactInfo?.name, [
        Validators.required,
        Validators.maxLength(50),
      ]),
      emailId: new FormControl(this.contactInfo?.emailId, [
        Validators.required,
        Validators.maxLength(50),
      ]),
      mobileNo: new FormControl(this.contactInfo?.mobileNo, [
        Validators.required,
        this.phoneValidator,
      ]),
      message: new FormControl(this.contactInfo?.message, [
        Validators.required,
        Validators.maxLength(500),
      ]),
      agree: new FormControl(false, Validators.requiredTrue),
    });
  }
  onSubmit() {
    // console.log(this.contactForm.controls['name'].value);
    const expertId = sessionStorage.getItem('expertId') ?? '';
    const data = {
      peopleContacting: {
        name: this.contactForm.controls['name'].value,
        emailId: this.contactForm.controls['emailId'].value,
        mobileNo: this.contactForm.controls['mobileNo'].value,
        message: this.contactForm.controls['message'].value,
      },
    };

    this.expertService.connectNow(expertId, data).subscribe(
      (data) => {
        this.updatedData = data;
        console.log('updatedData', this.updatedData);
        // display success snackbar
        // this.snackBar.open('Connected to expert successfully', 'Close', {
        //   duration: 2000,
        // });
        this.update = true;
        // this.matdialog.closeAll();
      },
      (error) => {
        console.log(error);
        // display error snackbar
        this.snackBar.open(`${error}`, 'Close', {
          duration: 2000,
        });
      }
    );
  }
  closeWindow() {
    this.matdialog.closeAll();
  }
}
