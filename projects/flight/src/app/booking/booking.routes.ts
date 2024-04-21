import { Routes } from "@angular/router";
import { provideEffects } from "@ngrx/effects";
import { provideState } from "@ngrx/store";
import { FlightTypeaheadComponent } from "../boarding/features/departure/departure.component";
import { TicketEffects } from "./+state/effects";
import { ticketFeature } from "./+state/reducer";
import { FlightBookingComponent } from "./features/flight-booking/flight-booking.component";
import { FlightEditComponent } from "./features/flight-edit/flight-edit.component";
import { FlightSearchComponent } from "./features/flight-search/flight-search.component";
import { flightsResolverConfig } from "./logic/data-access/flight.resolver";
import { MyFlightsComponent } from "./features/my-flights/my-flights.component";


export const BOOKING_ROUTES: Routes = [
  {
    path: '',
    component: FlightBookingComponent,
    providers: [
      provideState(ticketFeature),
      provideEffects([TicketEffects]),
    ],
    children: [
      {
        path: '',
        redirectTo: 'flight',
        pathMatch: 'full'
      },
      {
        path: 'flight',
        children: [
          {
            path: '',
            redirectTo: 'search',
            pathMatch: 'full'
          },
          {
            path: 'search',
            component: FlightSearchComponent,
          },
          {
            path: 'edit/:id',
            component: FlightEditComponent,
            resolve: flightsResolverConfig
          },
          {
            path: 'my-flights',
            component: MyFlightsComponent,
          }
        ]
      }
    ]
  }
];

export default BOOKING_ROUTES;
