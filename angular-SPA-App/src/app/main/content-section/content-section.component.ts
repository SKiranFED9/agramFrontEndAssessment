import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import shopData  from '../../../assets/json/sampleData.json';
import { OverlayComponent } from './overlay.component';

@Component({
  selector: 'content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.scss']
})
export class ContentSectionComponent implements OnInit {

  getData: any;
  getLength : any;

  classToggled = false;
  @ViewChild('overlay')
  overlay: OverlayComponent = new OverlayComponent;

  recievedFromChild:string="empty";

  @Output() onClose = new EventEmitter<void>();
  isSort: any;

  constructor() { }

  ngOnInit(): void {
    this.getData = shopData;
    this.getLength = shopData.shopData.length;
  }

  showOverlay() {
    this.overlay.showOverlay('This is an overlay!');   
  }

  onOverlayClose($event: any) {
    this.isSort = $event;
    this.sortData($event);
  }

  sortData(_case: string) {
    console.log(_case);
    switch (_case) {
      case 'ascending':
        this.getData.shopData.sort((a : any, b: any) => {
          let typeA = a.name.toLowerCase(),
            typeB = b.name.toLowerCase();
          if (typeA < typeB)
            //sort string ascending
            return -1;
          if (typeA > typeB) return 1;
          return 0; //default return value (no sorting)
        });
        break;
      case 'descending':
        this.getData.shopData.sort((a: any, b: any) => {
          let typeA = a.name.toLowerCase(),
            typeB = b.name.toLowerCase();
          if (typeA > typeB)
            //sort string ascending
            return -1;
          if (typeA > typeB) return 1;
          return 0; //default return value (no sorting)
        });
    }
  }
}
