import { Routes } from "@angular/router";
import { provideEffects } from "@ngrx/effects";
import { provideState } from "@ngrx/store";
import { TicketEffects } from "./+state/effects";
import { ticketFeature } from "./+state/reducer";
import { FlightBookingComponent } from "./features/flight-booking/flight-booking.component";
import { FlightEditComponent } from "./features/flight-edit/flight-edit.component";
import { FlightSearchComponent } from "./features/flight-search/flight-search.component";
import { flightsResolverConfig } from "./logic/data-access/flight.resolver";
import { MyFlightsComponent } from "./features/my-flights/my-flights.component";
import { provideNavigationConfig } from "../shared/logic-navigation";
import { BOOKING_NAVIGATION } from "./booking.navigation";
import { FlightTypeaheadComponent } from "../boarding/features/departure/departure.component";


export const BOOKING_ROUTES: Routes = [
  {
    path: '',
    component: FlightBookingComponent,
    providers: [
      provideNavigationConfig(BOOKING_NAVIGATION),
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
            path: 'departures',
            component: FlightTypeaheadComponent
          }
        ]
      },
      {
        path: 'my-flights',
        component: MyFlightsComponent,
      }
    ]
  }
];

export default BOOKING_ROUTES;
