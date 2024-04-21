import { Routes } from '@angular/router';
import { FlightTypeaheadComponent } from './features/departure/departure.component';
import { ScanTicketComponent } from './features/scan-ticket/scan-ticket.component';


export const BOARDING_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'departures',
        pathMatch: 'full'
      },
      {
        path: 'departures',
        component: FlightTypeaheadComponent
      },
      {
        path: 'scan-ticket',
        component: ScanTicketComponent
      }
    ]
  }
];

export default BOARDING_ROUTES;
