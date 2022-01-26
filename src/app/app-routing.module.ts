import { PostsComponent } from "./posts/posts.component";
import { MainComponent } from "./main/main.component";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RouteguardService } from "./service/routeguard.service";

import { ListpostsComponent } from "./listposts/listposts.component";
import { ErrorComponent } from "./error/error.component";
const routes: Routes = [
  {
    path: "",
    component: MainComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "posts",
    component: ListpostsComponent,
    canActivate: [RouteguardService],
  },
  { path: "**", component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
