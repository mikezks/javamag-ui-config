import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">UI Component</h2>
      </div>

      <div class="card-body">
        <ul>
          <li>Standalone</li>
          <li>Signals</li>
          <li>Control Flow</li>
          <li>Generic Patterns</li>
          <li>Dependency Injection Provider</li>
          <li>Lazy Loading</li>
          <li>Directives</li>
        </ul>
      </div>
    </div>
  `,
})
export class HomeComponent {}
