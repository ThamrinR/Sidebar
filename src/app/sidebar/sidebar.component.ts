import { Component, OnInit } from '@angular/core';
import {faUser, faAddressBook, faBoxOpen, faCartArrowDown, faBuilding, faNewspaper, faMoneyBillWave} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  faUser = faUser;
  faAddressBook = faAddressBook;
  faBoxOpen = faBoxOpen;
  faCartArrowDown = faCartArrowDown;
  faBuilding = faBuilding;
  faNewspaper = faNewspaper;
  faMoneyBillWave = faMoneyBillWave;


  constructor(
  ) { }

  ngOnInit(): void {
  }

}
