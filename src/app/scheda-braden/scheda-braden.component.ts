import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheda-braden',
  templateUrl: './scheda-braden.component.html',
  styleUrls: ['./scheda-braden.component.css']
})
export class SchedaBradenComponent implements OnInit {

	formData = {
		'variabili' : 21
	};
	formView={};

  
  constructor() { }

  ngOnInit() {
  }

}
