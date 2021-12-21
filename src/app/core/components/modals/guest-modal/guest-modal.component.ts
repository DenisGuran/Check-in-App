import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Disciplinedto } from 'src/app/models/disciplinedto';

@Component({
  selector: 'app-guest-modal',
  templateUrl: './guest-modal.component.html',
  styleUrls: ['./guest-modal.component.scss']
})
export class GuestModalComponent implements OnInit {

  @Input() discipline!: Disciplinedto;

  constructor(public modal: NgbActiveModal) {}

  ngOnInit(): void {
  }

}
