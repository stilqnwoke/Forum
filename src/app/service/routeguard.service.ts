import { HardcodedAuthService } from "./hardcoded-auth.service";
import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class RouteguardService implements CanActivate {
  constructor(
    private hardcodedAuthService: HardcodedAuthService,
    private router: Router
  ) {}

  path: import("@angular/router").ActivatedRouteSnapshot[];
  route: import("@angular/router").ActivatedRouteSnapshot;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardcodedAuthService.isUserLoggedIn()) {
      return true;
    }

    this.router.navigate(["login"]);
    return false;
  }
}
