import { HttpInterceptorAuthService } from "./service/http/http-interceptor-auth.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { MainComponent } from "./main/main.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ListpostsComponent } from "./listposts/listposts.component";
import { PostsComponent } from "./posts/posts.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ErrorComponent } from "./error/error.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    PostsComponent,
    HeaderComponent,
    FooterComponent,
    ListpostsComponent,
    ErrorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorAuthService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
