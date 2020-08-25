import { Component, OnInit } from '@angular/core';
import {faEdit, faTrash, faPlus} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
  akuns:any=[];
  faEdit= faEdit;
  faTrash = faTrash;
  faPlus = faPlus;
  constructor(
  ) {
}
ngOnInit(): void {
}
}