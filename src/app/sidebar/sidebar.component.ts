import { Component, AfterViewInit } from '@angular/core';
import { SideJs } from 'src/assets/js/app.js';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    SideJs();
  }

}
