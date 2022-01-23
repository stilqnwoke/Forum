import { PostsComponent } from "./posts/posts.component";
import { MainComponent } from "./main/main.component";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

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
    component: PostsComponent,
  },
  {
    path: "",
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
