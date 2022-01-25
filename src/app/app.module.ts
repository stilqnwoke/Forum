import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { MainComponent } from "./main/main.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ListpostsComponent } from "./listposts/listposts.component";
import { PostsComponent } from "./posts/posts.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    PostsComponent,
    HeaderComponent,
    FooterComponent,
    ListpostsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
