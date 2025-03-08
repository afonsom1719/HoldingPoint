import { NgModule } from '@angular/core';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FlightsComponent } from './components/flights/flights.component';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
    declarations: [
        TopBarComponent,
        FlightsComponent
    ],
    imports: [
        TableModule,
        ToolbarModule
    ],
    exports: [
        TopBarComponent,
        FlightsComponent
    ]
})
export class GeneralModule { }