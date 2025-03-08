import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css'],
  imports: [
    TableModule
  ]
})
export class FlightsComponent implements OnInit {
  flights = [
    { flightNumber: 'AA123', departure: 'JFK', destination: 'LAX', status: 'On Time' },
    { flightNumber: 'BA456', departure: 'LHR', destination: 'ORD', status: 'Delayed' },
    { flightNumber: 'DL789', departure: 'ATL', destination: 'SFO', status: 'Cancelled' },
    // Add more flight data here as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
