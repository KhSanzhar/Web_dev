import { Component } from '@angular/core';

import {categories} from '../categories';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  categories = categories;
}
