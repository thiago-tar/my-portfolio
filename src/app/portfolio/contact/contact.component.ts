import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fromEventPattern } from 'rxjs';
import { Contact } from 'src/app/model/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(40), Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.maxLength(500), Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.minLength(9)]],
    });
  }

  onSubmit(){
    var contact = this.contactForm.value as Contact
  }
}
