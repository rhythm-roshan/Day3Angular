import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { NavBarComponent } from './menu/nav-bar/nav-bar.component';
import { DescBarComponent } from './menu/desc-bar/desc-bar.component';
import { ColorChangeDirective } from './color-change.directive';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { SwitchChildComponent } from './switch-case/switch-child/switch-child.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavBarComponent,
    DescBarComponent,
    ColorChangeDirective,
    SwitchCaseComponent,
    SwitchChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
