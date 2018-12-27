import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    h1Style: boolean = false;
    users: Object;

    constructor(private data: DataService) { }

    ngOnInit() {
    }

    firstClick() {
        console.log('clicked');
        this.h1Style = !this.h1Style;
    }

    secondClick() {
        this.data.getUsers().subscribe(data => {
            this.users = data;
            console.log(this.users);
        });
    }

    //(focus)="myMethod()"
    //(blur)="myMethod()" 
    //(submit)="myMethod()"  
    //(scroll)="myMethod()"

    //(cut)="myMethod()"
    //(copy)="myMethod()"
    //(paste)="myMethod()"

    //(keydown)="myMethod()"
    //(keypress)="myMethod()"
    //(keyup)="myMethod()"

    //(mouseenter)="myMethod()"
    //(mousedown)="myMethod()"
    //(mouseup)="myMethod()"

    //(click)="myMethod()"
    //(dblclick)="myMethod()"

    //(drag)="myMethod()"
    //(dragover)="myMethod()"
    //(drop)="myMethod()"
}
