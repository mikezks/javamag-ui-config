import { Routes } from "@angular/router";
import { PassengerSearchComponent } from "./features/passenger-search/passenger-search.component";
import { PassengerEditComponent } from "./features/passenger-edit/passenger-edit.component";
import { providePassengerStore } from "./+state/passenger.signal.store";
import { isDevMode } from "@angular/core";


export const CHECKIN_ROUTES: Routes = [
  {
    path: '',
    providers: [
      providePassengerStore(isDevMode())
    ],
    children: [
      {
        path: '',
        redirectTo: 'passenger',
        pathMatch: 'full'
      },
      {
        path: 'passenger',
        children: [
          {
            path: '',
            redirectTo: 'search',
            pathMatch: 'full'
          },
          {
            path: 'search',
            component: PassengerSearchComponent,
          },
          {
            path: 'edit/:id',
            component: PassengerEditComponent
          }
        ]
      }
    ]
  }
];

export default CHECKIN_ROUTES;
