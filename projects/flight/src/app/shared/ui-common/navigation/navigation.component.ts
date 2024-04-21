import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavigationService } from '../../logic-navigation';
import { ClickLocal } from '../click-local/click-local.directive';


@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    NgClass,
    RouterLink, RouterLinkActive,
    ClickLocal
  ],
  template: `
    <ul class="nav">
      @for (item of nav.state(); track item.route) {
        @if (!item.items || !item.items.length) {
          <li routerLinkActive="active">
            <a [routerLink]="item.route.split('/')">
              <i [ngClass]="'icon icon-' + item.icon"></i>
              <p>{{ item.label }}</p>
            </a>
          </li>
        } @else {
          <li [class.menu-open]="item.open" >
            <a
              [routerLink]="item.route.split('/')"
              routerLinkActive
              (isActiveChange)="nav.toggleMenu(item.route, $event)"
            >
              <i [ngClass]="'icon icon-' + item.icon"></i>
              <p>
                {{ item.label }}
                <b (clickLocal)="nav.toggleMenu(item.route)" class="caret"></b>
              </p>
            </a>

            @if (item.open) {
              <div class="collapse show">
                <ul class="nav sub-nav">
                  @for (subItem of item.items; track subItem.route) {
                    <li routerLinkActive="active">
                      <a [routerLink]="item.route.split('/').concat(subItem.route.split('/'))">
                        <i [ngClass]="'icon icon-' + subItem.icon"></i>
                        <p>{{ subItem.label }}</p>
                      </a>
                    </li>
                  }
                </ul>
              </div>
            }
          </li>
        }
      }
    </ul>
  `
})
export class NavigationComponent {
  protected nav = inject(NavigationService);
}
