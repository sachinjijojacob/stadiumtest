import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {MainService, Stadium} from '../main-service.service';
import {BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
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
