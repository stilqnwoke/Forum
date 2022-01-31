import { BasicAuthService } from "./../service/basic-auth.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  username = "stkwe";
  password = "";
  errorMessage = "Invalid Credentials";
  invalidLogin = false;

  //Router
  //Dependency Injection
  constructor(
    private router: Router,
    private basicAuthService: BasicAuthService
  ) {}

  ngOnInit() {}

  handleJWTAuthLogin() {
    this.basicAuthService
      .executeJWTAuthenticationService(this.username, this.password)
      .subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(["/", this.username]);
          this.invalidLogin = false;
        },
        (error) => {
          console.log(error);
          this.invalidLogin = true;
        }
      );
  }
}
