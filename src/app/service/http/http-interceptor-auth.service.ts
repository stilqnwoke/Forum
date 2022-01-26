import { BasicAuthService } from "./../basic-auth.service";
import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HttpInterceptorAuthService {
  constructor(private basicAuthService: BasicAuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let basicAuthHeaderString = this.basicAuthService.getAuthenticatedToken();
    let username = this.basicAuthService.getAuthenticatedUser();

    if (basicAuthHeaderString && username) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString,
        },
      });
    }

    return next.handle(request);
  }
}
