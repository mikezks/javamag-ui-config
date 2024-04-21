import { Routes } from '@angular/router';
import { FlightTypeaheadComponent } from './features/departure/departure.component';
import { ScanTicketComponent } from './features/scan-ticket/scan-ticket.component';
import { provideNavigationConfig } from '../shared/logic-navigation';
import { BOARDING_NAVIGATION } from './boarding.navigation';


export const BOARDING_ROUTES: Routes = [
  {
    path: '',
    providers: [
      provideNavigationConfig(BOARDING_NAVIGATION)
    ],
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
