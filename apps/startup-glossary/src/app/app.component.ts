import { Component } from '@angular/core';

@Component({
    selector: 'openforge-academy-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'startup-glossary';
    constructor() {
        console.log('jedi test');
    }
}
