import { Component, OnInit } from '@angular/core';
import shopData  from '../../../assets/json/sampleData.json';

@Component({
  selector: 'content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.scss']
})
export class ContentSectionComponent implements OnInit {

  getData: any;
  getLength : any;

  classToggled = false;

  constructor() {

  }

  ngOnInit(): void {
    this.getData = shopData;
    console.log(shopData.shopData.length);
    this.getLength = shopData.shopData.length;

  }


  public toggleField() {
    this.classToggled = !this.classToggled;  
  }


}
