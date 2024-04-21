import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavigationService } from '../../logic-navigation';


@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    NgClass,
    RouterLink, RouterLinkActive
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
            <a (click)="nav.toggleMenu(item.route)">
              <i [ngClass]="'icon icon-' + item.icon"></i>
              <p>
                {{ item.label }}
                <b class="caret"></b>
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
