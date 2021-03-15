import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
	d = 'Actualities';
	constructor() {}

	ngOnInit(): void {}
	typin(event: Event) {
		this.d = (event.target as HTMLInputElement).value;
	}
}
