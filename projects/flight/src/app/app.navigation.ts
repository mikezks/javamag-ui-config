import { NavigationConfig } from "./shared/model-navigation";


export const APP_NAVIGATION: NavigationConfig = [
  {
    route: 'home',
    label: 'Home',
    icon: 'home'
  },
  {
    route: 'booking',
    label: 'Booking',
    icon: 'booking',
  },
  {
    route: 'checkin',
    label: 'Checkin',
    icon: 'checkin',
    items: [
      {
        route: 'passenger',
        label: 'Passenger',
        icon: 'passenger'
      },
    ]
  },
  {
    route: 'luggage',
    label: 'Luggage',
    icon: 'luggage',
    items: [
      {
        route: 'checkin',
        label: 'Checkin',
        icon: 'luggage'
      },
      {
        route: 'report-loss',
        label: 'Report Loss',
        icon: 'report-loss'
      },
    ]
  },
  {
    route: 'boarding',
    label: 'Boarding',
    icon: 'boarding',
  },
];
