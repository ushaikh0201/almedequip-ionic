import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { LayoutComponent } from './layouts/layout.component';
import { AppHeaderComponent } from './layouts/app-header/app-header.component';
import { AppFooterComponent } from './layouts/app-footer/app-footer.component';

@NgModule({
  declarations: [
    LoginModalComponent,
    LayoutComponent,
    AppHeaderComponent,
    AppFooterComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class CoreModule { }
