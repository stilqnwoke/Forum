import { PostService } from "./../service/post.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Post } from "../listposts/listposts.component";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"],
})

export class PostsComponent implements OnInit {
  id: number;
  post: Post;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];

    this.post = new Post(this.id, "", new Date(), "", "");

    if (this.id != -1) {
      this.postService
        .retrievePost("stkwe", this.id)
        .subscribe((data) => (this.post = data));
    }
  }

  savePost() {
    if (this.id === -1) {
      //Create todo
      this.postService.createPost("stkwe", this.post).subscribe((data) => {
        console.log(data);
        this.router.navigate(["posts"]);
      });
    } else {
      this.postService
        .updatePost("stkwe", this.id, this.post)
        .subscribe((data) => {
          console.log(data);
          this.router.navigate(["posts"]);
        });
    }
  }
}
