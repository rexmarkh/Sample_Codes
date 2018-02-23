import { Component, OnInit } from '@angular/core';
import { TestapiService } from '../../services/testapi.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-testapi',
  templateUrl: './testapi.component.html',
  styleUrls: ['./testapi.component.scss']
})
export class TestapiComponent implements OnInit {


  constructor(private testapiService: TestapiService) { }

  ngOnInit() {

  }

  
}
