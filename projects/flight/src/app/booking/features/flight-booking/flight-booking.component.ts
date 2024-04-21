import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavigationComponent } from '../../../shared/ui-common';
import { provideNavigationService } from '../../../shared/logic-navigation';


@Component({
  selector: 'app-flight-booking',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationComponent
  ],
  providers: [
    provideNavigationService([
      { route: 'flight/search', label: 'Flight Search', icon: 'flight' },
      { route: 'flight/departures', label: 'Departures', icon: 'departures' }
    ])
  ],

  template: `
    <app-navigation class="nav-standalone" />
    <div>
      <router-outlet></router-outlet>
    </div>
  `
})
export class FlightBookingComponent {}
