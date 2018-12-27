import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    constructor() { }

    secondClick() {
        return console.log('clicked');
    }
}
