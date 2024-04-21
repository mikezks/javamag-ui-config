import { Routes } from "@angular/router";
import { PassengerSearchComponent } from "./features/passenger-search/passenger-search.component";
import { PassengerEditComponent } from "./features/passenger-edit/passenger-edit.component";
import { providePassengerStore } from "./+state/passenger.signal.store";
import { isDevMode } from "@angular/core";
import { CHECKIN_NAVIGATION } from "./checkin.navigation";
import { provideNavigationConfig } from "../shared/logic-navigation";
import { MilesComponent } from "./features/miles/miles.component";


export const CHECKIN_ROUTES: Routes = [
  {
    path: '',
    providers: [
      provideNavigationConfig(CHECKIN_NAVIGATION),
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
      },
      {
        path: 'miles',
        component: MilesComponent
      }
    ]
  }
];

export default CHECKIN_ROUTES;
