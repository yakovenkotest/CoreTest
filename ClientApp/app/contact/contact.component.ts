import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    messageForm: FormGroup;
    submitted = false;
    success = false;

    constructor(private formBuilder: FormBuilder, private router: Router) { }

    ngOnInit() {
        this.messageForm = this.formBuilder.group({
            name: ['', Validators.required],
            message: ['', Validators.required]
        });
    }

    onSubmit() {
        this.submitted = true;

        if (this.messageForm.invalid) {
            return;
        }

        this.success = true;
    }

    gotoYandex() {
        this.router.navigate(['/about']);
    }
}
