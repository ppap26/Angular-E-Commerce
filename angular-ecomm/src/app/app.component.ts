import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ProductsListComponent } from './pages/product-list/product-list.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  template: `
    <app-header />
    <router-outlet />
  `,
  styles: ``,
})
export class AppComponent {}
