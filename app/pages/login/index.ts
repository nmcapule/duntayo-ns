import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "login",
  templateUrl: "./login.ng.html",
  styleUrls: ["./login.css"],
  moduleId: module.id
})
export class Login {
  constructor(private router: Router) { }
  submit() {
    this.router.navigate(["/groups"]);
  }
}