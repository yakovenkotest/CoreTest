import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    h1Style: boolean = false;

    constructor(private data: DataService) { }

    ngOnInit() {
    }

    firstClick() {
        console.log('clicked');
        this.h1Style = !this.h1Style;
    }

    secondClick() {
        this.data.secondClick();
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
