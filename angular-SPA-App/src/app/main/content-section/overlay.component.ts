import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-overlay',
  template: `
    <div class="overlay d-flex align-items-right justify-content-center" *ngIf="show">
            <div class="row" style="margin-left:auto;height:100%">
                <div class="col-md-12 col-xs-12">
                    <div class="card col-xs-12" style="height:100%">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-12 col-xs-12">
                                    <span>Filter By</span>
                                    <button class="btn btn-outline-danger btn-sm" style="float:right">Reset All</button>
                                    <hr>
                                </div>
                                <span>Sort</span>
                                <div class="col-md-12">
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-secondary" (click)="send('ascending')">A to Z</button>
                                        <button type="button" class="btn btn-secondary" (click)="sendAsc('descending')">Z to A</button>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                       <div class="card-footer" *ngIf="!loading">
                       <button type="button" class="btn btn-danger" style="width:100%" (click)="close()">Apply</button>
                       </div>
                        
                    </div>
                </div>
            </div>
        </div>
  `,
  styles: [
    `
      .overlay {
        position: fixed;
        top: 0;
        right: 0;        
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1000;
      }
    `,
  ],
})
export class OverlayComponent {
    @Output() onClose = new EventEmitter();
    message: string | undefined;
    show = false;
    loading = false;
    getData: any;


  showOverlay(message: string) {
    this.show = true;
  }

  send(val: any) {
    this.getData = val;
  }

  sendAsc(val: any) {   
    this.getData = val;
  }

  showLoading() {
    this.loading = true;
  }

  hideLoading() {
    this.loading = false;
  }

  close() {
    this.onClose.emit(this.getData);
    this.show = false;
  }

}
