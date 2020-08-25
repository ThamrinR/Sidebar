import { Component, OnInit } from '@angular/core';
import {faUser, faAddressBook, faBoxOpen, faCartArrowDown, faBuilding, faNewspaper, faMoneyBillWave,faBars,faAngleDown} from '@fortawesome/free-solid-svg-icons';


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
  faBars = faBars;
  faAngleDown = faAngleDown;
  terbuka = false;

  constructor(
  ) { }

  ngOnInit(): void {
  }
  bukaSidebar(){
    var menuToggle = document.getElementById("wrapper")
    if(this.terbuka){
      menuToggle.classList.remove("toggled")
      this.terbuka = false
    }else{
      menuToggle.classList.add("toggled")
      this.terbuka = true
    }
  }
}
