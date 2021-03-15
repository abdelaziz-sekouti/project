import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	d = 'Actualities';
	title = 'project';
	typin(event: Event) {
		this.d = (event.target as HTMLInputElement).value;
	}
}
