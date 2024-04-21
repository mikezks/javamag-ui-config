import { Injectable, Provider, Type, inject } from "@angular/core";
import { AbstractNavigationService, NAVIGATION_CONFIG, NavigationConfig } from '../../model-navigation';
import { DefaultNavigationService } from "./default-navigation.provider";


const DEFAULT_SERVICE: Type<AbstractNavigationService> = DefaultNavigationService;

@Injectable({
  providedIn: 'root',
  useClass: DEFAULT_SERVICE
})
export abstract class NavigationService extends AbstractNavigationService {}


export function provideNavigationService(
  config: NavigationConfig,
  navService: Type<AbstractNavigationService> = DEFAULT_SERVICE
): Provider {
  return [
    {
      provide: NAVIGATION_CONFIG,
      multi: true,
      useValue: config
    },
    {
      provide: NavigationService,
      useFactory: (navConfig = inject<NavigationConfig[]>(NAVIGATION_CONFIG)) => {
        const service = new navService();
        service.state.set(navConfig[0]);

        return service;
      }
    }
  ];
}
