import {Component, Inject, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {NgxSmartModalService} from 'ngx-smart-modal';
import { setTheme } from 'ngx-bootstrap/utils';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {MainService, Stadium} from './main-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  modalRef: BsModalRef;
  stadiumData: Stadium[];
  selectedStadium:  Stadium[];
  constructor(private modalService: BsModalService, private  mainservice: MainService) {}


  ngOnInit() {
this.stadiumData = this.mainservice.getData();
console.log(this.stadiumData);

  }

  openModal(template: TemplateRef<any>, s: any) {
    this.selectedStadium  = s;
    this.modalRef = this.modalService.show(template);
  }
}
