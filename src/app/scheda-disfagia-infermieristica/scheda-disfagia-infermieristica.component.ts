import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-scheda-disfagia-infermieristica',
  templateUrl: './scheda-disfagia-infermieristica.component.html',
  styleUrls: ['./scheda-disfagia-infermieristica.component.css']
})

export class SchedaDisfagiaInfermieristicaComponent implements OnInit {

	formData = {};
	formView = {};



  constructor() { }

  ngOnInit() {
  }

}
