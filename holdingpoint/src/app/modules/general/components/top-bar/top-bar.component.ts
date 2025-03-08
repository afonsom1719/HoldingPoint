import { Component, OnInit } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.css'],
    standalone: false
})
export class TopBarComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        // Initialization logic here
    }

}