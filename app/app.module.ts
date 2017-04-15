import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { AppComponent } from "./app.component";

import { routes, navigatableComponents } from "./app.routing";

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule.forRoot(routes),
    NativeScriptRouterModule,
  ],
  declarations: [
    AppComponent,
    ...navigatableComponents
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
