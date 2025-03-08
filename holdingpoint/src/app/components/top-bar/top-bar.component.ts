import { Component, OnInit } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-top-bar',
  standalone: true, // Mark the component as standalone
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  imports: [
    ToolbarModule
  ]
})

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.css'],
    imports: []
})
export class TopBarComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        // Initialization logic here
    }

}