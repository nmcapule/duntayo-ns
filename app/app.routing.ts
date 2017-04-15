import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { Login } from "./pages/login";
import { Groups } from "./pages/groups";

export const routes: Routes = [
    { path: "", component: Login },
    { path: "groups", component: Groups },
    { path: "contacts", redirectTo: "/" },
    { path: "chat", redirectTo: "/" }
];

export const navigatableComponents = [
  Login,
  Groups
];