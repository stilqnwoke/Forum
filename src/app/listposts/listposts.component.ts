import { PostService } from "./../service/post.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

export class Post {
  constructor(
    public id: number,
    public title: string,
    public madeOn: Date,
    public username: string,
    public text: string
  ) {}
}

@Component({
  selector: "app-listposts",
  templateUrl: "./listposts.component.html",
  styleUrls: ["./listposts.component.css"],
})
export class ListpostsComponent implements OnInit {
  posts: Post[];

  message: string;

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit() {
    this.refreshPosts();
  }

  refreshPosts() {
    this.postService.retrieveAllPosts("stkwe").subscribe((response) => {
      console.log(response);
      this.posts = response;
    });
  }

  deletePost(id) {
    console.log(`delete post ${id}`);
    this.postService.deletePost("stkwe", id).subscribe((response) => {
      console.log(response);
      this.message = `Delete of Post ${id} successful`;
      this.refreshPosts();
    });
  }

  updatePost(id) {
    console.log(`update ${id}`);
    this.router.navigate(["posts", id]);
  }

  addPost() {
    this.router.navigate(["posts", -1]);
  }
}
