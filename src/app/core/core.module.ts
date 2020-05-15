import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from './services/api.service';
import { ClickOutsideDirective } from './directives/click-outside.directive';

@NgModule({
  declarations: [ClickOutsideDirective],
  imports: [
    CommonModule
  ],
  providers: [
    ApiService
  ]
})
export class CoreModule { }
