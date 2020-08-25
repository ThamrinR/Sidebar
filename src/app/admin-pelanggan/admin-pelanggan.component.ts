import { Component, OnInit } from '@angular/core';
import {faEdit, faTrash, faPlus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-pelanggan',
  templateUrl: './admin-pelanggan.component.html',
  styleUrls: ['./admin-pelanggan.component.css']
})
export class AdminPelangganComponent implements OnInit {
  akuns:any=[];
  faEdit= faEdit;
  faTrash = faTrash;
  faPlus = faPlus;
  constructor() { }

  ngOnInit(): void {
  }

}
